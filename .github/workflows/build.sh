#!/usr/bin/bash

# Get the current working directory
current_dir=$(pwd)

# Print the current working directory
echo "Current working directory: $current_dir"

touch .env
echo VITE_API_KEY=$VITE_API_KEY >> .env
echo VITE_AUTH_DOMAIN=$VITE_AUTH_DOMAIN >> .env
echo VITE_PROJECT_ID=$VITE_PROJECT_ID >> .env
echo VITE_STORAGE_BUCKET=$VITE_STORAGE_BUCKET >> .env
echo VITE_MESSAGING_SENDER_ID=$VITE_MESSAGING_SENDER_ID >> .env
echo VITE_APP_ID=$VITE_APP_ID >> .env
echo VITE_MEASUREMENT_ID=$VITE_MEASUREMENT_ID >> .env
echo VITE_BACKEND_URL=$VITE_BACKEND_URL >> .env
echo ".env created"