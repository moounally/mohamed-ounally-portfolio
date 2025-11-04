import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Calendar, Video, FileText, ExternalLink, Zap, Rocket, Brain, Code, MapPin, Users, Coffee, Mountain, Cpu, Heart, Briefcase, GraduationCap, Download, ChevronRight, Sparkles, Trophy, BookOpen, Target, Flame, Menu, X, Award, Globe, Wrench, Factory } from 'lucide-react';

const Portfolio = () => {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('fr');
  const [scrollY, setScrollY] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [easterEgg, setEasterEgg] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [funFact, setFunFact] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [konamiCode, setKonamiCode] = useState([]);
  const [matrixMode, setMatrixMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setMobileMenuOpen(false);
    };
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    // Konami Code Easter Egg
    const handleKeyDown = (e) => {
      const code = [...konamiCode, e.key].slice(-10);
      setKonamiCode(code);
      const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
      if (JSON.stringify(code) === JSON.stringify(konamiSequence)) {
        setMatrixMode(true);
        setTimeout(() => setMatrixMode(false), 10000);
        setKonamiCode([]);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('keydown', handleKeyDown);
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(234, 88, 12, 0.5); }
        50% { box-shadow: 0 0 40px rgba(234, 88, 12, 0.8); }
      }
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px) rotate(-5deg); }
        75% { transform: translateX(5px) rotate(5deg); }
      }
      @keyframes matrix-fall {
        0% { transform: translateY(-100%); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(100vh); opacity: 0; }
      }
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 4s ease infinite;
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      .animate-shake {
        animation: shake 0.5s ease-in-out;
      }
      .matrix-rain {
        animation: matrix-fall linear infinite;
      }
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .hover-lift:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      }
      .glass {
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('keydown', handleKeyDown);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [konamiCode]);

  useEffect(() => {
    const facts = content[lang].funFacts;
    setFunFact(facts[Math.floor(Math.random() * facts.length)]);
  }, [lang]);

  const changeFunFact = () => {
    const facts = content[lang].funFacts;
    let newFact;
    do {
      newFact = facts[Math.floor(Math.random() * facts.length)];
    } while (newFact === funFact && facts.length > 1);
    setFunFact(newFact);
  };

  const handleEasterEgg = () => {
    setEasterEgg(prev => prev + 1);
    if (easterEgg === 4) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        setEasterEgg(0);
      }, 5000);
    }
  };

  const content = {
    fr: {
      nav: { home: 'Accueil', about: 'À propos', experience: 'Parcours', projects: 'Projets', cv: 'CV', contact: 'Contact' },
      tagline: "The Café Coder ☕",
      subtitle: "Je donne vie aux robots qui marchent en pente (avec style)",
      intro: "M2 Perception & Robotique @ UCA • 22 ans • Obsédé par l'efficacité énergétique des systèmes autonomes • Entre lignes de code ROS 2 et sommets de montagne, je construis l'avenir de la robotique mobile • Publié à ECMR 2025 avant même d'avoir mon diplôme.",
      cta: "Découvrir mes projets",
      ctaSecondary: "Parlons robot !",
      funFacts: [
        "🎯 2 publications à ECMR 2025 avant mon diplôme (oui, c'est légal)",
        "⚡ Mon robot Voltaire consomme moins qu'une ampoule LED",
        "🏔️ Je code mieux après 10km de trail (testé et approuvé)",
        "🤖 Premier framework ROS 2 natif pour Unitree B1 au monde",
        "☕ Record personnel : 7 cafés en une journée de debug (ne pas reproduire)",
        "📊 Major de promo M1 (1/42) avec mention Très Bien",
        "🌍 3 langues : FR/AR natif, EN C1, DE A2",
        "⚖️ Trésorier National AFNEUS + Lead Women in Science"
      ],
      stats: [
        { value: "2", label: "Publications", subtitle: "ECMR 2025 - premier auteur", icon: FileText },
        { value: "500h+", label: "Heures terrain", subtitle: "boue, pentes et gloire", icon: Mountain },
        { value: "∞", label: "Cafés bus", subtitle: "fuel de l'innovation", icon: Coffee }
      ],
      hoverMessages: {
        github: "Mon code en liberté",
        linkedin: "Version corporate de moi",
        email: "Je réponds vite, promis",
        cv: "Ma vie en PDF",
        scholar: "Mes publications (bientôt)",
        researchgate: "Mon profil recherche (bientôt)"
      }
    },
    en: {
      nav: { home: 'Home', about: 'About', experience: 'Journey', projects: 'Projects', cv: 'CV', contact: 'Contact' },
      tagline: "The Café Coder ☕",
      subtitle: "I bring life to slope-walking robots (with style)",
      intro: "M2 Perception & Robotics @ UCA • 22 y/o • Obsessed with energy efficiency of autonomous systems • Between ROS 2 code lines and mountain peaks, I'm building the future of mobile robotics • Published at ECMR 2025 before even graduating.",
      cta: "Explore my projects",
      ctaSecondary: "Let's talk robots!",
      funFacts: [
        "🎯 2 publications at ECMR 2025 before graduation (yes, it's legal)",
        "⚡ My robot Voltaire uses less power than an LED bulb",
        "🏔️ I code better after a 10km trail run (tested and approved)",
        "🤖 First native ROS 2 framework for Unitree B1 worldwide",
        "☕ Personal record: 7 coffees during one debug session (don't try this)",
        "📊 Top of class M1 (1/42) with High Honors",
        "🌍 3 languages: FR/AR native, EN C1, DE A2",
        "⚖️ National Treasurer AFNEUS + Women in Science Lead"
      ],
      stats: [
        { value: "2", label: "Publications", subtitle: "ECMR 2025 - first author", icon: FileText },
        { value: "500h+", label: "Field hours", subtitle: "mud, slopes and glory", icon: Mountain },
        { value: "∞", label: "Coffees drunk", subtitle: "fuel of innovation", icon: Coffee }
      ],
      hoverMessages: {
        github: "My code in the wild",
        linkedin: "Corporate version of me",
        email: "I reply fast, promise",
        cv: "My life in PDF",
        scholar: "My publications (coming soon)",
        researchgate: "My research profile (coming soon)"
      }
    }
  };

  const t = content[lang];

  const AboutPage = () => (
    <div className="space-y-12 animate-fadeIn">
      <div className="text-center space-y-4">
        <div className="inline-block animate-float">
          <span className="text-7xl">🤖</span>
        </div>
        <h1 className="text-6xl font-black">
          {lang === 'fr' ? 'Moi, c\'est Mohamed' : 'Hi, I\'m Mohamed'}
        </h1>
        <p className={`text-2xl font-bold ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600'}`}>
          {lang === 'fr' ? '22 ans • Étudiant-chercheur • Dresseur de robots quadrupèdes' : '22 y/o • Student-researcher • Quadruped robot tamer'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className={`p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-orange-950/40 to-amber-950/40 border-2 border-orange-500/30' : 'bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200'}`}>
          <div className="flex items-center gap-3 mb-4">
            <Brain className={isDark ? 'text-orange-400' : 'text-orange-600'} size={36} />
            <h3 className="text-3xl font-bold">{lang === 'fr' ? 'L\'humain' : 'The Human'}</h3>
          </div>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr' 
              ? "Master 2 PAR à Clermont-Ferrand. Je transforme des équations en robots qui marchent. Passionné par l'intersection entre physique, IA et efficacité énergétique. Mon crédo : un robot intelligent sait où il va ET combien ça coûte en énergie. Major de promo M1 (1/42), boursier d'excellence 2 ans."
              : "Master 2 PAR in Clermont-Ferrand. I turn equations into walking robots. Passionate about the intersection of physics, AI and energy efficiency. My motto: a smart robot knows where it's going AND how much energy it costs. Top of class M1 (1/42), 2-year excellence scholarship."
            }
          </p>
        </div>

        <div className={`p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-teal-950/40 to-cyan-950/40 border-2 border-teal-500/30' : 'bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200'}`}>
          <div className="flex items-center gap-3 mb-4">
            <Rocket className={isDark ? 'text-teal-400' : 'text-teal-600'} size={36} />
            <h3 className="text-3xl font-bold">{lang === 'fr' ? 'La mission' : 'The Mission'}</h3>
          </div>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr'
              ? "Créer des robots qui comprennent vraiment leur environnement. Mon truc ? L'optimisation énergétique sur terrains complexes. Genre faire qu'un quadrupède sache exactement où poser ses pattes pour grimper une pente sans vider sa batterie. Premier framework ROS 2 natif pour Unitree B1 au monde !"
              : "Creating robots that truly understand their environment. My thing? Energy optimization on complex terrains. Like making a quadruped know exactly where to place its paws to climb a slope without draining its battery. First native ROS 2 framework for Unitree B1 worldwide!"
            }
          </p>
        </div>
      </div>

      <div className={`p-10 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-r from-indigo-950/40 via-purple-950/40 to-pink-950/40 border-2 border-indigo-500/30' : 'bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200'}`}>
        <div className="flex items-center gap-3 mb-6">
          <Heart className={isDark ? 'text-rose-400' : 'text-rose-600'} size={36} />
          <h3 className="text-3xl font-bold">{lang === 'fr' ? 'Ce qui me fait vibrer' : 'What makes me tick'}</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🤖', title: 'Open Source', desc: lang === 'fr' ? 'ROS 2, Docker, GitHub. Code partagé = connaissance multipliée' : 'ROS 2, Docker, GitHub. Shared code = multiplied knowledge' },
            { icon: '🏃', title: 'Trail Running', desc: lang === 'fr' ? 'La montagne m\'apprend l\'endurance. Et à gérer mon énergie (ironique, non ?)' : 'Mountains teach me endurance. And energy management (ironic, right?)' },
            { icon: '🌱', title: 'Environnement', desc: lang === 'fr' ? 'Agriculture durable, biodiversité, tech responsable' : 'Sustainable agriculture, biodiversity, responsible tech' },
            { icon: '⚖️', title: 'Égalité', desc: lang === 'fr' ? 'Women in Science @ AFNEUS. La science n\'a pas de genre' : 'Women in Science @ AFNEUS. Science has no gender' },
            { icon: '🎓', title: 'Transmission', desc: lang === 'fr' ? '50h/semestre de tutorat. +40% sur les notes moyennes' : '50h/semester tutoring. +40% average grade improvement' },
            { icon: '🌍', title: 'Multilinguisme', desc: lang === 'fr' ? 'FR/AR natif • EN C1 • DE A2. Les idées n\'ont pas de frontières' : 'FR/AR native • EN C1 • DE A2. Ideas have no borders' }
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-2xl transition-all hover:scale-110 ${isDark ? 'bg-gray-900/30' : 'bg-white/50'}`}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div 
        className={`text-center p-10 rounded-3xl cursor-pointer ${isDark ? 'bg-gradient-to-r from-pink-950/40 via-purple-950/40 to-indigo-950/40 border-2 border-pink-500/30' : 'bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 border-2 border-pink-200'}`}
        onMouseEnter={() => setCoffeeCount(prev => prev + 1)}
      >
        <p className={`text-2xl font-bold mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {lang === 'fr' ? '🎮 Tu aimes les surprises ?' : '🎮 You like surprises?'}
        </p>
        <button onClick={handleEasterEgg} className={`px-12 py-6 rounded-2xl font-black text-2xl transition-all duration-300 ${easterEgg >= 5 ? 'animate-shake scale-110' : 'hover:scale-110 hover:rotate-3'} ${isDark ? 'bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500' : 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600'} text-white shadow-2xl border-4 border-white/20`}>
          {easterEgg >= 5 ? '🎉🎊 BRAVO ! Tu es incroyable ! 🎊🎉' : (easterEgg > 0 ? `🎲 Continue... (${easterEgg}/5)` : '🎲 CLIQUE-MOI ! (tu ne le regretteras pas)')}
        </button>
        {easterEgg > 0 && easterEgg < 5 && (
          <p className={`mt-4 text-lg font-bold animate-bounce ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>
            {lang === 'fr' ? `Encore ${5 - easterEgg} fois... 👀` : `${5 - easterEgg} more times... 👀`}
          </p>
        )}
        {coffeeCount > 0 && (
          <p className={`mt-4 text-sm italic ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
            ☕ {lang === 'fr' ? `Cafés virtuels bus : ${coffeeCount}` : `Virtual coffees drunk: ${coffeeCount}`}
          </p>
        )}
      </div>
    </div>
  );

  const ExperiencePage = () => (
    <div className="space-y-12 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black mb-4">
          <span className={isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 animate-gradient' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-purple-600 animate-gradient'}>
            {lang === 'fr' ? 'Mon Aventure' : 'My Journey'}
          </span>
        </h1>
        <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {lang === 'fr' ? 'De la théorie au terrain, en passant par beaucoup de café' : 'From theory to field, via lots of coffee'}
        </p>
      </div>

      <div className="relative">
        <div className={`absolute left-8 top-0 bottom-0 w-1 ${isDark ? 'bg-gradient-to-b from-orange-500 via-teal-500 to-indigo-500' : 'bg-gradient-to-b from-orange-400 via-teal-400 to-indigo-400'} rounded-full`}></div>
        
        <div className="space-y-8 ml-20">
          {/* INRAE Research - 2025 */}
          <div className={`p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border-2 border-emerald-500/30' : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200'}`}>
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-2xl ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-200'} animate-pulse-glow`}>
                <Cpu className={isDark ? 'text-emerald-400' : 'text-emerald-700'} size={40} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl font-black">INRAE - TSCF Lab</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${isDark ? 'bg-emerald-500/30 text-emerald-300' : 'bg-emerald-200 text-emerald-900'}`}>Avr-Sep 2025 🔥</span>
                </div>
                <p className={`text-xl font-bold mb-3 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  {lang === 'fr' ? 'Stage Recherche - Robotique Autonome & Systèmes Énergétiques' : 'Research Intern - Autonomous Robotics & Energy Systems'}
                </p>
                <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {lang === 'fr' 
                    ? "Premier framework ROS 2 natif pour Unitree B1 avec architecture modulaire. Modèle énergétique avec prise en compte de l'orientation sur pentes (5°-20°). Résultat : 2 publications à ECMR 2025 ! Validation terrain extensive dans la boue et la gloire."
                    : "First native ROS 2 framework for Unitree B1 with modular architecture. Heading-aware energy model on slopes (5°-20°). Result: 2 publications at ECMR 2025! Extensive field validation in mud and glory."
                  }
                </p>
                <div className="flex flex-wrap gap-2">
                  {['ROS 2 Humble/Jazzy', 'Docker', 'C++', 'Python', 'GNSS', 'Field Tests', 'Energy Modeling'].map(tech => (
                    <span key={tech} className={`px-4 py-2 rounded-xl font-medium ${isDark ? 'bg-gray-800 text-emerald-400' : 'bg-white text-emerald-700'} border-2 ${isDark ? 'border-emerald-500/30' : 'border-emerald-300'}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Peugeot Tunisia - 2024 */}
          <div className={`p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-blue-950/40 to-cyan-950/40 border-2 border-blue-500/30' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200'}`}>
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-2xl ${isDark ? 'bg-blue-500/20' : 'bg-blue-200'}`}>
                <Wrench className={isDark ? 'text-blue-400' : 'text-blue-700'} size={40} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl font-black">Peugeot Tunisia</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${isDark ? 'bg-blue-500/30 text-blue-300' : 'bg-blue-200 text-blue-900'}`}>Jun-Août 2024 🔧</span>
                </div>
                <p className={`text-xl font-bold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                  {lang === 'fr' ? 'Stage Ingénieur Mécatronique' : 'Mechatronic Engineering Intern'}
                </p>
                <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {lang === 'fr'
                    ? "Amélioration de 30% de la fiabilité système et réduction de 20% du downtime via diagnostic et recalibration. Transformation digitale de la maintenance avec protocoles de tests automatisés. CAN bus, Modbus, GRAFCET."
                    : "Improved system reliability by 30% and reduced downtime by 20% through diagnostics and recalibration. Digital transformation of maintenance with automated testing protocols. CAN bus, Modbus, GRAFCET."
                  }
                </p>
                <div className="flex flex-wrap gap-2">
                  {['CAN Bus', 'Modbus', 'GRAFCET', 'PLCs', 'Industrial Automation'].map(tech => (
                    <span key={tech} className={`px-4 py-2 rounded-xl font-medium ${isDark ? 'bg-gray-800 text-blue-400' : 'bg-white text-blue-700'} border-2 ${isDark ? 'border-blue-500/30' : 'border-blue-300'}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Future CPC - 2023 */}
          <div className={`p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-amber-950/40 to-orange-950/40 border-2 border-amber-500/30' : 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200'}`}>
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-2xl ${isDark ? 'bg-amber-500/20' : 'bg-amber-200'}`}>
                <Factory className={isDark ? 'text-amber-400' : 'text-amber-700'} size={40} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl font-black">Future CPC</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${isDark ? 'bg-amber-500/30 text-amber-300' : 'bg-amber-200 text-amber-900'}`}>Jun-Août 2023 ⚙️</span>
                </div>
                <p className={`text-xl font-bold mb-3 ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>
                  {lang === 'fr' ? 'Stage Automatisation Industrielle' : 'Industrial Automation Intern'}
                </p>
                <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {lang === 'fr'
                    ? "Commissioning de lignes d'automatisation et déploiement de systèmes de supervision temps réel. +12% de productivité via optimisation process. Programmation PLCs (Schneider Control Expert) et design d'interfaces HMI."
                    : "Commissioned automation lines and deployed real-time supervision systems. +12% productivity through process optimization. PLC programming (Schneider Control Expert) and HMI interface design."
                  }
                </p>
                <div className="flex flex-wrap gap-2">
                  {['PLCs Schneider', 'HMI Design', 'Process Optimization', 'Real-time Systems'].map(tech => (
                    <span key={tech} className={`px-4 py-2 rounded-xl font-medium ${isDark ? 'bg-gray-800 text-amber-400' : 'bg-white text-amber-700'} border-2 ${isDark ? 'border-amber-500/30' : 'border-amber-300'}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RobotiClermont */}
          <div className={`p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-purple-950/40 to-fuchsia-950/40 border-2 border-purple-500/30' : 'bg-gradient-to-br from-purple-50 to-fuchsia-50 border-2 border-purple-200'}`}>
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-2xl ${isDark ? 'bg-purple-500/20' : 'bg-purple-200'}`}>
                <Users className={isDark ? 'text-purple-400' : 'text-purple-700'} size={40} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl font-black">RobotiClermont</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${isDark ? 'bg-purple-500/30 text-purple-300' : 'bg-purple-200 text-purple-900'}`}>2023-now 🚀</span>
                </div>
                <p className={`text-xl font-bold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-700'}`}>
                  {lang === 'fr' ? 'Co-fondateur & Trésorier' : 'Co-founder & Treasurer'}
                </p>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {lang === 'fr'
                    ? "Création de l'asso robotique de l'UCA from scratch. Ateliers ROS 2 & IA, hackathons, démos publiques. Culture open-source et vulgarisation scientifique. Parce qu'apprendre seul c'est bien, ensemble c'est mieux !"
                    : "Created UCA's robotics association from scratch. ROS 2 & AI workshops, hackathons, public demos. Open-source culture and scientific outreach. Because learning alone is good, together is better!"
                  }
                </p>
              </div>
            </div>
          </div>

          {/* AFNEUS */}
          <div className={`p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-rose-950/40 to-pink-950/40 border-2 border-rose-500/30' : 'bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200'}`}>
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-2xl ${isDark ? 'bg-rose-500/20' : 'bg-rose-200'}`}>
                <Heart className={isDark ? 'text-rose-400' : 'text-rose-700'} size={40} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl font-black">AFNEUS</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${isDark ? 'bg-rose-500/30 text-rose-300' : 'bg-rose-200 text-rose-900'}`}>2024-now ⚖️</span>
                </div>
                <p className={`text-xl font-bold mb-3 ${isDark ? 'text-rose-400' : 'text-rose-700'}`}>
                  {lang === 'fr' ? 'Trésorier National & Lead Women in Science' : 'National Treasurer & Women in Science Lead'}
                </p>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {lang === 'fr'
                    ? "Gestion financière nationale + pilotage division Women in Science. Événements nationaux, expos, sensibilisation. Promotion de l'inclusion, l'éducation et l'innovation en STEM. L'égalité en sciences, c'est pas une option, c'est une nécessité."
                    : "National financial management + Women in Science division leadership. National events, exhibitions, awareness campaigns. Promoting inclusion, education, and innovation in STEM. Equality in science isn't optional, it's essential."
                  }
                </p>
              </div>
            </div>
          </div>

          {/* Student Representative */}
          <div className={`p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-indigo-950/40 to-violet-950/40 border-2 border-indigo-500/30' : 'bg-gradient-to-br from-indigo-50 to-violet-50 border-2 border-indigo-200'}`}>
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-2xl ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-200'}`}>
                <GraduationCap className={isDark ? 'text-indigo-400' : 'text-indigo-700'} size={40} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl font-black">{lang === 'fr' ? 'Élu Étudiant EUPI' : 'Student Rep EUPI'}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${isDark ? 'bg-indigo-500/30 text-indigo-300' : 'bg-indigo-200 text-indigo-900'}`}>2024-now 🎓</span>
                </div>
                <p className={`text-xl font-bold mb-3 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>
                  {lang === 'fr' ? 'Représentant Étudiant - Conseil de Faculté' : 'Student Representative - Faculty Council'}
                </p>
                <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {lang === 'fr'
                    ? "Défense des étudiants en robotique et ingénierie au niveau institutionnel. Amélioration pédagogique et renforcement des liens éducation-recherche. Représentation des perspectives étudiantes dans les décisions stratégiques."
                    : "Advocating for robotics and engineering students at institutional level. Pedagogical improvements and strengthening education-research ties. Representing student perspectives in strategic decisions."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="space-y-12 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black mb-4">
          <span className={isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 animate-gradient' : 'text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 animate-gradient'}>
            {lang === 'fr' ? 'Mes Créations' : 'My Creations'}
          </span>
        </h1>
        <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {lang === 'fr' ? 'Code, robots, et idées folles' : 'Code, robots, and crazy ideas'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Resilience Analysis - Ongoing Research */}
        <div className={`group p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-red-950/40 to-rose-950/40 border-2 border-red-500/30' : 'bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Trophy size={48} className={`${isDark ? 'text-red-400' : 'text-red-600'} group-hover:animate-float`} />
            <div>
              <h3 className="text-3xl font-black">{lang === 'fr' ? 'Analyse de Résilience' : 'Resilience Analysis'}</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mt-2 ${isDark ? 'bg-red-500/30 text-red-300' : 'bg-red-200 text-red-900'}`}>
                🔬 {lang === 'fr' ? 'Recherche M2 en cours' : 'M2 Research Ongoing'}
              </span>
            </div>
          </div>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr'
              ? "Extension du framework ICP certifié pour quantifier la résilience des systèmes de localisation multi-capteurs (LiDAR, UWB, IMU, vision, radar) face aux corruptions adversariales. Prédiction des erreurs de pose worst-case et certification de sécurité de cartes avant déploiement."
              : "Extending certified ICP framework to quantify resilience of multi-sensor localization systems (LiDAR, UWB, IMU, vision, radar) under adversarial corruption. Predicting worst-case pose errors and certifying map safety before deployment."
            }
          </p>
          <div className="flex gap-2 flex-wrap">
            {['ICP', 'Multi-Sensor Fusion', 'Safety Certification', 'Adversarial Robustness'].map(tag => (
              <span key={tag} className={`px-3 py-1 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-800 text-red-400' : 'bg-white text-red-700'}`}>{tag}</span>
            ))}
          </div>
        </div>

        {/* PolliNexus */}
        <div className={`group p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-yellow-950/40 to-amber-950/40 border-2 border-yellow-500/30' : 'bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl group-hover:animate-bounce">🐝</span>
            <div>
              <h3 className="text-3xl font-black">PolliNexus</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mt-2 ${isDark ? 'bg-yellow-500/30 text-yellow-300' : 'bg-yellow-200 text-yellow-900'}`}>
                🏆 {lang === 'fr' ? 'Prix Régional DD 2024' : 'Regional Sustainability Award 2024'}
              </span>
            </div>
          </div>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr'
              ? "Drone autonome intelligent de pollinisation écologique pour préservation de la biodiversité. Navigation basée vision et atterrissage de précision pour applications de conservation environnementale. Parce que les abeilles ont besoin d'aide, et que les robots peuvent être écolo."
              : "Intelligent autonomous drone for ecological pollination and biodiversity preservation. Vision-based navigation and precision landing for environmental conservation applications. Because bees need help, and robots can be eco-friendly."
            }
          </p>
          <div className="flex gap-2 flex-wrap">
            {['Vision', 'Autonomy', 'Ecology', 'Precision Landing', 'Conservation'].map(tag => (
              <span key={tag} className={`px-3 py-1 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-white text-yellow-700'}`}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Teach & Repeat */}
        <div className={`group p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border-2 border-cyan-500/30' : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Rocket size={48} className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'} group-hover:animate-float`} />
            <h3 className="text-3xl font-black">Teach & Repeat</h3>
          </div>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr'
              ? "Système de navigation énergétiquement optimisé avec planificateur de trajectoire heading-aware sur vraies pentes avec robots quadrupèdes. Enregistrement de chemin et replay autonome avec localisation et contrôle temps réel. Validation terrain extensive sur terrains variés."
              : "Energy-optimized navigation system with heading-aware trajectory planner on real slopes with quadruped robots. Path recording and autonomous replay with real-time localization and control. Extensive field validation on varied terrain conditions."
            }
          </p>
          <div className="flex gap-2 flex-wrap">
            {['ROS 2', 'C++', 'Energy Optimization', 'GNSS', 'Real-time Control'].map(tag => (
              <span key={tag} className={`px-3 py-1 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-800 text-cyan-400' : 'bg-white text-cyan-700'}`}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Robot SLAM */}
        <div className={`group p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border-2 border-indigo-500/30' : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200'}`}>
          <div className="flex items-center gap-4 mb-4">
            <MapPin size={48} className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'} group-hover:animate-float`} />
            <h3 className="text-3xl font-black">Robot SLAM Autonome</h3>
          </div>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr'
              ? "Projet de Licence : robot entièrement autonome avec SLAM temps réel et évitement d'obstacles low-cost. Intégration complète des systèmes de perception, planification et contrôle. La preuve que l'ingéniosité > budget."
              : "Bachelor's capstone: fully autonomous robot with real-time SLAM and low-cost obstacle avoidance. Complete integration of perception, planning, and control systems. Proof that ingenuity > budget."
            }
          </p>
          <div className="flex gap-2 flex-wrap">
            {['SLAM', 'Sensor Fusion', 'Autonomy', 'Low-cost', 'Real-time'].map(tag => (
              <span key={tag} className={`px-3 py-1 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-800 text-indigo-400' : 'bg-white text-indigo-700'}`}>{tag}</span>
            ))}
          </div>
        </div>

        {/* 3D Mapping Volcanic Caves */}
        <div className={`group p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border-2 border-emerald-500/30' : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Mountain size={48} className={`${isDark ? 'text-emerald-400' : 'text-emerald-600'} group-hover:animate-float`} />
            <div>
              <h3 className="text-3xl font-black">{lang === 'fr' ? 'Cartographie 3D Grottes' : '3D Cave Mapping'}</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mt-2 ${isDark ? 'bg-emerald-500/30 text-emerald-300' : 'bg-emerald-200 text-emerald-900'}`}>
                📄 ECMR 2025
              </span>
            </div>
          </div>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr'
              ? "Cartographie 3D de grottes volcaniques et environnements naturels. Publication collaborative à ECMR 2025 3D-AdViCE Workshop. Exploration d'environnements extrêmes et non structurés."
              : "3D mapping of volcanic caves and natural environments. Collaborative publication at ECMR 2025 3D-AdViCE Workshop. Exploring extreme and unstructured environments."
            }
          </p>
          <div className="flex gap-2 flex-wrap">
            {['3D Mapping', 'LiDAR', 'Volcanic Caves', 'Extreme Environments'].map(tag => (
              <span key={tag} className={`px-3 py-1 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-800 text-emerald-400' : 'bg-white text-emerald-700'}`}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Open Source */}
        <div className={`group p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-orange-950/40 to-red-950/40 border-2 border-orange-500/30' : 'bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Github size={48} className={`${isDark ? 'text-orange-400' : 'text-orange-600'} group-hover:animate-float`} />
            <h3 className="text-3xl font-black">Open Source</h3>
          </div>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr'
              ? "Contributions ROS 2, configs Docker, tutos et documentation. Partage d'outils et de connaissances pour la communauté robotique. Parce que le savoir, c'est comme le code : meilleur quand c'est partagé."
              : "ROS 2 contributions, Docker configs, tutorials and documentation. Sharing tools and knowledge with the robotics community. Because knowledge is like code: better when shared."
            }
          </p>
          <a href="https://github.com/moounally" target="_blank" rel="noopener noreferrer" 
             className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-110 ${isDark ? 'bg-orange-600 hover:bg-orange-500' : 'bg-orange-500 hover:bg-orange-600'} text-white`}>
            {lang === 'fr' ? 'Voir sur GitHub' : 'View on GitHub'} <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );

  const CVPage = () => (
    <div className="space-y-8 animate-fadeIn max-w-5xl mx-auto">
      <div className="text-center space-y-6">
        <div className="inline-block animate-float">
          <FileText size={80} className={isDark ? 'text-orange-400' : 'text-orange-600'} />
        </div>
        <h1 className="text-6xl font-black">Curriculum Vitae</h1>
        <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {lang === 'fr' ? 'Ma vie en une page (ou presque) • 22 ans • Disponible 2026' : 'My life on one page (almost) • 22 y/o • Available 2026'}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => alert(lang === 'fr' ? '📄 CV PDF bientôt disponible !' : '📄 CV PDF coming soon!')}
            className={`group px-8 py-4 rounded-2xl flex items-center gap-3 font-bold text-lg transition-all hover:scale-110 ${isDark ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500' : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'} text-white shadow-2xl`}>
            <Download size={24} className="group-hover:animate-bounce" />
            {lang === 'fr' ? 'Télécharger CV (FR)' : 'Download Resume (EN)'}
          </button>
        </div>
      </div>

      <div className={`p-10 rounded-3xl glass ${isDark ? 'bg-gray-900/50 border-2 border-orange-500/30' : 'bg-white/90 border-2 border-orange-200'}`}>
        <div className="space-y-10">
          <div className="text-center pb-8 border-b-2 border-dashed border-gray-500">
            <h2 className="text-4xl font-black mb-3">MOHAMED DHIA OUNALLY</h2>
            <p className={`text-2xl font-bold mb-4 ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600'}`}>
              {lang === 'fr' ? 'The Café Coder ☕ • Ingénieur Robotique' : 'The Café Coder ☕ • Robotics Engineer'}
            </p>
            <div className={`flex justify-center gap-6 text-lg flex-wrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className="flex items-center gap-2"><MapPin size={18} /> Clermont-Ferrand, FR</span>
              <span className="flex items-center gap-2"><Mail size={18} /> Mohamed_Dhia.OUNALLY@etu.uca.fr</span>
              <span className="flex items-center gap-2"><Sparkles size={18} /> +33 6 03 66 26 60</span>
            </div>
            <div className={`flex justify-center gap-4 mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>🌍 {lang === 'fr' ? 'Mobilité internationale' : 'International mobility'}</span>
              <span>•</span>
              <span>🎯 {lang === 'fr' ? '22 ans' : '22 years old'}</span>
              <span>•</span>
              <span>🚀 {lang === 'fr' ? 'Disponible dès 2026' : 'Available from 2026'}</span>
            </div>
          </div>

          {/* Profile Section */}
          <div className={`p-6 rounded-2xl ${isDark ? 'bg-gradient-to-r from-teal-950/30 to-cyan-950/30 border-l-4 border-teal-500' : 'bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-600'}`}>
            <h3 className={`text-2xl font-black mb-4 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              {lang === 'fr' ? '🎯 Profil' : '🎯 Profile'}
            </h3>
            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {lang === 'fr'
                ? "Ingénieur robotique spécialisé en systèmes autonomes, navigation energy-aware et perception 3D. Je conçois des robots intelligents qui équilibrent performance et durabilité, combinant théorie du contrôle rigoureuse et déploiement terrain. Mon travail fait le pont entre recherche et application, créant des systèmes qui perçoivent, décident et agissent efficacement dans des environnements complexes."
                : "Robotics engineer specializing in autonomous systems, energy-aware navigation, and 3D perception. I design intelligent robots that balance performance with sustainability, combining rigorous control theory with real-world deployment. My work bridges research and application, creating systems that perceive, decide, and act efficiently in complex environments."
              }
            </p>
          </div>

          <div>
            <h3 className={`text-3xl font-black mb-6 flex items-center gap-3 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              <GraduationCap size={36} />
              {lang === 'fr' ? 'Formation' : 'Education'}
            </h3>
            <div className="space-y-4">
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-teal-950/30 border-l-4 border-teal-500' : 'bg-teal-50 border-l-4 border-teal-600'}`}>
                <h4 className="text-xl font-bold">Master 2 - Perception & Robotique (PAR)</h4>
                <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Université Clermont Auvergne (UCA) • 2025-2026 (en cours)</p>
                <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {lang === 'fr' 
                    ? 'Contrôle avancé (MPC), fusion multi-capteurs (Kalman), perception 3D (nuages de points), machine learning pour robotique, architecture ROS 2'
                    : 'Advanced control (MPC), multi-sensor fusion (Kalman), 3D perception (point clouds), machine learning for robotics, ROS 2 architecture'
                  }
                </p>
              </div>
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-orange-950/30 border-l-4 border-orange-500' : 'bg-orange-50 border-l-4 border-orange-600'}`}>
                <h4 className="text-xl font-bold">Master 1 - Automatique & Robotique</h4>
                <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>UCA • 2024-2025</p>
                <p className={`mt-2 font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                  ⭐ Major de promotion (1/42) • Mention Très Bien • Bourse d'Excellence (2 ans)
                </p>
              </div>
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-indigo-950/30 border-l-4 border-indigo-500' : 'bg-indigo-50 border-l-4 border-indigo-600'}`}>
                <h4 className="text-xl font-bold">{lang === 'fr' ? 'Licence Sciences de l\'Ingénieur' : 'Bachelor\'s in Engineering Sciences'}</h4>
                <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>UCA • 2021-2024</p>
                <p className={`mt-2 font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  🏆 {lang === 'fr' ? 'Major • Mention Très Bien' : 'Top Ranked • High Honors'}
                </p>
              </div>
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-purple-950/30 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
                <h4 className="text-xl font-bold">{lang === 'fr' ? 'Baccalauréat Français (Scientifique)' : 'French Baccalaureate (Scientific)'}</h4>
                <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{lang === 'fr' ? 'Lycée Français en Tunisie • 2021' : 'French High School in Tunisia • 2021'}</p>
                <p className={`mt-2 font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                  🏅 {lang === 'fr' ? 'Mention Très Bien • Spé. Maths & Physique' : 'High Honors • Major in Math & Physics'}
                </p>
              </div>
            </div>
          </div>

          {/* Publications Section - 2 papers! */}
          <div>
            <h3 className={`text-3xl font-black mb-6 flex items-center gap-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              <Trophy size={36} />
              {lang === 'fr' ? 'Publications Scientifiques' : 'Scientific Publications'}
            </h3>
            <div className="space-y-4">
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-purple-950/30 border-l-4 border-purple-500' : 'bg-purple-50 border-l-4 border-purple-600'}`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${isDark ? 'bg-purple-500/30 text-purple-300' : 'bg-purple-200 text-purple-900'}`}>
                    ECMR 2025
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${isDark ? 'bg-orange-500/30 text-orange-300' : 'bg-orange-200 text-orange-900'}`}>
                    {lang === 'fr' ? '1er auteur' : 'First author'}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2">Heading-Aware Energy Prediction for Quadrupeds on Slopes</h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                  <strong>M. Ounally</strong>, C. Pierre, J. Laconte
                </p>
                <p className={`text-sm italic ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {lang === 'fr'
                    ? '3D-AdViCE Workshop, European Conference on Mobile Robots (ECMR), Padoue, Italie'
                    : '3D-AdViCE Workshop, European Conference on Mobile Robots (ECMR), Padua, Italy'
                  }
                </p>
              </div>
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-teal-950/30 border-l-4 border-teal-500' : 'bg-teal-50 border-l-4 border-teal-600'}`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${isDark ? 'bg-teal-500/30 text-teal-300' : 'bg-teal-200 text-teal-900'}`}>
                    ECMR 2025
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${isDark ? 'bg-cyan-500/30 text-cyan-300' : 'bg-cyan-200 text-cyan-900'}`}>
                    {lang === 'fr' ? 'Co-auteur' : 'Co-author'}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2">3D Mapping of Volcanic Caves and Natural Environments</h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                  W. Dubois, <strong>M. Ounally</strong>, J. Laconte
                </p>
                <p className={`text-sm italic ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {lang === 'fr'
                    ? '3D-AdViCE Workshop, European Conference on Mobile Robots (ECMR), Clermont-Ferrand, France'
                    : '3D-AdViCE Workshop, European Conference on Mobile Robots (ECMR), Clermont-Ferrand, France'
                  }
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`text-3xl font-black mb-6 flex items-center gap-3 ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
              <Code size={36} />
              {lang === 'fr' ? 'Arsenal Technique' : 'Technical Skills'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Robotique', skills: ['ROS 2 (Humble, Jazzy)', 'Gazebo', 'RViz', 'Docker', 'CI/CD', 'Git'] },
                { title: 'Programmation', skills: ['C++', 'Python', 'Bash', 'MATLAB/Simulink'] },
                { title: 'IA & Vision', skills: ['OpenCV', 'PyTorch', 'SLAM', 'Kalman', 'MPC'] },
                { title: 'CAO', skills: ['SolidWorks', 'CATIA', 'Fusion 360'] },
                { title: 'Industrie', skills: ['CAN', 'Modbus', 'GRAFCET', 'PLCs Schneider'] },
                { title: 'Langues', skills: ['🇫🇷🇹🇳 FR/AR (C2)', '🇬🇧 EN (C1)', '🇩🇪 DE (A2)'] }
              ].map((category, i) => (
                <div key={i}>
                  <h4 className="font-bold text-lg mb-3">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span key={skill} className={`px-3 py-2 rounded-xl text-sm font-medium transition-all hover:scale-110 ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-r from-yellow-950/40 to-amber-950/40 border-2 border-yellow-500/30' : 'bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200'}`}>
            <h3 className={`text-2xl font-black mb-4 flex items-center gap-3 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
              <Award size={28} />
              {lang === 'fr' ? 'Prix & Distinctions' : 'Awards & Honors'}
            </h3>
            <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <span>{lang === 'fr' ? 'Prix Régional Développement Durable 2024 (PolliNexus)' : 'Regional Sustainable Development Award 2024 (PolliNexus)'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">🎓</span>
                <span>{lang === 'fr' ? 'Bourse d\'Excellence UCA (2024-2026)' : 'UCA Excellence Scholarship (2024-2026)'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">⭐</span>
                <span>{lang === 'fr' ? 'Major de promotion M1 (1/42)' : 'Top of Class M1 (1/42)'}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xl">🏅</span>
                <span>{lang === 'fr' ? 'Baccalauréat Français Mention Très Bien (Lycée Français, Tunisie)' : 'French Baccalaureate High Honors (French High School, Tunisia)'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn">
      <div className="text-center space-y-6">
        <div className="inline-block animate-float">
          <span className="text-8xl">📡</span>
        </div>
        <h1 className="text-6xl font-black">
          <span className={isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 animate-gradient' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-purple-600 animate-gradient'}>
            {lang === 'fr' ? 'Parlons-en !' : 'Let\'s Talk!'}
          </span>
        </h1>
        <p className={`text-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {lang === 'fr' 
            ? 'Projet, collab, ou juste envie de parler robots ? Je suis tout ouïe !'
            : 'Project, collab, or just want to chat about robots? I\'m all ears!'
          }
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <a href="mailto:Mohamed_Dhia.OUNALLY@etu.uca.fr" 
           title={t.hoverMessages.email}
           className={`group p-10 rounded-3xl hover-lift text-center ${isDark ? 'bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border-2 border-cyan-500/30' : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200'}`}>
          <Mail size={64} className={`mx-auto mb-6 ${isDark ? 'text-cyan-400' : 'text-cyan-600'} group-hover:animate-bounce`} />
          <h3 className="text-2xl font-black mb-3">Email</h3>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Mohamed_Dhia.OUNALLY@etu.uca.fr</p>
          <p className={`text-sm mt-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>{t.hoverMessages.email}</p>
        </a>

        <a href="https://calendar.app.google/ifiADuHqsBjtmnLYA" target="_blank" rel="noopener noreferrer"
           className={`group p-10 rounded-3xl hover-lift text-center ${isDark ? 'bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border-2 border-emerald-500/30' : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200'}`}>
          <Calendar size={64} className={`mx-auto mb-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'} group-hover:animate-bounce`} />
          <h3 className="text-2xl font-black mb-3">{lang === 'fr' ? 'Prendre RDV' : 'Book Meeting'}</h3>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{lang === 'fr' ? 'Google Agenda' : 'Google Calendar'}</p>
          <p className={`text-sm mt-2 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{lang === 'fr' ? 'Choisissez votre créneau' : 'Pick your time slot'}</p>
        </a>

        <a href="https://teams.live.com/meet/9363630244290?p=JSw1xy1wBs8lnMQQJi" target="_blank" rel="noopener noreferrer"
           className={`group p-10 rounded-3xl hover-lift text-center ${isDark ? 'bg-gradient-to-br from-purple-950/40 to-fuchsia-950/40 border-2 border-purple-500/30' : 'bg-gradient-to-br from-purple-50 to-fuchsia-50 border-2 border-purple-200'}`}>
          <Video size={64} className={`mx-auto mb-6 ${isDark ? 'text-purple-400' : 'text-purple-600'} group-hover:animate-bounce`} />
          <h3 className="text-2xl font-black mb-3">Microsoft Teams</h3>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{lang === 'fr' ? 'Rejoindre la réunion' : 'Join the meeting'}</p>
          <p className={`text-sm mt-2 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{lang === 'fr' ? 'Visio instantanée' : 'Instant video call'}</p>
        </a>

        <a href="https://github.com/moounally" target="_blank" rel="noopener noreferrer"
           title={t.hoverMessages.github}
           className={`group p-10 rounded-3xl hover-lift text-center ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gray-700' : 'bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-gray-400'}`}>
          <Github size={64} className={`mx-auto mb-6 ${isDark ? 'text-gray-400' : 'text-gray-700'} group-hover:animate-bounce`} />
          <h3 className="text-2xl font-black mb-3">GitHub</h3>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>@moounally</p>
          <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{t.hoverMessages.github}</p>
        </a>

        <a href="https://linkedin.com/in/mohamed-dhia-ounally" target="_blank" rel="noopener noreferrer"
           title={t.hoverMessages.linkedin}
           className={`group p-10 rounded-3xl hover-lift text-center ${isDark ? 'bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border-2 border-blue-500/30' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200'}`}>
          <Linkedin size={64} className={`mx-auto mb-6 ${isDark ? 'text-blue-400' : 'text-blue-600'} group-hover:animate-bounce`} />
          <h3 className="text-2xl font-black mb-3">LinkedIn</h3>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Mohamed Dhia OUNALLY</p>
          <p className={`text-sm mt-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{t.hoverMessages.linkedin}</p>
        </a>

        {/* Hidden for now - Scholar & ResearchGate */}
        {false && (
          <>
            <a href="#" onClick={(e) => { e.preventDefault(); alert(lang === 'fr' ? '📚 Bientôt disponible sur Google Scholar !' : '📚 Coming soon on Google Scholar!'); }}
               className={`group p-10 rounded-3xl hover-lift text-center ${isDark ? 'bg-gradient-to-br from-red-950/40 to-pink-950/40 border-2 border-red-500/30' : 'bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200'}`}>
              <Globe size={64} className={`mx-auto mb-6 ${isDark ? 'text-red-400' : 'text-red-600'} group-hover:animate-bounce`} />
              <h3 className="text-2xl font-black mb-3">Google Scholar</h3>
              <p className={`text-sm mt-2 ${isDark ? 'text-red-400' : 'text-red-600'}`}>{t.hoverMessages.scholar}</p>
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert(lang === 'fr' ? '🔬 Bientôt disponible sur ResearchGate !' : '🔬 Coming soon on ResearchGate!'); }}
               className={`group p-10 rounded-3xl hover-lift text-center ${isDark ? 'bg-gradient-to-br from-teal-950/40 to-green-950/40 border-2 border-teal-500/30' : 'bg-gradient-to-br from-teal-50 to-green-50 border-2 border-teal-200'}`}>
              <Globe size={64} className={`mx-auto mb-6 ${isDark ? 'text-teal-400' : 'text-teal-600'} group-hover:animate-bounce`} />
              <h3 className="text-2xl font-black mb-3">ResearchGate</h3>
              <p className={`text-sm mt-2 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>{t.hoverMessages.researchgate}</p>
            </a>
          </>
        )}
      </div>

      <div className={`p-10 rounded-3xl text-center ${isDark ? 'bg-gradient-to-r from-orange-950/40 via-amber-950/40 to-yellow-950/40 border-2 border-orange-500/30' : 'bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 border-2 border-orange-200'}`}>
        <Zap size={48} className={`mx-auto mb-4 ${isDark ? 'text-orange-400' : 'text-orange-600'} animate-pulse`} />
        <p className="text-xl font-bold mb-2">
          {lang === 'fr' 
            ? '⚡ Réponse sous 48h max (souvent bien avant !)' 
            : '⚡ Response within 48h max (often way before!)'
          }
        </p>
        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {lang === 'fr'
            ? 'Basé à Clermont-Ferrand • Ouvert aux projets internationaux • Disponible pour stages/CDI dès 2026'
            : 'Based in Clermont-Ferrand • Open to international projects • Available for jobs from 2026'
          }
        </p>
      </div>
    </div>
  );

  const renderPage = () => {
    switch(currentPage) {
      case 'about': return <AboutPage />;
      case 'experience': return <ExperiencePage />;
      case 'projects': return <ProjectsPage />;
      case 'cv': return <CVPage />;
      case 'contact': return <ContactPage />;
      default: return null;
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${matrixMode ? 'bg-black text-green-400' : (isDark ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900')}`}>
      {/* Matrix Mode Effect */}
      {matrixMode && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i} 
              className="matrix-rain absolute text-green-400 font-mono opacity-70"
              style={{
                left: `${i * 2}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: '14px'
              }}
            >
              {['R', 'O', 'S', '2', 'C', '+', '+', 'P', 'y', '🤖', '☕', '0', '1'].map((c, j) => (
                <div key={j}>{c}</div>
              ))}
            </div>
          ))}
        </div>
      )}

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className={`text-6xl font-black animate-bounce ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
            🎉 BRAVO ! 🎉
          </div>
          {[...Array(100)].map((_, i) => (
            <div key={i} className="absolute animate-float" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 2 + 2}s`
            }}>
              {['🎉', '🎊', '⭐', '✨', '🚀', '🤖', '💫', '🌟', '☕'][Math.floor(Math.random() * 9)]}
            </div>
          ))}
        </div>
      )}

      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 glass ${scrollY > 50 || currentPage !== 'home' ? (isDark ? 'bg-gray-950/90 shadow-2xl border-b-2 border-orange-500/20' : 'bg-white/90 shadow-2xl border-b-2 border-orange-200') : ''}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Top bar with logo and controls */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} 
                    className="group font-black text-2xl md:text-3xl hover:scale-110 transition-all duration-300 flex items-center gap-2">
              <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 animate-gradient' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-purple-600 animate-gradient'}`}>
                The Café Coder
              </span>
              <span className="text-2xl animate-float">☕</span>
            </button>

            <div className="flex items-center gap-3">
              <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                      className={`px-4 py-2 rounded-xl font-black text-base transition-all duration-300 hover:scale-110 ${isDark ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500' : 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600'} text-white shadow-lg`}>
                {lang.toUpperCase()}
              </button>
              <button onClick={() => setIsDark(!isDark)}
                      className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-180 ${isDark ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' : 'bg-orange-200 text-orange-700 hover:bg-orange-300'} shadow-lg`}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Navigation buttons - ALWAYS VISIBLE */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {Object.entries(t.nav).map(([key, label]) => (
              <button key={key} 
                      onClick={() => setCurrentPage(key)}
                      className={`px-3 py-2 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 ${currentPage === key ? (isDark ? 'bg-gradient-to-r from-orange-600 to-rose-600 text-white shadow-lg' : 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg') : (isDark ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-36 md:pt-40 pb-20 px-6">
        {currentPage === 'home' ? (
          <>
            <section className="py-20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className={`absolute top-20 left-10 w-96 h-96 ${isDark ? 'bg-orange-500' : 'bg-orange-300'} rounded-full blur-3xl animate-pulse`}></div>
                <div className={`absolute bottom-20 right-10 w-96 h-96 ${isDark ? 'bg-teal-500' : 'bg-teal-300'} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
                <div className={`absolute top-1/2 left-1/2 w-96 h-96 ${isDark ? 'bg-purple-500' : 'bg-purple-300'} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '2s'}}></div>
              </div>

              <div className="max-w-6xl mx-auto relative text-center space-y-10">
                <div className="space-y-6">
                  <div className="inline-block animate-bounce">
                    <span className="text-8xl">👋</span>
                  </div>
                  <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-tight">
                    Mohamed Dhia
                    <br/>
                    <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 animate-gradient' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-purple-600 animate-gradient'}`}>
                      OUNALLY
                    </span>
                  </h1>
                  
                  <p className={`text-3xl md:text-4xl font-black ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                    {t.tagline}
                  </p>
                  
                  <p className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
                    {t.subtitle}
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.intro}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className={`inline-block px-8 py-4 rounded-full text-lg font-bold ${isDark ? 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 border-2 border-yellow-500/30' : 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-2 border-yellow-300'} animate-pulse`}>
                    {funFact || t.funFacts[0]}
                  </div>
                  <button onClick={changeFunFact} className={`text-sm font-bold px-4 py-2 rounded-full transition-all hover:scale-110 ${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-700 hover:text-yellow-600'}`}>
                    🔄 {lang === 'fr' ? 'Autre fun fact ?' : 'Another fun fact?'}
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                  <button onClick={() => setCurrentPage('projects')}
                          className={`group px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-110 ${isDark ? 'bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-500 hover:to-rose-500' : 'bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600'} text-white shadow-2xl flex items-center justify-center gap-3`}>
                    {t.cta}
                    <ChevronRight size={28} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button onClick={() => setCurrentPage('contact')}
                          className={`px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-110 flex items-center justify-center gap-3 glass ${isDark ? 'bg-gray-900/50 hover:bg-gray-800/50 backdrop-blur border-2 border-teal-500/50' : 'bg-white/50 hover:bg-gray-100/50 backdrop-blur border-2 border-teal-300'} shadow-2xl`}>
                    <Zap size={24} />
                    {t.ctaSecondary}
                  </button>
                </div>

                <div className="flex justify-center gap-6 pt-10">
                  <a href="https://github.com/moounally" target="_blank" rel="noopener noreferrer"
                     title={t.hoverMessages.github}
                     className={`p-5 rounded-2xl transition-all duration-300 hover:scale-125 hover:-rotate-6 ${isDark ? 'bg-gray-900/50 hover:bg-gray-800 border-2 border-gray-700' : 'bg-white hover:bg-gray-100 border-2 border-gray-300'} shadow-xl`}>
                    <Github size={32} />
                  </a>
                  <a href="https://linkedin.com/in/mohamed-dhia-ounally" target="_blank" rel="noopener noreferrer"
                     title={t.hoverMessages.linkedin}
                     className={`p-5 rounded-2xl transition-all duration-300 hover:scale-125 hover:rotate-6 ${isDark ? 'bg-blue-950/50 hover:bg-blue-900 border-2 border-blue-700' : 'bg-blue-50 hover:bg-blue-100 border-2 border-blue-300'} shadow-xl`}>
                    <Linkedin size={32} />
                  </a>
                  <a href="mailto:Mohamed_Dhia.OUNALLY@etu.uca.fr"
                     title={t.hoverMessages.email}
                     className={`p-5 rounded-2xl transition-all duration-300 hover:scale-125 hover:-rotate-6 ${isDark ? 'bg-red-950/50 hover:bg-red-900 border-2 border-red-700' : 'bg-red-50 hover:bg-red-100 border-2 border-red-300'} shadow-xl`}>
                    <Mail size={32} />
                  </a>
                  <button onClick={() => setCurrentPage('cv')}
                     title={t.hoverMessages.cv}
                     className={`p-5 rounded-2xl transition-all duration-300 hover:scale-125 hover:rotate-6 ${isDark ? 'bg-emerald-950/50 hover:bg-emerald-900 border-2 border-emerald-700' : 'bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-300'} shadow-xl`}>
                    <FileText size={32} />
                  </button>
                  <a href="https://calendar.app.google/ifiADuHqsBjtmnLYA" target="_blank" rel="noopener noreferrer"
                     title={lang === 'fr' ? 'Prendre RDV' : 'Book a meeting'}
                     className={`p-5 rounded-2xl transition-all duration-300 hover:scale-125 hover:-rotate-6 ${isDark ? 'bg-purple-950/50 hover:bg-purple-900 border-2 border-purple-700' : 'bg-purple-50 hover:bg-purple-100 border-2 border-purple-300'} shadow-xl`}>
                    <Calendar size={32} />
                  </a>
                </div>
              </div>
            </section>

            <section className={`py-20 rounded-3xl glass ${isDark ? 'bg-gray-900/40 border-2 border-orange-500/20' : 'bg-white/60 border-2 border-orange-200'}`}>
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {t.stats.map((stat, i) => (
                    <div key={i} className={`group text-center space-y-4 p-8 rounded-3xl transition-all duration-500 hover:scale-110 ${isDark ? 'hover:bg-gray-800/50' : 'hover:bg-white'}`}>
                      <stat.icon size={64} className={`mx-auto ${isDark ? 'text-orange-400' : 'text-orange-600'} group-hover:animate-bounce`} />
                      <div className={`text-6xl font-black ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600'}`}>
                        {stat.value}
                      </div>
                      <div className={`text-lg uppercase tracking-wider font-black ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {stat.label}
                      </div>
                      <div className={`text-sm italic ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        {stat.subtitle}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
        )}
      </main>

      <footer className={`py-10 glass ${isDark ? 'bg-gray-950/50 border-t-2 border-orange-500/20' : 'bg-white/50 border-t-2 border-orange-200'}`}>
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          {/* Download CV Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button 
              onClick={() => alert(lang === 'fr' ? '📄 CV PDF (FR) bientôt disponible !' : '📄 CV PDF (FR) coming soon!')}
              className={`px-6 py-3 rounded-xl flex items-center gap-2 font-bold transition-all hover:scale-110 ${isDark ? 'bg-orange-600/20 hover:bg-orange-600/30 text-orange-400 border-2 border-orange-500/30' : 'bg-orange-100 hover:bg-orange-200 text-orange-700 border-2 border-orange-300'}`}>
              <Download size={18} />
              CV (FR)
            </button>
            <button 
              onClick={() => alert(lang === 'fr' ? '📄 Resume PDF (EN) bientôt disponible !' : '📄 Resume PDF (EN) coming soon!')}
              className={`px-6 py-3 rounded-xl flex items-center gap-2 font-bold transition-all hover:scale-110 ${isDark ? 'bg-teal-600/20 hover:bg-teal-600/30 text-teal-400 border-2 border-teal-500/30' : 'bg-teal-100 hover:bg-teal-200 text-teal-700 border-2 border-teal-300'}`}>
              <Download size={18} />
              Resume (EN)
            </button>
          </div>

          <p className={`text-lg font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            © 2025 Mohamed Dhia OUNALLY • The Café Coder ☕
          </p>
          <p className={`text-sm italic ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            {lang === 'fr'
              ? '"Un robot intelligent sait où il va ET combien ça coûte en énergie." — M. Ounally'
              : '"A smart robot knows where it\'s going AND how much energy it costs." — M. Ounally'
            }
          </p>
          {matrixMode && (
            <p className="text-green-400 font-mono text-sm animate-pulse">
              🎮 KONAMI CODE ACTIVATED! Matrix mode ON 🎮
            </p>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;