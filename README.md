# Al-Ameen School Website

## Production Structure

- **Root**: Only production HTML files, `.nojekyll`, and `README.md`.
- **assets/**: Only used CSS, JS, images, and forms.
- **partials/**: Only header and footer includes.
- **docs/**: All Markdown documentation, not published.
- **.vscode/** and `.idx/`: Editor configs, not published.

## Deployment
- Deploy from the root folder (not `docs/`).
- `.nojekyll` prevents Jekyll processing on GitHub Pages.
- Only production files are published.

## Documentation
- All documentation and plans are in `docs/`.
- Key docs: `docs/style-guide.md`, `docs/changelog.md`, `docs/copilot-instructions.md`, `docs/website_redesign_specifications.md`.

## Maintenance
- Remove unused files regularly.
- Only keep production assets in `assets/`.
- Update documentation in `docs/` as needed.

---

For more details, see the documentation in `docs/`.