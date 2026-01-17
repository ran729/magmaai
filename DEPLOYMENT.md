# GitHub Pages Deployment Guide

This project is configured for deployment to GitHub Pages with support for both custom domains and subdirectory hosting.

## Default Setup (Custom Domain)

By default, the site is configured for custom domain deployment: `https://magmaai.dev/`

No additional configuration needed - just push to the `main` branch.

## Custom Domain Setup

The site is already configured for the custom domain `magmaai.dev`. To use a different domain:

### 1. Configure GitHub Pages Custom Domain

1. Go to your repository settings: `https://github.com/ran729/magmaai/settings/pages`
2. Under "Custom domain", enter your domain (e.g., `magmaai.com`)
3. Click "Save"
4. Configure your DNS provider to point to GitHub Pages:
   - For apex domain (magmaai.com): Add A records to GitHub's IPs
   - For subdomain (www.magmaai.com): Add CNAME record pointing to `ran729.github.io`

### 2. Redeploy

Push to `main` branch or manually trigger the workflow from the Actions tab.

## GitHub Pages Subdirectory Setup

If you want to deploy to GitHub Pages without a custom domain (e.g., `https://ran729.github.io/magmaai/`):

1. Remove the custom domain from repository settings
2. Set the `VITE_BASE_PATH` environment variable:
   - Go to: `https://github.com/ran729/magmaai/settings/variables/actions`
   - Click "New repository variable"
   - Name: `VITE_BASE_PATH`
   - Value: `/magmaai/`
   - Click "Add variable"
3. Redeploy by pushing to `main` or triggering the workflow

## How It Works

- **Custom domain mode** (default): Uses base path `/` for clean URLs on your domain
- **Subdirectory mode**: Uses base path `/magmaai/` when `VITE_BASE_PATH` is set to `/magmaai/`

The configuration automatically handles:
- Asset path resolution
- React Router basename
- SPA routing with 404 redirects

## Local Development

Local development always uses `/` as the base path, regardless of the production setting:

```bash
npm run dev  # Development server at http://localhost:8090
```

## Manual Build

```bash
# Build for custom domain (default)
npm run build:prod

# Build for GitHub Pages subdirectory
VITE_BASE_PATH=/magmaai/ npm run build:prod
```
