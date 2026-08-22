"""
WOS PART 0 architecture validation.

This checker validates the project structure before
development moves to the next phase.
"""


from __future__ import annotations

from pathlib import Path


REQUIRED_DIRECTORIES = (
    "app",
    "backend",
    "scripts",
    "config",
    "assets",
    "backup",
    "logs",
    "cache",
    "build",
    "dist",
)


REQUIRED_BACKEND_FILES = (
    "backend/__init__.py",
    "backend/logger.py",
    "backend/security.py",
    "backend/system_engine.py",
)


def validate_desktop_architecture(
    desktop_directory: Path,
) -> tuple[bool, list[str]]:
    """
    Validate the required PART 0 desktop structure.

    Returns:
        A tuple containing:
        - validation result
        - list of missing paths
    """

    missing: list[str] = []

    for directory in REQUIRED_DIRECTORIES:
        path = desktop_directory / directory

        if not path.is_dir():
            missing.append(str(path))

    for relative_file in REQUIRED_BACKEND_FILES:
        path = desktop_directory / relative_file

        if not path.is_file():
            missing.append(str(path))

    return not missing, missing


def main() -> int:
    """Run architecture validation."""

    project_root = Path(__file__).resolve().parents[1]
    desktop_directory = project_root

    valid, missing = validate_desktop_architecture(
        desktop_directory
    )

    print("WOS Architecture Validation")
    print("============================")

    if valid:
        print("STATUS: SUCCESS")
        print("PART 0 architecture is valid.")
        return 0

    print("STATUS: FAILED")
    print("Missing paths:")

    for path in missing:
        print(f" - {path}")

    return 1


if __name__ == "__main__":
    raise SystemExit(main())
