@echo off

setlocal

echo ==========================================
echo WOS — Windows Optimizer Suite
echo Build System
echo ==========================================

python -m PyInstaller ^
    --noconfirm ^
    --clean ^
    --windowed ^
    --name WindowsFPSBoosterPro ^
    desktop_entry.py

if errorlevel 1 (
    echo.
    echo BUILD FAILED
    exit /b 1
)

echo.
echo BUILD COMPLETED

endlocal
