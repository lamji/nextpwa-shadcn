'use client';

import React from 'react';
import Link from 'next/link';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white shadow-sm rounded-xl p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">Terms of Service</h1>
            <p className="text-gray-600">Last Updated: May 22, 2025</p>
          </div>

          {/* Introduction */}
          <div className="prose prose-blue max-w-none mb-8">
            <p>
              Welcome to ScaleWeb. Please read these terms of service carefully before using our website or services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title. Under this license you may not:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Modify or copy our materials;</li>
              <li>Use the materials for any commercial purpose or for any public display;</li>
              <li>Attempt to reverse engineer any software contained on ScaleWeb&apos;s website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
            <p>
              The materials on ScaleWeb&apos;s website are provided on an &apos;as is&apos; basis. ScaleWeb makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="mt-4">
              Further, ScaleWeb does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Limitations</h2>
            <p>
              In no event shall ScaleWeb or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ScaleWeb&apos;s website, even if ScaleWeb or a ScaleWeb authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on ScaleWeb&apos;s website could include technical, typographical, or photographic errors. ScaleWeb does not warrant that any of the materials on its website are accurate, complete or current. ScaleWeb may make changes to the materials contained on its website at any time without notice. However ScaleWeb does not make any commitment to update the materials.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Links</h2>
            <p>
              ScaleWeb has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ScaleWeb of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Modifications</h2>
            <p>
              ScaleWeb may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p><strong>ScaleWeb</strong></p>
              <p>Email: legal@scaleweb.com</p>
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

export default TermsOfService;
