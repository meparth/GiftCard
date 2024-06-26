import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GiftCard",
  description: "A place to get the perfect gift card for the perfect person",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
          <div className="container">
            {/*<Navbar />*/}
            {children}
            {/*<Footer />*/}
          </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}
