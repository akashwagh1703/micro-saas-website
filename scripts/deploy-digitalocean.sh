#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/autowave/micro-saas-website}"
BRANCH="${DEPLOY_BRANCH:-master}"

cd "$APP_DIR"

echo "==> Deploy website in $APP_DIR (branch $BRANCH)"

git fetch origin "$BRANCH"
git reset --hard "origin/$BRANCH"

npm ci
npm run build

if command -v nginx >/dev/null 2>&1; then
  sudo nginx -t && sudo systemctl reload nginx
fi

echo "==> Website deploy OK (static files in $APP_DIR/dist)"
