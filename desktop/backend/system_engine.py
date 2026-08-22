"""
WOS system detection engine.

PART 0.2 provides hardware and Windows information
interfaces without applying any optimization.
"""


from __future__ import annotations

import platform
import sys
from dataclasses import dataclass


@dataclass(frozen=True)
class SystemInformation:
    """Basic operating system information."""

    operating_system: str
    release: str
    version: str
    architecture: str
    python_version: str


class SystemEngine:
    """Provides read-only system information."""

    def get_system_information(self) -> SystemInformation:
        """Return basic system information."""

        return SystemInformation(
            operating_system=platform.system(),
            release=platform.release(),
            version=platform.version(),
            architecture=platform.machine(),
            python_version=sys.version.split()[0],
        )

    def is_windows(self) -> bool:
        """Return True when running on Microsoft Windows."""

        return platform.system().lower() == "windows"

    def is_supported_windows(self) -> bool:
        """
        Check whether the operating system is a supported
        Windows generation.

        Actual Windows build compatibility checks are added
        in the system scanner phase.
        """

        if not self.is_windows():
            return False

        release = platform.release()

        return release in {
            "10",
            "11",
        }
