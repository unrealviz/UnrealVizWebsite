import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata = {
  title: "Unreal Viz | Immersive Digital Experiences",
  description:
    "Transforming ideas into immersive digital solutions through 3D, web development, Unreal Engine, and architectural visualization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzelFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
