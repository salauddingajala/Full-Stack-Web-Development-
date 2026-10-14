# Deployment: FSWD Course Portal

## A. Static course portal (GitHub Pages)
1. Sign in at https://github.com and create a public repository named `fswd-ai-course-portal`.
2. Extract the website ZIP and upload `index.html`, `styles.css`, `script.js`, `.nojekyll`, `README.md`, and `DEPLOYMENT.md` to the repository root.
3. Commit the files to the `main` branch.
4. Open Settings → Pages. Set Source to “Deploy from a branch”, Branch `main`, folder `/ (root)`, then Save.
5. Wait for the workflow to complete. The published URL is `https://YOUR-USERNAME.github.io/fswd-ai-course-portal/`.
6. Test on mobile and desktop; check every navigation anchor and resource link.
7. Add approved institutional contact details and the real repository URL.

## B. Optional MERN backend
GitHub Pages cannot host a Node.js server. Deploy `backend/` to a Node-capable service (for example, Render, Railway or a college server) and provision MongoDB Atlas.
1. Set `MONGODB_URI` and `PORT` in the hosting dashboard, never in source code.
2. Restrict Atlas network access appropriately; avoid a broad public allow-list in production.
3. Set CORS to the actual Pages origin.
4. Test GET/POST/PUT/DELETE endpoints and validate input.
5. Configure the static frontend to call the deployed API URL; do not commit secrets.
6. Add monitoring, backups, rate limits, validation, authentication and privacy notice before production use.

## Pre-publication checklist
- [ ] Replace `[Add institution name]` and `[Add official email]`.
- [ ] Confirm the final assessment rubric and contact information with the department.
- [ ] Ensure no real student data or credentials are published.
- [ ] Test keyboard navigation, contrast, responsive layout and form behaviour.
- [ ] Confirm repository visibility and public website URL.
