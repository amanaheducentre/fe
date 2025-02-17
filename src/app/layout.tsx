import MainNavbar from "@/components/common/MainNavbar";
import MainFooter from "@/components/common/MainFooter";
import { Providers } from "./providers";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LKP Amanah Edu Centre",
  description: "LKP Montessori No. 1 di Banyuwangi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cupcake">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${poppins.className} antialiased bg-base-200`}>
        <MainNavbar />
        <Providers>{children}</Providers>
        <MainFooter />
      </body>
    </html>
  );
}
