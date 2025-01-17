import { NextPage } from "next";
import Head from "next/head";
import Layout from "@/components/Layout";

const DisclaimerPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Affiliate Disclaimer | WishUp Virtual Assistant Services</title>
        <meta 
          name="description" 
          content="Important information about our affiliate relationship with WishUp and how we maintain transparency in our recommendations."
        />
      </Head>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Affiliate Disclaimer</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Affiliate Relationship Disclosure</h2>
          <p className="mb-6">
            We are a participant in the WishUp Affiliate Program, an affiliate advertising program designed 
            to provide a means for us to earn fees by linking to WishUp.co and its related services. This 
            means that when you click on certain links on our website and subsequently purchase WishUp's 
            virtual assistant services, we may receive a commission from WishUp.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Transparency Statement</h2>
          <p className="mb-6">
            While we do receive compensation for promoting WishUp's services, we maintain complete editorial 
            independence in our content. Our recommendations are based on thorough research, actual user 
            experiences, and the genuine value we believe WishUp provides to businesses seeking virtual 
            assistant services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Service Information</h2>
          <p className="mb-6">
            The information we provide about WishUp's virtual assistant services is accurate to the best of 
            our knowledge and is regularly updated. However, we recommend visiting WishUp's official website 
            for the most current information about their services, pricing, and terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">No Additional Cost</h2>
          <p className="mb-6">
            Using our affiliate links to sign up for WishUp's services will not result in any additional 
            cost to you. The commissions we receive come from WishUp's marketing budget and do not affect 
            the price you pay for their services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
          <p className="mb-6">
            If you have any questions about our affiliate relationship with WishUp or our content, please 
            don't hesitate to contact us through our contact page.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DisclaimerPage;