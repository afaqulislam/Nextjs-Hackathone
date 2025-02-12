import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metaData = {
  title: "Car Rent Website Design",
  description: "Generated by Afaq ul Islam",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>AUI | Rental E-Commerce</title>
      </head>
      <body className={"text-[Plus Jakarta Sans]"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
