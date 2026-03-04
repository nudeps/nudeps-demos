#!/usr/bin/env node
import { readdirSync } from "node:fs";

const root = import.meta.dirname;

// Same filtering as each.sh: exclude node_modules, client_modules,
// and directories starting with . or _
const excluded = new Set(["node_modules", "client_modules"]);

export const demos = readdirSync(root, { withFileTypes: true })
	.filter(d => d.isDirectory() && !excluded.has(d.name) && !/^[._]/.test(d.name))
	.map(d => d.name);

// When run directly, print one per line
if (process.argv[1] === import.meta.filename) {
	console.log(demos.join("\n"));
}
