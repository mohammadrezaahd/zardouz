import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about-us.html", destination: "/about-us", permanent: true },
      { source: "/archive.html", destination: "/archive", permanent: true },
      { source: "/single-product.html", destination: "/single-product", permanent: true },
      { source: "/cart.html", destination: "/cart", permanent: true },
      { source: "/checkout.html", destination: "/checkout", permanent: true },
      { source: "/contact-us.html", destination: "/contact-us", permanent: true },
      { source: "/profile.html", destination: "/profile", permanent: true },
      { source: "/register-login.html", destination: "/register-login", permanent: true },
    ];
  },
};

export default nextConfig;
