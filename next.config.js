/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'utfs.io', pathname: '**' },
		],
		domains: ['res.cloudinary.com'],
	},
	distDir: './build',
}

module.exports = nextConfig
