@echo off
:: Software Architecture Atlas - Windows Startup Script
:: Owner & Architecture Lead: Kenan AY
:: Description: Checks system dependencies (Node, npm), resolves port conflicts, installs node_modules, and launches dev server on Windows.

echo =============================================
echo     SOFTWARE ARCHITECTURE ATLAS WORKSPACE    
echo         Owner ^& Lead: Kenan AY               
echo =============================================
echo.

:: 1. Dependency Control (System Requirements)
echo [INFO] Checking system dependencies...
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo [ERROR] Node.js is not installed! Please install Node.js before running this application.
  pause
  exit /b 1
)
where npm >nul 2>nul
if %errorlevel% neq 0 (
  echo [ERROR] npm is not installed! Please install npm before running this application.
  pause
  exit /b 1
)
for /f "tokens=*" %%i in ('node -v') do set NODE_VER=%%i
for /f "tokens=*" %%i in ('npm -v') do set NPM_VER=%%i
echo [INFO] Node.js %NODE_VER% and npm %NPM_VER% detected.

:: 2. Package Dependency Check
if not exist node_modules (
  echo [INFO] node_modules not found. Installing package dependencies...
  call npm install
) else (
  echo [INFO] node_modules folder is present.
)

:: 3. Port Management - never terminate an unrelated process
set PORT=4321
netstat -aon | findstr /R /C:":4321 " >nul
if %errorlevel% equ 0 (
  echo [WARNING] Port 4321 is busy; using 4322.
  set PORT=4322
)

:: 4. Run Verification Suite
echo [INFO] Running codebase verification pipeline...
call npm run verify
if %errorlevel% neq 0 goto error

echo.
echo [INFO] All checks passed. Starting dev server at http://localhost:%PORT%...
call npm run dev -- --port %PORT%
goto end

:error
echo [ERROR] Verification failed! Please fix the errors above.
pause
exit /b 1

:end
