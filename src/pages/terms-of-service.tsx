import { NextPage } from "next";
import Head from "next/head";

const TermsOfServicePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - Your Website Name</title>
        <meta 
          name="description" 
          content="Our terms of service outline the rules and guidelines for using our website and services."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing and using this website, you accept and agree to be bound by the terms and 
            provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Affiliate Disclosure</h2>
          <p className="mb-6">
            This website contains affiliate links. We may earn a commission when you purchase products 
            through these links, at no additional cost to you.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Content Usage</h2>
          <p className="mb-6">
            All content on this website is for informational purposes only. We strive to provide accurate 
            and up-to-date information, but make no warranties regarding the completeness, reliability, 
            or accuracy of this information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. User Conduct</h2>
          <p className="mb-6">
            You agree not to use this website for any unlawful purpose or in any way that could damage, 
            disable, overburden, or impair the site.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Changes to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these terms at any time. Your continued use of the website 
            following any changes indicates your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact</h2>
          <p className="mb-6">
            If you have any questions about our terms of service, please contact us through our contact page.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;