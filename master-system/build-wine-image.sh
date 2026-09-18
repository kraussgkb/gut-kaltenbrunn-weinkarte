#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 2 ]; then
  echo "Usage: build-wine-image.sh SOURCE_WITH_ALPHA OUTPUT.webp" >&2
  exit 2
fi

source_image=$1
output_image=$2
script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
work_dir=$(mktemp -d)
trap 'rm -rf -- "$work_dir"' EXIT

if ! identify -format '%[channels]' "$source_image" | grep -qi 'a'; then
  echo "Source must be a verified, transparently cut out original bottle image." >&2
  exit 3
fi

convert "$source_image" -trim +repage -resize '720x1420' "$work_dir/bottle.png"
convert -size 1024x1536 xc:none \
  -fill 'rgba(68,59,49,0.13)' \
  -draw 'ellipse 512,1442 190,17 0,360' \
  -blur 0x17 "$work_dir/shadow.png"

convert "$script_dir/LE_PERGOLE_BACKGROUND_DERIVED.png" \
  "$work_dir/shadow.png" -compose over -composite \
  "$work_dir/with-shadow.png"

convert "$work_dir/with-shadow.png" \
  "$work_dir/bottle.png" -gravity north -geometry +0+20 -compose over -composite \
  "$work_dir/with-bottle.png"

convert "$work_dir/with-bottle.png" \
  "$script_dir/LE_PERGOLE_WATERMARK_EXACT.png" -gravity northwest -geometry +770+1420 -compose over -composite \
  -define webp:lossless=true "$output_image"
