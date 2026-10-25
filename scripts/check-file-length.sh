#!/usr/bin/env bash
set -euo pipefail

failed=0
while IFS= read -r -d '' file; do
  case "$file" in
    *.ts|*.tsx|*.js|*.mjs|*.sh)
      lines=$(wc -l < "$file")
      if (( lines > 300 )); then
        printf '%s has %s lines (limit: 300)\n' "$file" "$lines" >&2
        failed=1
      fi
      ;;
  esac
done < <(git ls-files --cached --others --exclude-standard -z)

exit "$failed"
