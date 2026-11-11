# Healthy Life Medicine — Specialized Reproductive Healthcare Platform

A specialized, modern, and medically responsible web platform focusing on:
1. **Leukorrhea (White Discharge / Lakoria)** — Women's reproductive and vaginal flora health.
2. **Men's Health (Mardana Sehat & Vitality)** — Men's reproductive vigor, stamina, and hormonal wellness.

---

## Key Features

- **Evidence-Based Medical Information**: Educational sections detailing physiological vs. pathological discharge, red flags, and hormonal factors.
- **Pharmacist Verification Workflow**: Secure prescription upload portal and tracking system compliant with DRAP guidelines.
- **Verified Product Dossiers**: Transparent ingredient listings, standardized botanical percentages, and DRAP registration numbers.
- **Private Consultations**: Direct booking for consultations with female and male clinical pharmacists.
- **100% Plain Discreet Packaging**: Zero medical or sensitive labels visible on outer parcels.
- **Cash on Delivery (COD) & Online Bank Transfer**: Seamless order management tailored for regional customers.

---

## Development

```bash
# Install dependencies
npm install

# Start local development server (runs on port 3000)
npm run dev

# Build for production
npm run build
```

---

## Hostinger Deployment Guide

This project is built with **React + Vite** and generates static production files in `dist/`.

### Method A: Static Web Hosting (Hostinger File Manager / FTP)

1. **Build the production bundle**:
   ```bash
   npm run build
   ```
2. Navigate to your Hostinger **hPanel** -> **File Manager** (or connect via SFTP/FileZilla).
3. Open `public_html/`.
4. Upload all files and folders located inside the `dist/` folder directly to `public_html/` (so that `index.html` is in `public_html/index.html`).
5. **SPA Routing Configuration (.htaccess)**:
   Ensure an `.htaccess` file is present in `public_html/` to support single-page application routing without 404 errors:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Method B: Hostinger Git / Automated Deployment

1. Connect your Git repository in Hostinger hPanel -> **Advanced** -> **Git**.
2. Set Build Command: `npm install && npm run build`
3. Set Deploy Directory: `dist`
4. Save and trigger deployment.

---

## Regulatory Compliance & Ethics

- Compliant with DRAP (Drug Regulatory Authority of Pakistan) guidelines for health communication.
- No unsubstantiated cure claims or fabricated medical studies.
- All prescription items require licensed clinical pharmacist review before fulfillment.
