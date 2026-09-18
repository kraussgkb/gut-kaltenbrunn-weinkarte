#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "Usage: extract-reference-assets.sh LE_PERGOLE_MASTER_REFERENCE_DO_NOT_EDIT.jpeg" >&2
  exit 2
fi

reference=$1
script_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
work_dir=$(mktemp -d)
trap 'rm -rf -- "$work_dir"' EXIT

dimensions=$(identify -format '%wx%h' "$reference")
if [ "$dimensions" != "1024x1536" ]; then
  echo "Reference must be the approved 1024x1536 LE_PERGOLE master." >&2
  exit 3
fi

# Build a clean canvas exclusively from the approved reference's untouched
# outer background. The bottle itself is never sampled into the background.
convert "$reference" -crop 180x1536+0+0 +repage "$work_dir/left.png"
convert "$work_dir/left.png" -resize 1024x1536\! \
  "$script_dir/LE_PERGOLE_BACKGROUND_DERIVED.png"

# Extract the existing wordmark and line from the approved reference. The ROI
# removes the neighbouring bottle/floor shadow; no letters are redrawn.
convert "$reference" -crop 220x85+770+1420 +repage -colorspace gray \
  -level 65%,90% -negate \
  -fill black \
  -draw 'rectangle 0,0 219,23 rectangle 0,0 27,84 rectangle 0,67 219,84 rectangle 216,0 219,84' \
  "$work_dir/watermark-alpha.png"
convert -size 220x85 xc:'#171b19' "$work_dir/watermark-alpha.png" \
  -alpha off -compose CopyOpacity -composite \
  "$script_dir/LE_PERGOLE_WATERMARK_EXACT.png"
