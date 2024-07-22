/** @type {import('next').NextConfig} */
const nextConfig = {
    img_path : "https://img.gamedistribution.com/",
    path_game : "https://html5.gamedistribution.com/",
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized : true
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET, // Pass through env variables
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/static',
      },
};

export default nextConfig;
