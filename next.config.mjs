/** @type {import('next').NextConfig} */
const nextConfig = {
    img_path : "https://img.gamedistribution.com/",
    path_game : "https://html5.gamedistribution.com/",
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized : true
    }
};

export default nextConfig;
