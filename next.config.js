/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ["src"]
    },

    reactStrictMode: true,
    swcMinify: true,

    // Uncoment to add domain whitelist
    images: {
        domains: ["mosaic.scdn.co", "i.scdn.co", "seeded-session-images.scdn.co"]
    },

    // SVGR
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        typescript: true,
                        icon: true
                    }
                }
            ]
        });

        return config;
    }
};

module.exports = nextConfig;
