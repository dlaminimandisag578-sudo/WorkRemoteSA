WorkRemoteSA.co.za – Static Site (Starter)

How to preview locally
1) Download and unzip.
2) Open index.html in your browser.

How to deploy free (no code)
Option A: Netlify
- Create a Netlify account.
- Drag-and-drop the whole folder into Netlify.
- To enable job form submissions, replace the action in post-job.html with your Formspree or Netlify Forms endpoint.

Option B: GitHub Pages
- Create a new repo, upload all files, enable GitHub Pages.
- Your site goes live at username.github.io/repo.

Connect your custom domain
- Buy/point the domain WorkRemoteSA.co.za to your hosting (Netlify has simple DNS settings).
- Add HTTPS.

Editing jobs
- Edit jobs.json to add/remove roles.
- The jobs page loads this file and filters dynamically.

Form handling
- post-job.html uses a placeholder Formspree endpoint: https://formspree.io/f/your-id
- Replace it with your own endpoint or switch to Netlify Forms (add data-netlify='true').

SEO
- Edit titles/descriptions in the <head> of each page.
- Submit sitemap.xml to Google Search Console after you go live.

Brand tweaks
- Replace assets/logo.svg and assets/hero.svg with your own branding if desired.