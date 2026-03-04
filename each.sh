#!/bin/bash
# Run a command in every demo subdirectory
# With no arguments, lists all demo directories (one per line).

root="$(cd "$(dirname "$0")" && pwd)"

# Demo directory list sourced from list.js
demos=$("$root/list.js")

if [ $# -eq 0 ]; then
	echo "$demos"
	exit 0
fi

for name in $demos; do
	echo ""
	echo "cd $name/ && $*"
	echo "--------------------------------"
	echo ""
	(cd "$root/$name" && eval "$*")
done
