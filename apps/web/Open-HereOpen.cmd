@echo off
setlocal
cd /d "%~dp0"
title Here Open website preview - keep this window open
set "HEREOPEN_NODE="
where node.exe >nul 2>nul
if not errorlevel 1 set "HEREOPEN_NODE=node.exe"
if not defined HEREOPEN_NODE if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" set "HEREOPEN_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not defined HEREOPEN_NODE (
  echo Node.js is required. Install Node.js 22 or newer, then open this file again.
  pause
  exit /b 1
)
echo Keep this window open while viewing the website.
echo Open http://127.0.0.1:3000 in your browser.
echo If the browser opens before the server is ready, press Refresh.
start "" "http://127.0.0.1:3000/"
"%HEREOPEN_NODE%" scripts\serve.mjs
echo.
echo If the address is already in use, the preview may already be running.
echo Otherwise, read the error above and share it for help.
pause
