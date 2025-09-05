# Judge0 Backend: Setup, API Keys, and Deployment (Local + Server)

This guide shows how to run a self‑hosted Judge0 CE backend with Docker, secure it with an auth token, and wire it into this widget. It also includes tips for production server deployment.

Important notes
- Judge0 CE listens on port 2358 by default.
- For cloud or LAN use, protect it with an auth header token and restrict origins.
- This library can call either RapidAPI (hosted) or your self‑hosted Judge0 via a proxy URL.

Quick decision tree
- Use RapidAPI: set VITE_JUDGE0_RAPIDAPI_KEY and you’re done.
- Self‑host locally: run docker compose, then set VITE_JUDGE0_PROXY_URL to http://localhost:2358.
- Self‑host with auth: also set VITE_JUDGE0_AUTH_HEADER_NAME and VITE_JUDGE0_AUTH_TOKEN and configure the same on Judge0.

## 1) Prerequisites
- Docker and Docker Compose installed
- Ports 2358 (API) and a free local Postgres/Redis via Docker compose

## 2) Start Judge0 locally (Docker Compose)
Create a folder (outside this repo is fine) with two files: `docker-compose.yml` and `judge0.conf`.

docker-compose.yml
- Uses official images as of Judge0 CE v1.13.x
- Exposes 2358
- Mounts `judge0.conf` for configuration

Example content:

```
x-logging: &default-logging
  logging:
    driver: json-file
    options:
      max-size: 100M

services:
  server:
    image: judge0/judge0:latest
    volumes:
      - ./judge0.conf:/judge0.conf:ro
    ports:
      - "2358:2358"
    privileged: true
    <<: *default-logging
    restart: always

  worker:
    image: judge0/judge0:latest
    command: ["./scripts/workers"]
    volumes:
      - ./judge0.conf:/judge0.conf:ro
    privileged: true
    <<: *default-logging
    restart: always

  db:
    image: postgres:16.2
    env_file: judge0.conf
    volumes:
      - data:/var/lib/postgresql/data/
    <<: *default-logging
    restart: always

  redis:
    image: redis:7.2.4
    command: [
      "bash", "-c",
      'docker-entrypoint.sh --appendonly no --requirepass "$${REDIS_PASSWORD}"'
    ]
    env_file: judge0.conf
    <<: *default-logging
    restart: always

volumes:
  data:
```

judge0.conf
- Single source of truth for Judge0 config
- Set strong values for POSTGRES_PASSWORD and REDIS_PASSWORD
- To require API auth, set AUTHZ_HEADER and AUTHZ_TOKEN.

Minimal example:

```
# Server Access and CORS
ALLOW_ORIGIN=
DISALLOW_ORIGIN=

# Optional: require an auth token on requests
AUTHZ_HEADER=X-Auth-User
AUTHZ_TOKEN=super-secret-token-123   # change this!

# Redis
REDIS_HOST=redis
REDIS_PORT=6379
REDIS_PASSWORD=change-me-redis-pass  # change this!
RESQUE_NAMESPACE=

# Postgres
POSTGRES_HOST=db
POSTGRES_PORT=5432
POSTGRES_DB=judge0
POSTGRES_USER=judge0
POSTGRES_PASSWORD=change-me-db-pass  # change this!

# Execution limits (defaults are fine for local)
CPU_TIME_LIMIT=5
WALL_TIME_LIMIT=10
MEMORY_LIMIT=128000
```

Run locally:
- From that folder run: docker compose up -d
- Wait ~10–20s, then test: curl http://localhost:2358/system_info
  - If AUTHZ_TOKEN is set, include the header, e.g.: -H "X-Auth-User: super-secret-token-123"

Common endpoints
- POST /submissions?base64_encoded=false&wait=false
- GET /submissions/{token}?base64_encoded=false
- Batch endpoints at /submissions/batch

## 3) Wire your app to self‑hosted Judge0
This repo’s client supports two modes:
- RapidAPI (hosted): set VITE_JUDGE0_RAPIDAPI_KEY (and optionally VITE_JUDGE0_RAPIDAPI_HOST)
- Self‑host proxy: set VITE_JUDGE0_PROXY_URL to your base URL (e.g., http://localhost:2358)
- Optional auth: set VITE_JUDGE0_AUTH_HEADER_NAME and VITE_JUDGE0_AUTH_TOKEN if your Judge0 requires it

See `.env.example` in this repo. For local dev, create `.env.local` in the repo root and add:

```
VITE_JUDGE0_PROXY_URL=http://localhost:2358
# if you enabled auth in judge0.conf
VITE_JUDGE0_AUTH_HEADER_NAME=X-Auth-User
VITE_JUDGE0_AUTH_TOKEN=super-secret-token-123
```

Or for RapidAPI instead:
```
VITE_JUDGE0_RAPIDAPI_KEY=your-rapidapi-key
VITE_JUDGE0_RAPIDAPI_HOST=judge0-ce.p.rapidapi.com
```

## 4) Production server deployment
- Use the same `docker-compose.yml`/`judge0.conf` on a server (Ubuntu/Debian with Docker).
- Put a reverse proxy (Nginx/Caddy/Traefik) in front and enable HTTPS.
- Restrict origins via ALLOW_ORIGIN or put Judge0 on a private network and expose it only to your backend.
- Always set AUTHZ_HEADER + AUTHZ_TOKEN for public exposure.
- Increase resources/limits if you expect heavy load. Scale with multiple workers.

Example Nginx block (reverse proxy):

```
server {
  listen 80;
  server_name judge0.example.com;
  location / {
    proxy_pass http://127.0.0.1:2358;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Then enable HTTPS with certbot or your provider.

## 5) Security checklist
- Change POSTGRES_PASSWORD and REDIS_PASSWORD
- Set AUTHZ_HEADER and AUTHZ_TOKEN and keep the token secret
- Set ALLOW_ORIGIN (or front with a private network)
- Keep Docker images updated; pin versions if you need reproducibility

## 6) Troubleshooting
- 401/403 errors: missing or wrong auth header; verify AUTHZ_HEADER in judge0.conf matches your client env
- 429 or queue full: increase MAX_QUEUE_SIZE or worker COUNT in judge0.conf
- Language not found: confirm language_id mapping and Judge0 CE vs Extra CE
- Network disabled in sandboxes by default; enable per submission only if you understand the risks

References
- Judge0 repo: https://github.com/judge0/judge0
- Config file (judge0.conf): https://github.com/judge0/judge0/blob/master/judge0.conf
- API docs: https://ce.judge0.com/
