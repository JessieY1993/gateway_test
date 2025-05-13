#!/bin/bash

# 设置默认端口
PORT=${PORT:-8002}
NODE_ENV=${NODE_ENV:-development}

echo "Starting application on port $PORT"
docker compose -f docker/docker-compose.yml up -d