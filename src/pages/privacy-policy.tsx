import { NextPage } from "next";
import Head from "next/head";

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Your Website Name</title>
        <meta 
          name="description" 
          content="Our privacy policy explains how we collect, use, and protect your personal information."
        />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, including when you:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Subscribe to our newsletter</li>
            <li>Contact us through our contact form</li>
            <li>Leave comments on our blog posts</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Send you our newsletter and updates</li>
            <li>Respond to your inquiries</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information Sharing</h2>
          <p className="mb-6">
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this privacy policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about our privacy policy, please contact us through our contact page.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;