/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
// If deploying as a project site (https://<user>.github.io/my-portfolio) keep repoName below.
const repoName = 'ELYASS HAFIDI Portfolio'

const nextConfig = {
	// Enable static export for GitHub Pages (no Node server, no API routes served here)
	output: 'export',
	images: { unoptimized: true },
	// Use basePath + assetPrefix only in production so local dev remains unchanged
	basePath: isProd ? `/${repoName}` : '',
	assetPrefix: isProd ? `/${repoName}/` : '',
	trailingSlash: true,
}

module.exports = nextConfig
