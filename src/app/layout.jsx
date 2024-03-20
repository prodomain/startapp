import { Cookie } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Nav"

const cook = Cookie({subsets: ["latin"], weight: ["400"]});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords:"React, Next, Javascript, Tailwind, CSS, HTML"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

        <body className={`${cook.className} text-4xl`}>
          <Navbar/>
          {children} 
          </body>
      
    </html>
  );
}
