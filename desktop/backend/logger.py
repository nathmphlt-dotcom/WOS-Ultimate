"""
WOS logging foundation.

Logging must never store:
- Passwords
- API keys
- Tokens
- Sensitive personal information
"""


from __future__ import annotations

from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Optional


@dataclass(frozen=True)
class LogEntry:
    """Represents one WOS operation log entry."""

    time: str
    module: str
    action: str
    command: str
    status: str
    result: str
    error: Optional[str] = None


class WOSLogger:
    """Centralized logger for WOS operations."""

    VALID_STATUSES = {
        "QUEUED",
        "RUNNING",
        "SUCCESS",
        "WARNING",
        "FAILED",
        "ROLLED_BACK",
        "SKIPPED",
        "UNSUPPORTED",
    }

    def __init__(self, log_directory: Path) -> None:
        self.log_directory = log_directory
        self.log_directory.mkdir(parents=True, exist_ok=True)

    def write(self, entry: LogEntry) -> Path:
        """Write a structured log entry to the optimization log."""

        if entry.status not in self.VALID_STATUSES:
            raise ValueError(
                f"Unsupported WOS log status: {entry.status}"
            )

        timestamp = datetime.now().astimezone().isoformat()

        line = (
            f"TIME={timestamp} | "
            f"MODULE={entry.module} | "
            f"ACTION={entry.action} | "
            f"COMMAND={self._sanitize(entry.command)} | "
            f"STATUS={entry.status} | "
            f"RESULT={self._sanitize(entry.result)}"
        )

        if entry.error:
            line += (
                f" | ERROR={self._sanitize(entry.error)}"
            )

        log_file = self.log_directory / "optimization.log"

        with log_file.open(
            "a",
            encoding="utf-8",
        ) as file:
            file.write(line + "\n")

        return log_file

    @staticmethod
    def _sanitize(value: str) -> str:
        """Remove obvious secret-like values before logging."""

        sensitive_markers = (
            "password=",
            "passwd=",
            "token=",
            "api_key=",
            "apikey=",
            "secret=",
        )

        sanitized = value

        for marker in sensitive_markers:
            lower_value = sanitized.lower()

            if marker in lower_value:
                start = lower_value.find(marker)
                end = sanitized.find(" ", start)

                if end == -1:
                    end = len(sanitized)

                sanitized = (
                    sanitized[:start]
                    + marker
                    + "[REDACTED]"
                    + sanitized[end:]
                )

        return sanitized
