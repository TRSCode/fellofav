import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'FellowshipFavors',
  description:
  'Neighbors helping neighbors. FellowshipFavors is a community of people who help each other by sharing their time, skills, and resources. We are building a community of people who are willing to help each other out. We believe that by helping each other, we can build a stronger community.',
};

export default function RootLayout({ children }) {
  return (
  <ClerkProvider>

      <html lang="en">
          <body className={inter.className}>{children}</body>
      </html>
  </ClerkProvider>
  );
}
