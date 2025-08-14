# Archive.org URL Checker

A simple browser extension that checks if the current page is archived on [archive.org](https://archive.org/).
If an archived copy exists, it redirects you to the archived version. If not, it displays a temporary notification.

## Features

- Adds a button to the browser toolbar.
- On click, checks if the current page is archived on archive.org.
- Redirects to the archived version if available.
- Shows a temporary notification if no archive is found or an error occurs.

## Installation (for Development)

1. Clone or download this repository.
2. Open your browser's extension management page (e.g., `chrome://extensions` or `about:debugging`).
3. Enable "Developer mode".
4. Click "Load unpacked" (or equivalent) and select the folder containing the extension's files.

## Usage

1. Visit any website.
2. Click the Archive.org icon in the toolbar.
3. If an archive exists, you will be redirected to it.
4. If not, a notification will appear for 3 seconds.

## Files

- `manifest.json` — The extension manifest (v3).
- `background.js` — Handles all logic, including clicks, API requests, and notifications.
- `icon.png` — The extension icon.

## License

MIT License