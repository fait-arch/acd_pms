import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*", // Cualquier ruta después del dominio
        destination: "/pages/:path*", // Redirigir a las páginas dentro de la carpeta pages
      },
    ];
  },
};

export default nextConfig;
