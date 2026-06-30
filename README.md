# RJB Intro Page

A simple interactive intro page for RJB, built with HTML, Tailwind CSS, and vanilla JavaScript.

## Meaning

RJB represents our first names:

- R - Recca Lee Pendioday
- J - Johnmarc Jayme
- B - Bryan Kenth Estoesta

The name RJB is inspired by RGB color. Since RGB stands for red, green, and blue, the theme of this project also uses red, green, and blue as its main visual identity.

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
