#!/bin/bash
# Rebuild the uriBX device UI to WebAssembly from the firmware source, then copy
# the fresh wasm bundle into this site's public/demo/. Run this after any firmware
# UI change so the online device demo matches the shipping firmware.
#
#   ./scripts/sync-demo.sh
#
set -e
FW="${URIBX_FW:-/Users/hakanzeytincioglu/Projects/EasyPet/easyPetCrowPanel7demo2beta0}"
HERE="$(cd "$(dirname "$0")/.." && pwd)"

if [ ! -x "$FW/web/build.sh" ]; then
  echo "firmware build.sh not found at $FW/web/build.sh"
  echo "set URIBX_FW=/path/to/firmware and retry."
  exit 1
fi

echo "==> rebuilding wasm from firmware UI source ($FW)"
bash "$FW/web/build.sh"

echo "==> copying bundle into public/demo/"
cp "$FW/web/out/uribx.js" "$FW/web/out/uribx.wasm" "$HERE/public/demo/"

echo "==> done. $(ls -lh "$HERE/public/demo/uribx.wasm" | awk '{print $5}') wasm in place."
