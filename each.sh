#!/bin/bash
# Run a command in every demo subdirectory

if [ $# -eq 0 ]; then
	echo "Usage: $0 <command> [args...]"
	echo "Examples: $0 npm link nudeps"
	echo "          $0 \"npm install && npm link nudeps\""
	exit 1
fi

root="$(cd "$(dirname "$0")" && pwd)"

for dir in "$root"/*/; do
	name=$(basename "$dir")
	case "$name" in
		node_modules|client_modules|.nudeps|.claude) continue ;;
	esac

	echo "==> $name"
	(cd "$dir" && eval "$*")
done
