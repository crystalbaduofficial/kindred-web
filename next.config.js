// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
// module.exports = {
//   output: {
//     filename: 'my-first-webpack.bundle.js',
//   },
//   module: {
//     rules: [{ test: /\.txt$/, use: 'raw-loader' }],
//   },
// };
const withVideos = require('next-videos')
module.exports = withVideos()