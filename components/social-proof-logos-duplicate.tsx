"use client";

import React from 'react';

export function SocialProofLogosDuplicate() {        
    return (
         <section id="social-proof-duplicate" className="py-16 md:py-24 lg:py-28 bg-neutral-lighter text-neutral-darkest">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
              <div className="px-6 text-center sm:px-0">
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                環球媒體報道
                </h2>
              </div>
      
              {/* Desktop and Tablet Layout: 2 rows of 5 logos each */}
              <div className="hidden sm:block">
                <div className="flex flex-wrap items-center justify-center max-w-6xl gap-8 mx-auto mt-12 sm:mt-16 lg:mt-20">
                  {/* Top row: logos 1-5 */}
                  <img className="object-contain w-48 h-16 transition duration-300" 
                    src="/social/social-proof-1.webp" alt="Social Proof 1" />
                  <img className="object-contain w-48 h-16 transition duration-300" 
                    src="/social/social-proof-2.webp" alt="Social Proof 2" />
                  <img className="object-contain w-48 h-16 transition duration-300" 
                    src="/social/social-proof-3.webp" alt="Social Proof 3" />
                  <img className="object-contain w-48 h-16 transition duration-300" 
                    src="/social/social-proof-4.webp" alt="Social Proof 4" />
                  <img className="object-contain w-48 h-16 transition duration-300" 
                    src="/social/social-proof-5.webp" alt="Social Proof 5" />
                </div>
                <div className="flex flex-wrap items-center justify-center max-w-6xl gap-8 mx-auto mt-8">
                  {/* Bottom row: logos 6-10 */}
                  <img className="object-contain w-48 h-16 transition duration-300" 
                    src="/social/social-proof-6.webp" alt="Social Proof 6" />
                  <img className="object-contain w-48 h-16 transition duration-300" 
                    src="/social/social-proof-7.webp" alt="Social Proof 7" />
                  <img className="object-contain w-48 h-16 transition duration-300" 
                    src="/social/social-proof-8.webp" alt="Social Proof 8" />
                  <img className="object-contain w-48 h-16 transition duration-300" 
                    src="/social/social-proof-9.webp" alt="Social Proof 9" />
                  <img className="object-contain w-48 h-16 transition duration-300" 
                    src="/social/social-proof-10.webp" alt="Social Proof 10" />
                </div>
              </div>

              {/* Mobile Layout: 2 columns × 5 rows */}
              <div className="sm:hidden">
                <div className="grid grid-cols-2 gap-x-1 gap-y-4 mx-auto mt-12 sm:mt-16" style={{ maxWidth: '250px' }}>
                  {/* Row 1: logos 1 & 2 */}
                  <img className="object-contain w-full h-12 transition duration-300" 
                    src="/social/social-proof-1.webp" alt="Social Proof 1" />
                   <img className="object-contain w-full h-12 transition duration-300" 
                     src="/social/social-proof-2.webp" alt="Social Proof 2" />
                   
                   {/* Row 2: logos 3 & 4 */}
                   <img className="object-contain w-full h-12 transition duration-300" 
                     src="/social/social-proof-3.webp" alt="Social Proof 3" />
                   <img className="object-contain w-full h-12 transition duration-300" 
                     src="/social/social-proof-4.webp" alt="Social Proof 4" />
                   
                   {/* Row 3: logos 5 & 6 */}
                   <img className="object-contain w-full h-12 transition duration-300" 
                     src="/social/social-proof-5.webp" alt="Social Proof 5" />
                   <img className="object-contain w-full h-12 transition duration-300" 
                     src="/social/social-proof-6.webp" alt="Social Proof 6" />
                   
                   {/* Row 4: logos 7 & 8 */}
                   <img className="object-contain w-full h-12 transition duration-300" 
                     src="/social/social-proof-7.webp" alt="Social Proof 7" />
                   <img className="object-contain w-full h-12 transition duration-300" 
                     src="/social/social-proof-8.webp" alt="Social Proof 8" />
                   
                   {/* Row 5: logos 9 & 10 */}
                   <img className="object-contain w-full h-12 transition duration-300" 
                     src="/social/social-proof-9.webp" alt="Social Proof 9" />
                   <img className="object-contain w-full h-12 transition duration-300" 
                     src="/social/social-proof-10.webp" alt="Social Proof 10" />
                 </div>
               </div>

              {/* YouTube Video Section */}
              <div className="mt-16 md:mt-20">
                <h3 className="text-lg font-bold text-neutral-darkest text-center mb-6 sm:text-xl lg:text-2xl">
                  Classic Watch Repair 時計工房紀錄片
                </h3>
                
                {/* Desktop and Tablet Video */}
                <div className="hidden sm:block">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/FbyatI8kNcw?autoplay=1&mute=1&cc_load_policy=1&cc_lang_pref=zh-TW&hl=zh-TW"
                        title="Classic Watch Repair Documentary"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Mobile Video - Edge to Edge */}
                <div className="sm:hidden -mx-4">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/FbyatI8kNcw?autoplay=1&mute=1&cc_load_policy=1&cc_lang_pref=zh-TW&hl=zh-TW"
                      title="Classic Watch Repair Documentary"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
} 