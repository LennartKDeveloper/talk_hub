#!/bin/bash

# Ensure we are in the root of the project
cd "$(dirname "$0")/.."

echo "🚀 Starte GDG Talk Admin..."
echo "Dieser Prozess läuft lokal. Drücke CTRL+C, um ihn zu beenden, wenn du fertig bist."

# Start Next.js admin app on port 3001 to avoid conflict with web
cd apps/admin
export PORT=3001
npm run dev -- -p 3001 &
PID=$!

# Wait for server to start
sleep 4

# Open browser
echo "Öffne http://localhost:3001 ..."
open http://localhost:3001

# Wait for process
wait $PID
