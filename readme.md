# Archive.org URL Checker

A simple Firefox browser extension that checks if the current page is archived on [archive.org](https://archive.org/).  
If an archived copy exists, it redirects you to the archived version. If not, it displays a temporary notification.

## Features

- Adds a button near the URL bar.
- On click, checks if the current page is archived on archive.org.
- Redirects to the archived version if available.
- Shows a temporary notification if no archive is found.

## Installation (Development)

1. Clone or download this repository.
2. Open Firefox and go to `about:debugging`.
3. Click **This Firefox** > **Load Temporary Add-on**.
4. Select the `manifest.json` file from this folder.

## Usage

1. Visit any website.
2. Click the Archive.org icon in the toolbar.
3. If an archive exists, you will be redirected to it.
4. If not, a notification will appear for 2 seconds.

## Files

- `manifest.json` — Extension manifest.
- `background.js` — Handles button clicks and archive checking.
- `content-script.js` — Displays a temporary notification on the page.
- `icon.png` — Extension icon.

## License

MIT License