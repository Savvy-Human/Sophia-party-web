
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import HunterTransformer from './components/HunterTransformer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'morph'>('home');
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  const openRsvp = () => setIsRsvpOpen(true);
  const closeRsvp = () => setIsRsvpOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center border-b border-pink-500/30">
        <div 
          className="text-2xl font-black font-orbitron tracking-tighter cursor-pointer flex items-center gap-2"
          onClick={() => setCurrentPage('home')}
        >
          <span className="text-cyan-400">HUNT</span>
          <span className="text-pink-500">RIX</span>
          <span className="text-xs bg-pink-500 px-1 py-0.5 rounded text-white ml-2">CONCERT READY</span>
        </div>
        <div className="flex gap-6 items-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`transition-colors font-orbitron text-xs tracking-widest hover:text-pink-500 ${currentPage === 'home' ? 'text-pink-500 border-b-2 border-pink-500' : 'text-gray-300'}`}
          >
            HOME
          </button>
          <button 
            onClick={() => setCurrentPage('morph')}
            className={`transition-colors font-orbitron text-xs tracking-widest hover:text-cyan-400 ${currentPage === 'morph' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-300'}`}
          >
            PHOTO BOOTH
          </button>
          <button 
            onClick={openRsvp}
            className="transition-all font-orbitron text-xs tracking-widest px-3 py-1 bg-pink-600 hover:bg-pink-500 text-white rounded shadow-[0_0_10px_rgba(255,0,255,0.3)]"
          >
            RSVP
          </button>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-grow pt-20">
        {currentPage === 'home' ? (
          <LandingPage onLaunchAnimator={() => setCurrentPage('morph')} onOpenRsvp={openRsvp} />
        ) : (
          <HunterTransformer />
        )}
      </main>

      {/* RSVP Modal Overlay */}
      {isRsvpOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={closeRsvp}></div>
          <div className="relative w-full max-w-4xl h-[90vh] glass rounded-xl border border-pink-500/50 shadow-2xl overflow-hidden flex flex-col animate-fadeIn">
            <div className="flex justify-between items-center p-4 border-b border-pink-500/20 bg-black/40">
              <h3 className="font-orbitron font-black text-pink-500 tracking-tighter uppercase">Guest Registration</h3>
              <button 
                onClick={closeRsvp}
                className="text-gray-400 hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10"
              >
                <i className="fa-solid fa-xmark text-xl"></i>
              </button>
            </div>
            <div className="flex-grow bg-white">
              <iframe 
                src="https://v0-birthday-rsvp-site-coral.vercel.app" 
                className="w-full h-full border-none"
                title="RSVP Portal"
              />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="glass py-8 px-6 text-center border-t border-pink-500/20 text-gray-500">
        <p className="font-orbitron text-sm tracking-widest">© 2025 SOPHIA'S 6TH BIRTHDAY • THE EVENT OF THE CENTURY</p>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
