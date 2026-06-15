#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="${1:-$PWD}"
BUNDLE_DIR="$ROOT_DIR/bundle"
mkdir -p "$BUNDLE_DIR/sightings"
if ! command -v jq >/dev/null 2>&1; then echo "[!] jq not found" >&2; exit 1; fi
JSON_INPUT="$(cat)"
mapfile -t FILE_KEYS < <(echo "$JSON_INPUT" | jq -r '.files | keys[]')
for key in "${FILE_KEYS[@]}"; do
  content=$(echo "$JSON_INPUT" | jq -r --arg k "$key" '.files[$k].content')
  outpath="$ROOT_DIR/$key"
  mkdir -p "$(dirname "$outpath")"
  printf "%s" "$content" > "$outpath"
  echo "[+] wrote $outpath"
done
cd "$BUNDLE_DIR" && sha256sum sovereign_index.json txids.csv sightings/txlog.json CLAIM_SUMMARY.md > SHASUMS256.txt
echo "\n[done] Bundle at $BUNDLE_DIR"