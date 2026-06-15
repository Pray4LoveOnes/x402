#!/usr/bin/env python3
"""Fetch a Sei transaction from an LCD endpoint."""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin
from urllib.request import urlopen


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Fetch a Sei transaction by hash from a Cosmos LCD endpoint."
    )
    parser.add_argument(
        "--hash",
        required=True,
        help="Transaction hash (hex).",
    )
    parser.add_argument(
        "--lcd",
        default="http://localhost:1317",
        help="LCD base URL (default: http://localhost:1317).",
    )
    parser.add_argument(
        "--output",
        default=None,
        help="Optional output path to write JSON response.",
    )
    return parser.parse_args()


def fetch_tx(lcd_base: str, tx_hash: str) -> dict:
    endpoint = f"/cosmos/tx/v1beta1/txs/{tx_hash}"
    url = urljoin(lcd_base.rstrip("/") + "/", endpoint.lstrip("/"))
    with urlopen(url) as response:
        payload = response.read().decode("utf-8")
    return json.loads(payload)


def main() -> int:
    args = parse_args()
    try:
        data = fetch_tx(args.lcd, args.hash)
    except HTTPError as exc:
        sys.stderr.write(f"HTTP error fetching tx: {exc}\n")
        return 1
    except URLError as exc:
        sys.stderr.write(f"Connection error fetching tx: {exc}\n")
        return 1

    output = json.dumps(data, indent=2, sort_keys=True)
    if args.output:
        Path(args.output).write_text(output)
    else:
        print(output)
    return 0


if __name__ == "__main__":
    sys.exit(main())
