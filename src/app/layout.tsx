import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import "./styles.css"
import { cn } from "@app/lib/utils";
import 'iconify-icon'
import Nprogressprovider from "@app/providers/Nprogressprovider";



export const metadata: Metadata = {
  title: "SLICOM",
  description: "Motor Insurance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nprogressprovider>
          {children}
        </Nprogressprovider>
      </body>
    </html>
  );
}
