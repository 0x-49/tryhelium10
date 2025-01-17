import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ 
  children, 
  title = "WishUp Virtual Assistant Services | Hire Top 0.1% VAs in 60 Minutes",
  description = "Hire pre-vetted virtual assistants from WishUp. Get expert VAs for inbox management, bookkeeping, project management, and more. Start in 60 minutes with top 0.1% talent."
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="virtual assistant, VA services, remote assistant, WishUp, virtual receptionist, bookkeeping assistant, project management" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-background min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}