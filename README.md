# 🌿 Minder Plastic Velp — Setup & Documentation

A community website encouraging residents of Velp (Netherlands) to email local
supermarkets and ask them to reduce plastic bag usage.

---

## 📁 Project Structure

```
velp-plastic-bags/
├── index.html     ← Main page (all sections, content, structure)
├── styles.css     ← All styling (layout, colors, animations, responsive)
├── script.js      ← All interactivity (email, counter, animations)
└── README.md      ← This file
```

---

## 🚀 How to Run Locally

### Option 1 — Open directly in a browser (simplest)
1. Download or unzip the project folder
2. Double-click `index.html`
3. It opens in your default web browser — done!

> ⚠️ Note: The click counter uses `localStorage`, which works in all modern
> browsers when opened from a file. If you see an error, use Option 2 below.

### Option 2 — Use a local development server (recommended)

If you have **Python** installed (most Macs and Linux machines do):

```bash
# Navigate to the project folder
cd velp-plastic-bags

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: **http://localhost:8000**

If you have **Node.js** installed:

```bash
# Install a simple server (once)
npm install -g live-server

# Start the server
live-server
```

Or with **VS Code**: install the "Live Server" extension, right-click
`index.html` → "Open with Live Server".

---

## ✉️ How to Customise the Email

Open `script.js` and find the `EMAIL_CONFIG` object near the top of the file:

```javascript
const EMAIL_CONFIG = {
  to:      "supermarkt@ah.nl,klantenservice@jumbo.com,info@lidl.nl",
  subject: "Verzoek: Minder Plastic Tasjes in Velp",
  body:    "..."
};
```

- **`to`**: Change or add email addresses (comma-separated, no spaces)
- **`subject`**: Change the email subject line
- **`body`**: Edit the pre-written email text

> 💡 Note: Verify the actual email addresses for each supermarket before
> publishing — these are example addresses.

---

## 🌐 How to Publish Online (for free)

### GitHub Pages (free)
1. Create a free account at [github.com](https://github.com)
2. Create a new repository
3. Upload the three files (`index.html`, `styles.css`, `script.js`)
4. Go to Settings → Pages → Source: main branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (free, easiest)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the project folder onto their dashboard
3. Done — you'll get a free URL immediately

---

## 💡 Suggested Future Improvements

### 🔧 Technical
1. **Backend counter** — Use a free service like Supabase or Firebase to store
   the click counter server-side, so all visitors share the same count.
   Currently, each browser has its own local count.

2. **Form with name field** — Let users type their name so the pre-written
   email is personalised before opening ("Met vriendelijke groet, [naam]").

3. **Language toggle** — Add a Dutch/English toggle since some Velp residents
   may prefer English.

4. **Google Analytics** — Add free analytics to see how many real visitors
   the page gets and which sections they spend time on.

5. **Progress bar** — Show a goal like "Goal: 500 emails sent" with a visual
   progress bar that fills up as more people click.

### 🎨 Design
6. **Real supermarket logos** — Replace the cart emoji with actual logos
   (check copyright first, or ask the supermarkets for permission).

7. **Local photos** — Add real photos of the IJssel or Velp parks to make
   the emotional connection more personal.

8. **Dark mode** — Add a CSS `prefers-color-scheme: dark` media query.

### 📢 Content
9. **Success stories section** — Document any responses received from
   supermarkets to show the campaign is working.

10. **Petition integration** — Add a link to a Change.org petition for
    people who want to do more than just send an email.

11. **FAQ section** — Answer common questions like "Will supermarkets actually
    read my email?" or "What if I don't speak Dutch?".

12. **Social proof** — Add testimonials from Velp residents to build trust
    and encourage others to act.

---

## 📝 Notes for the University Assignment

- The website is intentionally kept to **3 files** as requested
- Code comments are written throughout to explain each section
- The design is **mobile-first** and works on all screen sizes
- The **mailto: link** opens the user's own email client — no email is sent
  from our server (no backend needed, full privacy for the user)
- The **click counter** uses `localStorage` (browser storage) to persist
  across page refreshes without needing a server

---

Made with 💚 for a cleaner Velp.
