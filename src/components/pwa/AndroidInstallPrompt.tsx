'use client';

import React from 'react';
import Image from 'next/image';
import { AndroidInstallPromptProps } from '@/components/pwa/types';

/**
 * Apple-inspired Android PWA install prompt component
 */
export const AndroidInstallPrompt: React.FC<AndroidInstallPromptProps> = ({
  appName = 'PWA App',
  appIcon = '/icons/apple-touch-icon.png',
  onInstall,
  onDismiss
}) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white shadow-lg rounded-t-xl p-4 pb-6 animate-slide-up">
      <div className="absolute right-4 top-4">
        <button 
          onClick={() => onDismiss(false)} 
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div className="flex items-center mb-4">
        <div className="relative w-16 h-16 rounded-xl mr-4 shadow-sm overflow-hidden">
          <Image 
            src={appIcon} 
            alt={`${appName} icon`} 
            fill 
            sizes="64px"
            style={{ objectFit: 'cover' }} 
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{appName}</h3>
          <p className="text-gray-600 text-sm">Add to Home Screen</p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-xl mb-4">
        <p className="text-sm text-gray-600 mb-2">Install this app on your device:</p>
        <ul className="text-sm text-gray-600 space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>No app store required</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Works offline or with poor connections</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Uses less storage than traditional apps</span>
          </li>
        </ul>
      </div>
      
      <div className="flex justify-between items-center">
        <button 
          onClick={() => onDismiss(true)} 
          className="text-sm text-gray-600 underline"
        >
          Don&apos;t show again
        </button>
        <button 
          onClick={onInstall} 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium"
        >
          Install
        </button>
      </div>
    </div>
  );
};

export default AndroidInstallPrompt;
