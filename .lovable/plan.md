

## Issue: SPA Client-Side Routing on Apache/cPanel

This is a classic Single Page Application (SPA) hosting issue. Your React app uses client-side routing (React Router), which means:

- When you navigate from the homepage to `/cars`, React Router handles it in the browser — no server request is made, so it works.
- When you go directly to `discountautopartusa.com/cars`, the **Apache server** tries to find a physical file or folder called `/cars` on disk. It doesn't exist, so Apache returns a 404.

## The Fix

You need an `.htaccess` file in your `public/` folder (so it gets included in the build output) that tells Apache to serve `index.html` for all routes.

### Plan

1. **Create `public/.htaccess`** with Apache rewrite rules that redirect all non-file, non-directory requests to `index.html`. This is the standard fix for SPAs hosted on Apache/cPanel.

The file contents:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This single file addition will fix the issue for all routes (`/cars`, `/trucks`, `/marine`, `/privacy-policy`, `/thank-you`, etc.).

