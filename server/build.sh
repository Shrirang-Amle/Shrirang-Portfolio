#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install dependencies for server
npm install

# Navigate to client directory and install dependencies
cd ../client
npm install

# Build the client
npm run build

# Create client/build directory in server
cd ../server
mkdir -p client/build

# Copy built client files to server/client/build
cp -r ../client/build/* client/build/ 