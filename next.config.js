/** @type {import('next').NextConfig} */
// Dynamic configuration (no static export) so API routes like /api/send work.
// Deploy to Vercel (recommended) or any Node host. If you still need GitHub Pages
// for a project subpath, you cannot run the email API there.
const nextConfig = {
  images: { unoptimized: true },
  // If you later map a custom domain or root path, keep basePath empty.
  // basePath: '',
};

module.exports = nextConfig;
