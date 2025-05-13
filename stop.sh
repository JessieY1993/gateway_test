#!/bin/bash
echo "Stop application"
docker compose -f docker/docker-compose.yml down
docker rm kong-cp
docker rm kong-ee-database