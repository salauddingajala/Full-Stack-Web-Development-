# FSWD Lab Course Website

**Project:** An AI-Enabled Framework for Outcome-Based Smart Course Design, Automated CO-PO Mapping & Adaptive Content Generation  
**Course:** FULL STACK WEB DEVELOPMENT LAB (U23CS7L1), Academic Year 2026–27

## Contents
- `index.html`, `styles.css`, `script.js`: GitHub Pages-ready responsive static site.
- `backend/`: optional Express/MongoDB API scaffold for extending the static portfolio into a MERN application.
- `DEPLOYMENT.md`: step-by-step GitHub Pages publishing and backend deployment notes.

## Quick local preview
Open `index.html` in a modern browser. No build step is required for the static website.

## Publish to GitHub Pages
1. Create a GitHub repository, for example `fswd-ai-course-portal`.
2. Upload the contents of this folder to the repository root (not the enclosing ZIP).
3. Open **Settings → Pages**.
4. Under build and deployment, select **Deploy from a branch**, choose `main` and `/ (root)`, then Save.
5. Wait for the Pages workflow to finish. The URL will be `https://YOUR-USERNAME.github.io/fswd-ai-course-portal/`.
6. Replace the course-coordinator, institution and email placeholders before sharing the public URL.

GitHub Pages serves static files; it does not run Node/Express or connect directly to MongoDB. Deploy the optional backend to a server host and set `API_BASE_URL` in the frontend if you later connect it.

## Responsible AI
AI-assisted explanations and generated code must be reviewed, tested, cited/disclosed where required, and must not contain student personal data or credentials. Do not put API keys or database passwords in this public repository.
