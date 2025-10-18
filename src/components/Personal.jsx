import React from 'react';

const Personal = () => {
  return (
    <section id="personal" className="section-container">
      <h2 className="section-title">Beyond Research</h2>
      <div className="card bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
            <div>
              <p className="font-medium text-gray-900">Music Enthusiast</p>
              <p className="text-sm">
                Passionate music listener with 100k+ minutes streamed per year.{' '}
                <a
                  href="https://open.spotify.com/user/gs0neqlxibzott12hn90ax1mm?si=0a320d232a5c4164"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover font-medium"
                >
                  Check out my Spotify
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-medium text-gray-900">Sports & Recreation</p>
              <p className="text-sm">
                Active tennis and basketball player. Bay Area native and loyal Warriors & 49ers fan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Personal;
