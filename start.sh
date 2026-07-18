#!/bin/bash
# Software Architecture Atlas - Startup Script (mac/Linux)
# Owner & Architecture Lead: Kenan AY
# Description: Checks system dependencies (Node, npm), resolves port conflicts, installs node_modules, and launches dev server.

echo "============================================="
echo "    SOFTWARE ARCHITECTURE ATLAS WORKSPACE    "
echo "        Owner & Lead: Kenan AY               "
echo "============================================="
echo ""

# 1. Dependency Control (System Requirements)
echo "[INFO] Checking system dependencies..."
if ! command -v node &> /dev/null; then
  echo "[ERROR] Node.js is not installed! Please install Node.js before running this application."
  exit 1
fi
if ! command -v npm &> /dev/null; then
  echo "[ERROR] npm is not installed! Please install npm before running this application."
  exit 1
fi
echo "[INFO] Node.js $(node -v) and npm $(npm -v) detected."

# 2. Package Dependency Check
if [ ! -d "node_modules" ]; then
  echo "[INFO] node_modules not found. Installing package dependencies..."
  npm install
else
  echo "[INFO] node_modules folder is present."
fi

# 3. Port Management — never terminate an unrelated process.
PORT=4321
while lsof -t -i:"$PORT" >/dev/null 2>&1; do
  echo "[WARNING] Port $PORT is busy; trying the next port."
  PORT=$((PORT + 1))
done
echo "[INFO] Using free port $PORT."

# 4. Run Verification Suite
echo "[INFO] Running codebase verification pipeline..."
npm run verify

if [ $? -ne 0 ]; then
  echo "[ERROR] Verification failed! Please fix the errors above."
  exit 1
fi

echo ""
echo "[INFO] All checks passed. Starting dev server at http://localhost:$PORT..."
npm run dev -- --port "$PORT"
