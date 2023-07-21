

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/e2e/:path*",
          destination: "http://localhost:3005/:path*",
        },
        {
          source: "/data/:path*",
          destination: "http://localhost:3005/data/:path*",
        },
        {
          source: "/trace/:path*",
          destination: "http://localhost:3005/trace/:path*",
        },
      ],
    };
  },
  async redirects() {
    return [
      {
        source: "/functiontest",
        destination:
          "https://reports.cucumber.io/report-collections/de8baab8-44d9-4e63-a626-5f19b8ae989f",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
