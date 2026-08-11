# I-Run Goa Marathon — Website

Website for the I-Run Goa Marathon running group, built with Next.js and Tailwind CSS.

**Live site:** https://mauryagovind045-star.github.io/irunwebsite-/

## Local development

```bash
npm install
npm run dev      # dev server at http://localhost:3000
npm run build    # static export into out/
```

## Deploying

Every push to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages automatically.

One-time setup: in the GitHub repo go to **Settings → Pages** and set
**Source** to **GitHub Actions**.

## Updating content

- **Photos:** replace files in `public/images/` (keep the same names, or update
  the paths in `app/page.tsx`). Resize to ≤2400px wide before committing.
- **Weekly runs, stats, copy:** edit the arrays at the top of `app/page.tsx`.
- **Countdown schedule:** edit the `RUNS` list in `app/countdown.tsx`.
- **WhatsApp link:** replace the placeholder number in the `wa.me` link in
  `app/page.tsx` with the group's real number.
- **Logo:** the nav currently uses a wordmark + small runner icon. To use the
  real logo, add `logo.png` to `public/` and swap it into the nav in
  `app/page.tsx`.
