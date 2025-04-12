#!/bin/bash

# Install dependencies for both client and server
echo "Installing client dependencies..."
cd client && npm install
echo "Building client..."
npm run build

echo "Installing server dependencies..."
cd ../server && npm install
