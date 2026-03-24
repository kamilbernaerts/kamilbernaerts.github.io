# kamilbernaerts.com

Personal academic website of Kamil Bernaerts — political scientist.

## How to edit content

All page content lives in `src/pages/`. Each file corresponds to one page on the site:

| Page | File | URL |
|------|------|-----|
| **Homepage** | `src/pages/index.astro` | kamilbernaerts.com/ |
| **Research** | `src/pages/research.astro` | kamilbernaerts.com/research/ |
| **PhD** | `src/pages/phd.astro` | kamilbernaerts.com/phd/ |
| **Writing** | `src/pages/writing.astro` | kamilbernaerts.com/writing/ |
| **Teaching** | `src/pages/teaching.astro` | kamilbernaerts.com/teaching/ |
| **Outreach** | `src/pages/outreach.astro` | kamilbernaerts.com/outreach/ |
| **CV** | `src/pages/cv.astro` | kamilbernaerts.com/cv/ |
| **Contact** | `src/pages/contact.astro` | kamilbernaerts.com/contact/ |

### To change text
Open the relevant file, find the text you want to change, edit it, and commit. The HTML tags around the text (like `<p>`, `<h1>`, `<div>`) are formatting — leave those as they are.

### To add a new publication
In `src/pages/research.astro`, copy an existing publication block:

```html
<div class="pub-item">
  <div>
    <p class="pub-title">YOUR TITLE HERE</p>
    <p class="pub-authors">YOUR AUTHORS HERE</p>
  </div>
  <div class="pub-meta">
    <p class="pub-journal">JOURNAL NAME</p>
    <p class="pub-year">YEAR</p>
  </div>
</div>
```

Paste it in the right position and change the text.

### To add a new blog post (when ready)
This will require creating a new file. Ask Claude for help or follow the pattern of existing pages.

## Other files

| File/folder | What it does |
|-------------|--------------|
| `src/layouts/BaseLayout.astro` | The shared header, footer, and navigation |
| `src/styles/global.css` | All styling (colours, fonts, spacing) |
| `public/images/` | Images (profile photo, etc.) |
| `public/Academic_cv_Kamil_Bernaerts.pdf` | Downloadable CV |
| `netlify.toml` | Tells Netlify how to build the site |
| `astro.config.mjs` | Astro framework configuration |

## Tech stack
- [Astro](https://astro.build) — static site generator
- Hosted on [Netlify](https://netlify.com) (free tier)
- Fonts: Lora (serif) + Source Sans 3 (sans-serif) via Google Fonts
