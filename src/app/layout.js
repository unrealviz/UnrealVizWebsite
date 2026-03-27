import { Cinzel } from "next/font/google";
import "./globals.css";

const cinzelFont = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata = {
  title:
    "Unreal Viz | Building high-end games, cinematic experiences, and real-time worlds that perform.",
  description:
    "Unreal Viz is a real-time production studio specializing in game development, high-quality 3D assets, and immersive experiences using Unreal Engine. We build scalable, performance-driven solutions—from gameplay systems to cinematic content and architectural visualization. Our focus is simple: deliver visually striking, technically sound work that drives real-world results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzelFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
