#!/bin/bash

# 设置默认端口
PORT=${PORT:-8002}
NODE_ENV=${NODE_ENV:-development}

echo "Starting application on port $PORT"

if [ "$NODE_ENV" = "production" ]; then
  npm run start:prod
else
  docker-compose -f docker/docker-compose.yml up -d
fi