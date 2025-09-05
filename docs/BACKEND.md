# Backend Guide: Judge0 Integration and Deployment

This document explains the backend side of running code with Judge0 for this widget: architecture, hosting options, authentication, environment variables, API usage, deployment (local and server), scaling, and troubleshooting.

- Verified sources: Judge0 official repo and docs
  - Repo: https://github.com/judge0/judge0
  - API docs: https://ce.judge0.com/
  - docker-compose.yml: https://github.com/judge0/judge0/blob/master/docker-compose.yml
  - judge0.conf: https://github.com/judge0/judge0/blob/master/judge0.conf

## 1) Architecture overview

- Your app (frontend or backend) calls Judge0 HTTP API to create and poll submissions.
- Two hosting choices:
  1) Hosted (RapidAPI or Sulu)
  2) Self-hosted (Docker Compose in local or cloud VM)
- For self-host, Judge0 runs services: server, worker(s), Postgres, Redis; default API port 2358 (per official compose).

## 2) Hosting options (verified)

1) RapidAPI (hosted Judge0 CE)
- Use Judge0 CE on RapidAPI.
- Official references:
  - README mentions plans and RapidAPI: https://github.com/judge0/judge0/blob/master/README.md
  - API docs: https://ce.judge0.com/

2) Local Docker (self-host on your machine)
- Use official compose: https://github.com/judge0/judge0/blob/master/docker-compose.yml
- Config via judge0.conf: https://github.com/judge0/judge0/blob/master/judge0.conf
- Default port: 2358.

3) Cloud
- Managed: Sulu (linked from README “Get Started”).
- Self “host it yourself”: use the same docker-compose on a cloud VM; README links the deployment procedure in CHANGELOG.

## 3) Authentication and access control

- Judge0 supports optional header-based auth (verified in judge0.conf):
  - AUTHZ_HEADER (default mentioned as X-Auth-User)
  - AUTHZ_TOKEN (your shared secret)
- CORS/origins:
  - ALLOW_ORIGIN / DISALLOW_ORIGIN in judge0.conf
- If exposing over the internet, enable auth and put a reverse proxy with TLS.

Client support in this repo
- If using RapidAPI: set VITE_JUDGE0_RAPIDAPI_KEY (and optional VITE_JUDGE0_RAPIDAPI_HOST) and don’t set PROXY_URL.
- If self-hosting: set VITE_JUDGE0_PROXY_URL to your base URL, optionally VITE_JUDGE0_AUTH_HEADER_NAME and VITE_JUDGE0_AUTH_TOKEN to match judge0.conf.

## 4) Environment variables (this project)

- RapidAPI mode
  - VITE_JUDGE0_RAPIDAPI_KEY
  - VITE_JUDGE0_RAPIDAPI_HOST (default judge0-ce.p.rapidapi.com)

- Self-host mode
  - VITE_JUDGE0_PROXY_URL (e.g., http://localhost:2358)
  - VITE_JUDGE0_AUTH_HEADER_NAME (default X-Auth-User)
  - VITE_JUDGE0_AUTH_TOKEN

See `.env.example` in repo root. For local development, use `.env.local`.

## 5) Judge0 API usage (verified)

Create a submission
- POST /submissions?base64_encoded=false&wait=false
- Body (example):
```
{
  "language_id": 63,
  "source_code": "print('hello')",
  "stdin": ""
}
```

Poll a submission
- GET /submissions/{token}?base64_encoded=false

Batch submissions
- POST /submissions/batch?base64_encoded=false&wait=false
- GET /submissions/batch?tokens=token1,token2&base64_encoded=false

Status codes and fields: see API docs at https://ce.judge0.com/

## 6) Local deployment (Docker Compose)

- Create a folder with `docker-compose.yml` and `judge0.conf`.
- Use official docker-compose.yml as reference: https://github.com/judge0/judge0/blob/master/docker-compose.yml
- Put secrets and options into `judge0.conf` (see official file for all settings):
  - Required passwords: POSTGRES_PASSWORD, REDIS_PASSWORD
  - Optional auth: AUTHZ_HEADER and AUTHZ_TOKEN
- Bring up:
  - docker compose up -d
- Test:
  - curl http://localhost:2358/system_info
  - If auth enabled: curl -H "X-Auth-User: <token>" http://localhost:2358/system_info

## 7) Cloud deployment

Managed (Sulu)
- Follow links from README to Sulu for Judge0 CE.

Self-host VM
- Use the same compose files on your cloud server (Ubuntu/Debian + Docker).
- Put Nginx/Caddy/Traefik in front and enable HTTPS.
- Restrict origins and/or keep Judge0 on a private network only reachable by your backend.

## 8) Scaling and performance

- Workers: Increase number of workers by configuring COUNT in judge0.conf and/or running multiple worker containers.
- Queue: MAX_QUEUE_SIZE in judge0.conf.
- Resources: Ensure the host has sufficient CPU/RAM; scale vertically or run multiple hosts behind a load balancer.

## 9) Troubleshooting

- 401/403: Missing or wrong auth header; verify AUTHZ_HEADER/AUTHZ_TOKEN values.
- 5xx on submission: Check container logs; ensure Postgres and Redis are healthy; verify REDIS_PASSWORD/POSTGRES_PASSWORD are set.
- Queue full or slow: Increase MAX_QUEUE_SIZE, increase workers.
- Language missing: Verify you’re on CE vs Extra CE; check language_id in your client.

## 10) Security checklist

- Don’t expose a bare Judge0 without auth on public internet.
- Set strong POSTGRES_PASSWORD and REDIS_PASSWORD.
- Set AUTHZ_HEADER/AUTHZ_TOKEN if public, and keep token secret.
- Apply HTTPS via a reverse proxy; restrict origins with ALLOW_ORIGIN.

## 11) References

- Judge0 repository: https://github.com/judge0/judge0
- Official compose: https://github.com/judge0/judge0/blob/master/docker-compose.yml
- Judge0 configuration: https://github.com/judge0/judge0/blob/master/judge0.conf
- API docs: https://ce.judge0.com/
