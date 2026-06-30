# RJB Intro Page

A simple interactive intro page for RJB, built with HTML, Tailwind CSS, and vanilla JavaScript.

## Features

- Animated welcome screen
- Three full-screen image panels
- Hover name reveal for each person
- Click interaction that opens a profile info panel
- Custom Google Fonts: Inter and Anton

## Project Structure

```txt
RJB/
├── assets/
│   ├── left.jpg
│   ├── center.jpg
│   └── right.jpg
├── index.html
├── index.js
├── input.css
├── output.css
├── package.json
└── README.md
```

## Run Locally

Open `index.html` directly in a browser.

If you want to rebuild the Tailwind CSS after editing `input.css` or changing classes, run:

```bash
npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
```
