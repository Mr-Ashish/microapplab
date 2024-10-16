// pages/Pricing.js

import Head from "next/head";

const Pricing = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <Head>
        <title>Pricing Plans | Birthday Bot</title>
      </Head>

      <div className="max-w-5xl">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Pricing Plans
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-100 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-700">Basic Plan</h2>
            <p className="text-blue-600 font-bold animate-pulse mb-4">
              Limited-time offer!
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Individual birthday updates</li>
              <li>Bulk org-level birthday upload</li>
              <li>
                Birthday wishes with animated gifs on the channel of your choice
              </li>
            </ul>
          </div>

          <div className="bg-green-100 rounded-lg shadow-md p-6 transform transition-transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-green-700">
              Advanced Plan
            </h2>
            <p className="text-green-600 mb-4">Coming soon</p>
            <p className="text-green-600 mb-4">
              Features include:
              <ul className="list-disc list-inside text-gray-700 pl-4">
                <li>Wishes on work anniversary</li>
                <li>Shoutout for great work</li>
                <li>Other celebrations</li>
                <li>Customized birthday message templates</li>
                <li>Integration with HR software</li>
                <li>Advanced analytics and reporting</li>
              </ul>
            </p>
            <p className="text-green-600">Please contact us for this plan.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
