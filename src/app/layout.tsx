import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./css/bootstrap.min.css";
import "../../public/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../../public/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../public/lib/animate/animate.min.css";
import Image from "next/image";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rovumo Laboratório",
  description: "Análise Laboratorial de Carvão Mineral e Prestação de Serviços",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Teko:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <Script
          type="text/javascript"
          src="https://code.jquery.com/jquery-3.4.1.min.js"
        ></Script>
        <Script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        ></Script>
        <Script type="text/javascript" src="./lib/wow/wow.min.js"></Script>
        <Script
          type="text/javascript"
          src="./lib/easing/easing.min.js"
        ></Script>
        <Script
          type="text/javascript"
          src="./lib/waypoints/waypoints.min.js"
        ></Script>
        <Script
          type="text/javascript"
          src="./lib/counterup/counterup.min.js"
        ></Script>
        <Script
          type="text/javascript"
          src="./lib/owlcarousel/owl.carousel.min.js"
        ></Script>
        <Script
          type="text/javascript"
          src="./lib/owlcarousel/owl.carousel.js"
        ></Script>
        <Script
          type="text/javascript"
          src="./lib/tempusdominus/js/moment.min.js"
        ></Script>
        <Script
          type="text/javascript"
          src="./lib/tempusdominus/js/moment-timezone.min.js"
        ></Script>
        <Script
          type="text/javascript"
          src="./lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"
        ></Script>
        <Script type="text/javascript" src="./js/main.js"></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border position-relative text-primary"
            style={{ width: "6rem", height: "6rem" }}
            role="status"
          ></div>
          <Image
            width={50}
            height={50}
            className="position-absolute top-50 start-50 translate-middle"
            src="/img/icons/rovumoLaboratorio..png"
            alt="Icon"
          />
        </div>
        {children}
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </body>
    </html>
  );
}
