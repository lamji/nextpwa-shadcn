'use client';

import React from 'react';
import Image from 'next/image';
import { Share } from 'lucide-react';
import { IosInstallPromptProps } from '@/components/pwa/types';

/**
 * Apple-inspired iOS PWA install prompt component
 */
export const IosInstallPrompt: React.FC<IosInstallPromptProps> = ({ 
  appName = 'PWA App', 
  appIcon = '/icons/apple-touch-icon.png',
  onDismiss 
}) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white shadow-lg rounded-t-xl p-4 pb-8 animate-slide-up">
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
        <a
          href="https://www.youtube.com/shorts/4p_eIaOF7Yg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full mb-4 px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          Watch Tutorial
        </a>
        <div className="flex items-center mb-6">
          <div className="bg-blue-500 text-white p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14"></path>
            </svg>
          </div>
          <div className="text-sm">
            <div className="font-medium">Step 1</div>
            <div className="text-gray-500">Tap <span className="inline-block align-middle">
              <Share size={16} className="text-blue-500" />
            </span> at the bottom of your browser</div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="bg-blue-500 text-white p-2 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8h14M5 12h14M5 16h14"></path>
            </svg>
          </div>
          <div className="text-sm">
            <div className="font-medium">Step 2</div>
            <div className="text-gray-500">Scroll to &quot;Add to Home Screen&quot;</div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <button 
          onClick={() => onDismiss(true)} 
          className="text-sm text-gray-600 underline"
        >
          Don&apos;t show again
        </button>
        <button 
          onClick={() => onDismiss(false)} 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default IosInstallPrompt;
