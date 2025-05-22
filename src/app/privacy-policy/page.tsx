'use client';

import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white shadow-sm rounded-xl p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
            <p className="text-gray-600">Last Updated: May 22, 2025</p>
          </div>

          {/* Introduction */}
          <div className="prose prose-blue max-w-none mb-8">
            <p>
              At ScaleWeb, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Important Information and Who We Are</h2>
            <p>
              ScaleWeb provides web development and digital transformation services. This privacy policy aims to give you information on how ScaleWeb collects and processes your personal data through your use of this website, including any data you may provide through this website when you purchase a service, or contact us.
            </p>
            <p>
              This website is not intended for children and we do not knowingly collect data relating to children.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. The Data We Collect About You</h2>
            <p>
              Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Personal Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
            <p className="mt-4">
              Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
            <p className="mt-4">
              We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
            </p>

            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Right to withdraw consent.</li>
            </ul>
            <p className="mt-4">
              You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Third-party Links</h2>
            <p>
              This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Changes to the Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of significant changes by posting the new privacy policy on this page and, where feasible, by sending you a notification.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p><strong>ScaleWeb</strong></p>
              <p>Email: privacy@scaleweb.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-10 text-center">
            <Link href="/" className="text-primary hover:text-primary/80 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
