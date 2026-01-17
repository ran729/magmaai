# GitHub Pages Deployment Guide

This project is configured for deployment to GitHub Pages with support for both subdirectory hosting and custom domains.

## Default Setup (GitHub Pages Subdirectory)

By default, the site deploys to: `https://ran729.github.io/magmaai/`

No additional configuration needed - just push to the `main` branch.

## Custom Domain Setup

If you're using a custom domain (e.g., `magmaai.com`), follow these steps:

### 1. Configure GitHub Pages Custom Domain

1. Go to your repository settings: `https://github.com/ran729/magmaai/settings/pages`
2. Under "Custom domain", enter your domain (e.g., `magmaai.com`)
3. Click "Save"
4. Configure your DNS provider to point to GitHub Pages:
   - For apex domain (magmaai.com): Add A records to GitHub's IPs
   - For subdomain (www.magmaai.com): Add CNAME record pointing to `ran729.github.io`

### 2. Update Base Path Environment Variable

1. Go to repository settings: `https://github.com/ran729/magmaai/settings/variables/actions`
2. Click "New repository variable"
3. Name: `VITE_BASE_PATH`
4. Value: `/`
5. Click "Add variable"

### 3. Redeploy

Push to `main` branch or manually trigger the workflow from the Actions tab.

## How It Works

- **Subdirectory mode** (default): Uses base path `/magmaai/` for all routes and assets
- **Custom domain mode**: Uses base path `/` (root) when `VITE_BASE_PATH` is set to `/`

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
# Build for GitHub Pages subdirectory (default)
npm run build:prod

# Build for custom domain
VITE_BASE_PATH=/ npm run build:prod
```
