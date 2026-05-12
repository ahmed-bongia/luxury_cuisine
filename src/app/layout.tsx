import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "L'Éclat Culinaire | Haute Cuisine & Fine Dining",
  description: "Experience the art of brilliance through our luxury culinary journey. A symphony of flavors, textures, and cinematic dining.",
};

import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable,
          cormorant.variable,
          "font-sans selection:bg-primary selection:text-primary-foreground noise"
        )}
      >
        <Preloader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
