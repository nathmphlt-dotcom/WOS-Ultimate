"""
WOS security and safety foundation.

This module defines common safety rules used by all
Windows optimization engines.
"""


from __future__ import annotations

from dataclasses import dataclass
from enum import Enum


class OperationStatus(str, Enum):
    """Standard WOS operation states."""

    QUEUED = "QUEUED"
    RUNNING = "RUNNING"
    SUCCESS = "SUCCESS"
    WARNING = "WARNING"
    FAILED = "FAILED"
    ROLLED_BACK = "ROLLED_BACK"
    SKIPPED = "SKIPPED"
    UNSUPPORTED = "UNSUPPORTED"


class SafetyLevel(str, Enum):
    """Risk classification for optimization operations."""

    SAFE = "SAFE"
    OPTIONAL = "OPTIONAL"
    EXPERIMENTAL = "EXPERIMENTAL"


@dataclass(frozen=True)
class SafetyResult:
    """Result of a safety/compatibility check."""

    supported: bool
    safe_to_run: bool
    reason: str
    level: SafetyLevel


DO_NOT_TOUCH_PROCESSES = frozenset(
    {
        "winlogon.exe",
        "csrss.exe",
        "services.exe",
        "lsass.exe",
        "smss.exe",
        "wininit.exe",
        "svchost.exe",
    }
)


DO_NOT_TOUCH_SERVICES = frozenset(
    {
        "WinDefend",
        "wuauserv",
        "BITS",
        "RpcSs",
        "DcomLaunch",
        "PlugPlay",
        "EventLog",
    }
)


def check_safe_process(process_name: str) -> SafetyResult:
    """Determine whether a process is protected."""

    normalized = process_name.strip().lower()

    if normalized in DO_NOT_TOUCH_PROCESSES:
        return SafetyResult(
            supported=True,
            safe_to_run=False,
            reason="Critical Windows process is protected.",
            level=SafetyLevel.SAFE,
        )

    return SafetyResult(
        supported=True,
        safe_to_run=True,
        reason="Process is not in the protected process list.",
        level=SafetyLevel.SAFE,
    )


def check_safe_service(service_name: str) -> SafetyResult:
    """Determine whether a Windows service is protected."""

    normalized = service_name.strip()

    if normalized in DO_NOT_TOUCH_SERVICES:
        return SafetyResult(
            supported=True,
            safe_to_run=False,
            reason="Critical Windows service is protected.",
            level=SafetyLevel.SAFE,
        )

    return SafetyResult(
        supported=True,
        safe_to_run=True,
        reason="Service is not in the protected service list.",
        level=SafetyLevel.SAFE,
)
