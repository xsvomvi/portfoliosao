import { Homemade_Apple, Inter, Fugaz_One } from "next/font/google";
import "./globals.css";

const homemadeApple = Homemade_Apple({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"], weight: "400" });
const fugazOne = Fugaz_One({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Sao's Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
