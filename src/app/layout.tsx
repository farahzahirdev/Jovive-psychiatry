import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jovive Psychiatry | Empowering Minds, Embracing Mental Health",
  description:
    "Personalized mental health care with therapy, medication management, and BrainsWay TMS in Pleasant Hill, Solana Beach, and via telepsychiatry in CA, OR, and NY. Book your free consultation.",
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  keywords: [
    "Jovive Psychiatry",
    "TMS Pleasant Hill",
    "TMS Solana Beach",
    "BrainsWay TMS",
    "telepsychiatry California",
    "medication management",
    "therapy counseling",
    "depression treatment",
  ],
  openGraph: {
    title: "Jovive Psychiatry | Empowering Minds, Embracing Mental Health",
    description:
      "Therapy, medication management, and BrainsWay TMS. Book your free consultation today.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
