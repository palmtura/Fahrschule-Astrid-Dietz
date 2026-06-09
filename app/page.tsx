import Navbar from '@/components/Navbar';
import { 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Car, 
  Truck, 
  Bike, 
  Tractor,
  BookOpen, 
  Heart, 
  ShieldCheck, 
  Clock, 
  GraduationCap, 
  Map,
  BadgeCheck,
  Smile
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50" id="start">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-brand-blue text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-dark"></div>
          {/* Subtle decorations */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* TEXT COLUMN */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20 backdrop-blur-sm">
                <MapPin size={16} /> 
                <span className="md:hidden">Fahrschule Gründau & Umgebung</span>
                <span className="hidden md:inline">Fahrschule Gründau aktiv im gesamten Main-Kinzig-Kreis</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl font-extrabold font-outfit tracking-tight mb-6 leading-tight">
                Fahrschule Astrid Dietz:<br />Mit <span className="text-brand-red">Spaß & Erfolg</span> zum Führerschein
              </h1>
              
              <p className="text-base md:text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
                Willkommen bei der <strong className="text-white">Fahrschule Astrid Dietz in Gründau</strong>. 
                Wir begleiten dich sicher, fair und stressfrei auf deinem Weg zur Fahrerlaubnis – egal ob Auto, Motorrad oder LKW.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#classes" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-brand-red hover:bg-brand-red-dark transition-colors shadow-lg shadow-brand-red/30">
                  Führerscheine
                </a>
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-brand-blue bg-white hover:bg-blue-50 transition-colors">
                  Kontakt aufnehmen
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4 md:gap-6 items-center text-sm font-medium text-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-brand-red" />
                  <span>Hohe Erfolgsquote</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-brand-red" />
                  <span>Top bewertet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-brand-red" />
                  <span>Gelnhausen, Hanau & Umgebung</span>
                </div>
              </div>
            </div>

            {/* VIDEO COLUMN */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?mute=1" 
                title="Fahrschule Astrid Dietz" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full object-cover p-0"
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

      {/* 5. THEORIE & SYSTEM (Smartboard & 7 Tage Intensiv) */}
      <section id="theory" className="py-20 md:py-28 bg-white border-y border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-8">
                Moderner Theorieunterricht, der Spaß macht!
              </h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-brand-red">
                      <GraduationCap size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Interaktiv am SMARTboard</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Unser Theorieunterricht findet in einem modernen Schulungsraum statt, ausgestattet mit 
                      einem interaktiven SMARTboard. Wir vermitteln trockene Themen in Gruppenarbeit 
                      und nutzen interaktive Methoden zum leichten Lernen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-brand-red">
                      <Clock size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Keine Zeit zu warten? 7-Tage-Kurs</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Wir bieten dir <strong>regelmäßig an sieben aufeinanderfolgenden Tagen</strong> den Theorieunterricht an. 
                      So kannst du alle erforderlichen Themen in kürzester Zeit lernen!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-brand-red">
                      <BookOpen size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Umfassendes Material & Multimedia</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Zu Beginn erhältst du das gesamte Wissen. Wir erklären es verständlich, 
                      unterstützt durch multimediale Hilfsmittel und Lernspiele.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video lg:aspect-square bg-slate-100 rounded-2xl overflow-hidden shadow-xl relative z-10">
                <Image 
                  src="https://picsum.photos/seed/classroom/800/800" 
                  alt="Moderner Schulungsraum" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -z-0 bg-brand-red w-full h-full rounded-2xl top-6 -left-6 md:top-8 md:-left-8"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. KLASSEN / AUSBILDUNG */}
      <section id="classes" className="py-20 md:py-28 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-red font-bold tracking-wider uppercase text-sm mb-2 block">Ausbildung</span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
              Führerscheine bei uns
            </h2>
            <p className="text-lg text-blue-100">
              Egal ob PKW, Zweirad oder schwere Nutzfahrzeuge – bei uns kommst du 
              mit Spaß schnell und erfolgreich zum Führerschein.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-brand-red hover:bg-white/20 transition-all group cursor-pointer text-center">
              <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Car size={36} className="text-white group-hover:text-brand-red transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-2 text-white">PKW / KFZ</h3>
              <p className="text-blue-100/80 text-sm">Die klassische Auto-Ausbildung, auch mit Schaltautomat und modernen E-Fahrzeugen.</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-brand-red hover:bg-white/20 transition-all group cursor-pointer text-center">
              <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Bike size={36} className="text-white group-hover:text-brand-red transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-2 text-white">Zweirad</h3>
              <p className="text-blue-100/80 text-sm">Motorrad, Leichtkraftrad oder Roller. Erlebe die Freiheit auf zwei Rädern sicher.</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-brand-red hover:bg-white/20 transition-all group cursor-pointer text-center">
              <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Tractor size={36} className="text-white group-hover:text-brand-red transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-2 text-white">Zugmaschinen</h3>
              <p className="text-blue-100/80 text-sm">Ideal für die Land- und Forstwirtschaft. Professionelle Ausbildung auf großen Geräten.</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 border border-white/20 hover:border-brand-red hover:bg-white/20 transition-all group cursor-pointer text-center">
              <div className="mx-auto w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                <Truck size={36} className="text-white group-hover:text-brand-red transition-colors" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-2 text-white">LKW</h3>
              <p className="text-blue-100/80 text-sm">Der Weg in die Logistikbranche. Wir schulen alle relevanten LKW-Führerscheinklassen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US (Wer steckt dahinter?) */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/teamwork/1000/800" 
                alt="Das Team der Fahrschule Astrid Dietz" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Overlay Badge for Pablo */}
              <div className="absolute bottom-6 -right-2 md:right-6 bg-brand-blue text-white p-4 rounded-xl shadow-xl max-w-[200px] border border-blue-800 transform md:-rotate-2">
                <p className="text-sm font-medium mb-1 flex items-center justify-between">
                  Feel-Good-Manager
                  <Heart size={16} className="text-brand-red fill-brand-red" />
                </p>
                <p className="font-outfit font-bold text-lg">Hund Pablo 🐾</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-6">
                Wer steckt hinter der Fahrschule Astrid Dietz?
              </h2>
              <div className="space-y-4 text-lg text-slate-600">
                <p>
                  Wir sind ein bunt gemischtes Team bestehend aus erfahrenen Fahrlehrern, engagierten Büroangestellten 
                  und unserem <strong>Feel-Good-Manager Pablo</strong> – einem wuscheligen Hund, der uns stets mit 
                  seinem Charme begleitet.
                </p>
                <p>
                  Gemeinsam setzen wir alles daran, dir eine spaßige und effektive Fahrausbildung zu bieten. 
                  Freu dich auf eine <strong>einzigartige Lernerfahrung</strong> und eine entspannte Atmosphäre bei uns!
                </p>
                <p>
                  Wir sind nicht nur Experten in Theorie und Praxis, sondern auch deine <strong>besten Beifahrer auf dem Weg zum Erfolg!</strong>
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
                <div className="bg-red-50 text-brand-red p-4 rounded-full">
                  <Smile size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Bei uns stehst du im Mittelpunkt</h4>
                  <p className="text-slate-600 text-sm">Bekannt für Freundlichkeit, Geduld und unkomplizierte Art.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHIE / WARUM WIR? */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-400/10 rounded-full blur-2xl mix-blend-screen pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-6">
              Warum zur Fahrschule Astrid Dietz?
            </h2>
            <p className="text-lg text-blue-100">
              Unser Büro ist regelmäßig besetzt, wir sind für dich da und hören dir zu, 
              wenn du Probleme hast. Dein Erfolg ist unsere Motivation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-red/50 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-brand-red/20 rounded-xl flex items-center justify-center mb-6 text-brand-red shadow-lg shadow-brand-red/10">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-4">Transparenz & Fairness</h3>
              <p className="text-blue-100/80 leading-relaxed">
                Transparenz und Fairness stehen bei uns an erster Stelle. Unsere Ausbildungspreise 
                sind immer angemessen und fair kalkuliert. Keine versteckten Kosten.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-red/50 hover:bg-white/10 transition-all relative md:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full rounded-tr-2xl -z-10"></div>
              <div className="w-14 h-14 bg-brand-red text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-red/20">
                <BadgeCheck size={28} />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-4">Exzellente Ausbildung</h3>
              <p className="text-blue-100/80 leading-relaxed">
                Wir streben nach Exzellenz. Durch regelmäßige Fortbildungen halten wir uns 
                immer auf dem neuesten Stand der Lehrmethoden und Entwicklungen.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-red/50 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 bg-brand-red/20 rounded-xl flex items-center justify-center mb-6 text-brand-red shadow-lg shadow-brand-red/10">
                <Map size={28} />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-4">Großes Gebiet</h3>
              <p className="text-blue-100/80 leading-relaxed">
                Egal ob Gründau, Gelnhausen, Hailer, Linsengericht, Büdingen, Hanau 
                oder Wächtersbach – wir sind deine Anlaufstelle in der Region!
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* 6. INFOS: BF17, COACHING, AUSBILDUNGSPASS */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mb-6">
              Rundum sorglos: Deine Extras bei uns
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* BF17 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl hover:border-brand-blue/20 transition-all">
              <div className="bg-brand-blue text-white w-16 h-16 flex items-center justify-center rounded-2xl mb-6 font-outfit font-black text-2xl shadow-lg shadow-brand-blue/20">
                17
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4 text-slate-900">Führerschein mit 17</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                Absolviere das &quot;Begleitete Fahren ab 17&quot;. Start mit 16 ½ Jahren möglich! Theorie und Praxis durchlaufen, 
                damit du pünktlich an deinem 17. Geburtstag durchstarten kannst.
              </p>
            </div>

            {/* Coaching */}
            <div className="bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-8 rounded-2xl shadow-xl flex flex-col h-full transform md:-translate-y-4 hover:shadow-2xl transition-all border border-brand-blue-dark">
              <div className="bg-brand-red text-white w-16 h-16 flex items-center justify-center rounded-2xl mb-6 shadow-lg shadow-brand-red/30">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4">Coaching bei Prüfungsstress</h3>
              <p className="text-blue-100 mb-6 flex-grow leading-relaxed">
                Nervös? Wir unterstützen dich individuell bei Fahr- oder Prüfungsstress. Sei es in Einzelgesprächen 
                oder in Workshops, wir geben dir Ruhe und Selbstvertrauen für die Prüfung.
              </p>
            </div>

            {/* Ausbildungspass */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl hover:border-brand-blue/20 transition-all">
               <div className="bg-slate-100 text-brand-blue w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold font-outfit mb-4 text-slate-900">Persönlicher Ausbildungspass</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                Halte deine Lernziele, Erlebnisse und Termine in deinem eigenen Pass fest. 
                Damit behältst du stets den Überblick und kannst deine Fortschritte verfolgen.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CONTACT & FOOTER */}
      <section id="contact" className="bg-brand-blue text-white pt-20 md:pt-28 pb-10 border-t-8 border-brand-red relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
            
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative w-32 h-16 bg-white rounded-xl p-2 flex items-center justify-center">
                  <img src="/logo.png" alt="Fahrschule Astrid Dietz" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
              <p className="text-blue-200 mb-6">
                Wir freuen uns darauf, dich kennenzulernen! Deine moderne und sympathische 
                Fahrschule für Gründau und Umgebung.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders if needed */}
                <span className="w-10 h-10 bg-brand-blue-dark rounded-full flex items-center justify-center text-blue-200 hover:text-white cursor-pointer transition-colors">
                  <MapPin size={18} />
                </span>
                <span className="w-10 h-10 bg-brand-blue-dark rounded-full flex items-center justify-center text-blue-200 hover:text-white cursor-pointer transition-colors">
                  <Phone size={18} />
                </span>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold font-outfit mb-6 text-white">Standort & Kontakt</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-blue-100">
                  <MapPin size={24} className="text-brand-red flex-shrink-0 mt-1" />
                  <span>
                    Industriestraße 4a<br />
                    63584 Gründau
                  </span>
                </li>
                <li className="flex items-center gap-4 text-blue-100">
                  <Phone size={24} className="text-brand-red flex-shrink-0" />
                  <span>06051 - [Nummer eintragen]</span>
                </li>
                <li className="flex items-center gap-4 text-blue-100">
                  <Mail size={24} className="text-brand-red flex-shrink-0" />
                  <span>Fax: 06051-828 699</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold font-outfit mb-6 text-white">Unser Einzugsgebiet</h4>
              <ul className="space-y-2 text-blue-200 columns-2">
                <li>• Gründau</li>
                <li>• Gelnhausen</li>
                <li>• Hailer</li>
                <li>• Linsengericht</li>
                <li>• Büdingen</li>
                <li>• Hanau</li>
                <li>• Wächtersbach</li>
              </ul>
              <div className="mt-8">
                <button className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-lg font-bold transition-colors w-full shadow-lg shadow-brand-red/20">
                  Unverbindlich anfragen
                </button>
              </div>
            </div>

          </div>

          <div className="border-t border-brand-blue-dark pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-200 text-sm">
            <p>© {new Date().getFullYear()} Fahrschule Astrid Dietz</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Einstellungen</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
