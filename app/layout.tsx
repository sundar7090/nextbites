import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites — Find your next bite",
  description: "Good food, no fuss. Find a new favorite recipe with NextBites.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
