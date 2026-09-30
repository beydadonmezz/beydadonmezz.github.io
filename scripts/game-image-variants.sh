#!/bin/sh
# Generates the smaller image variants the game pages serve via srcset:
#   icon-512.webp -> icon-128.webp, icon-256.webp
#   screen-N.webp -> screen-N-480.webp
# Run after adding or replacing game images:  sh scripts/game-image-variants.sh
# Needs macOS `sips` and `cwebp` (brew install webp).
set -e
cd "$(dirname "$0")/../public/games"
TMP=$(mktemp -d)
for dir in */; do
  dir=${dir%/}
  if [ -f "$dir/icon.png" ]; then
    for w in 128 256; do
      sips -s format png -Z $w "$dir/icon.png" --out "$TMP/icon.png" >/dev/null
      cwebp -quiet -q 82 "$TMP/icon.png" -o "$dir/icon-$w.webp"
    done
  fi
  for s in "$dir"/screen-[0-9].webp "$dir"/screen-[0-9][0-9].webp; do
    [ -f "$s" ] || continue
    dwebp -quiet "$s" -o "$TMP/s.png"
    sips --resampleWidth 480 "$TMP/s.png" --out "$TMP/s480.png" >/dev/null
    cwebp -quiet -q 80 "$TMP/s480.png" -o "${s%.webp}-480.webp"
  done
done
rm -rf "$TMP"
echo "Game image variants generated."
