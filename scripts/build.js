const fs = require('fs');
const { execSync } = require('child_process');

const pkg = require('../package.json');
const version = pkg.version;
const date = new Date().toISOString();

const header = `/*!
 * a11y-widget v${version}
 * Build: ${date}
 * https://github.com/Jerit-Baiju/a11y-widget
 * License: MIT License
 * Copyright (c) Jerit Baiju (https://github.com/Jerit-Baiju)
 */\n`;

// Minify with terser (assuming terser is installed locally as dev dependency)
execSync('npx terser src/a11y-widget.js -o dist/a11y-widget.min.js --compress --mangle', { stdio: 'inherit' });

// Prepend header
const minified = fs.readFileSync('dist/a11y-widget.min.js', 'utf8');
fs.writeFileSync('dist/a11y-widget.min.js', header + minified);