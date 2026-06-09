'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ essential: true, analytics: true, marketing: true }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ essential: true, analytics: false, marketing: false }));
    setIsVisible(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ essential: true, analytics: analyticsEnabled, marketing: marketingEnabled }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 md:p-8 pointer-events-auto relative overflow-hidden">
        {/* minimal design */}
        {!showSettings ? (
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-outfit">Wir verwenden Cookies</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                Einige Cookies sind essenziell für den Betrieb der Seite, während andere uns helfen, diese Website zu verbessern.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <button 
                onClick={() => setShowSettings(true)}
                className="w-full sm:w-auto px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap underline underline-offset-4 decoration-slate-300"
              >
                Weitere Einstellungen
              </button>
              <div className="flex w-full sm:w-auto gap-3">
                <button 
                  onClick={handleRejectAll}
                  className="flex-1 sm:flex-none px-8 py-3 text-sm font-bold text-brand-blue bg-blue-50 hover:bg-blue-100 rounded-xl transition-all whitespace-nowrap border border-blue-200 text-center"
                >
                  Ablehnen
                </button>
                <button 
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-none px-8 py-3 text-sm font-bold text-white bg-brand-red hover:bg-brand-red-dark rounded-xl transition-all shadow-lg shadow-brand-red/20 whitespace-nowrap border border-brand-red text-center"
                >
                  Akzeptieren
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900 font-outfit">Cookie-Einstellungen</h3>
              <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4 mb-8">
              {/* Essential */}
              <div className="flex items-start justify-between gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Essenzielle Cookies</h4>
                  <p className="text-xs text-slate-500">Diese Cookies sind für die Grundfunktionen der Webseite zwingend erforderlich.</p>
                </div>
                <div className="relative inline-flex items-center cursor-not-allowed flex-shrink-0">
                  <div className="w-11 h-6 bg-brand-blue/60 rounded-full peer"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform translate-x-5 shadow-sm"></div>
                </div>
              </div>
              
              {/* Analytics */}
              <div className="flex items-start justify-between gap-4 p-5 rounded-xl border border-slate-200 bg-white">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Analyse Cookies</h4>
                  <p className="text-xs text-slate-500">Helfen uns zu verstehen, wie Besucher mit der Webseite interagieren, indem Informationen anonym gesammelt werden.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                  <input type="checkbox" className="sr-only peer" checked={analyticsEnabled} onChange={(e) => setAnalyticsEnabled(e.target.checked)} />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                </label>
              </div>

               {/* Marketing */}
               <div className="flex items-start justify-between gap-4 p-5 rounded-xl border border-slate-200 bg-white">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Marketing Cookies</h4>
                  <p className="text-xs text-slate-500">Werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                  <input type="checkbox" className="sr-only peer" checked={marketingEnabled} onChange={(e) => setMarketingEnabled(e.target.checked)} />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-red"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-slate-100">
              <button 
                onClick={handleSaveSettings}
                className="px-6 py-3 text-sm font-bold text-brand-blue bg-blue-50 hover:bg-blue-100 rounded-xl transition-all border border-blue-200 w-full sm:w-auto text-center"
              >
                Auswahl speichern
              </button>
              <button 
                onClick={handleAcceptAll}
                className="px-6 py-3 text-sm font-bold text-white bg-brand-red hover:bg-brand-red-dark rounded-xl transition-all shadow-lg shadow-brand-red/20 border border-brand-red w-full sm:w-auto text-center"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
