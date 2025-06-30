#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "Installing server dependencies..."
npm install

echo "Moving to client directory..."
cd ../client

echo "Installing client dependencies..."
npm install

echo "Building client..."
npm run build

echo "Creating build directory in server..."
cd ../server
mkdir -p client/build

echo "Copying build files..."
cp -r ../client/build/* ./client/build/

echo "Build script completed!" 