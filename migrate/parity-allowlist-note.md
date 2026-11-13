# Visual residuals (documented, accepted)

Pixel comparison (migrate/visual-diff.mjs) vs the pre-migration live site:
home page is pixel-identical at 1280x800 and 390x844 in light and dark. All
pages share identical chrome (header/footer/dark-mode). Residual full-page
height deltas are prose-flow differences from the adoc->md conversion and
legacy Tailwind-build quirks (measured via computed styles):

- /news/: -65px desktop, -26px mobile (excerpt line wrapping inside blog-item cards)
- posts: -8px (2019) / -125px (2026) desktop; -29/-45px mobile (adoc vs md list/paragraph spacing)
- /404.html: content block sits slightly lower (h1 line-height preflight 1.5 vs legacy normal)

Chrome, routes, bytes (all non-HTML), redirects, and feed URLs are identical.
kwkwan can fine-tune typography with the same toolkit if desired.
