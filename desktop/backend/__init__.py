"""
WOS Windows backend package.

The backend is responsible for communicating with Windows
through controlled CMD, PowerShell and Registry modules.

Architecture:

GUI
    ↓
Orchestrator
    ↓
Backend Engine
    ↓
CMD / PowerShell / Registry
    ↓
Verify
    ↓
Rollback when required
"""
