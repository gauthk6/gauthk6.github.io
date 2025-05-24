import type { Metadata } from "next";
// Removed Geist font imports
import "./globals.css";
import Layout from "@/components/Layout"; // Import the Layout component

// Removed Geist font definitions

export const metadata: Metadata = {
  title: "My Portfolio", // Updated title
  description: "A personal portfolio website", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased"> {/* Applied font-sans for Inter */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
