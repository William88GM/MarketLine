import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Global/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-800">
        <header className="h-[8.5vh]">
          <Nav />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}