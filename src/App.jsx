import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Calendar, Video, FileText, ExternalLink, Zap, Rocket, Brain, Code, MapPin, Users, Coffee, Mountain, Cpu, Heart, Briefcase, GraduationCap, Download, ChevronRight, Sparkles, Trophy, BookOpen, Target, Flame, Menu, X } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setMobileMenuOpen(false);
    };
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    
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
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

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
      tagline: "Ingénieur robotique en devenir",
      subtitle: "Je donne vie aux robots qui marchent en pente",
      intro: "M2 Perception & Robotique @ UCA • Obsédé par l'efficacité énergétique des systèmes autonomes • Entre lignes de code ROS 2 et sommets de montagne, je construis l'avenir de la robotique mobile.",
      cta: "Découvrir mes projets",
      ctaSecondary: "Parlons robot !",
      funFacts: [
        "🎯 J'ai publié avant d'avoir mon diplôme (oui, c'est légal)",
        "⚡ Mon robot consomme moins qu'une ampoule LED",
        "🏔️ Je code mieux après 10km de trail",
        "🤖 J'ai nommé mon robot 'Voltaire' (parce qu'il est très Énergétique)",
        "☕ Record personnel : 7 cafés en une journée de debug"
      ],
      stats: [
        { value: "1+", label: "Publications", subtitle: "et ce n'est que le début", icon: FileText },
        { value: "500h+", label: "Heures terrain", subtitle: "dans la boue et la gloire", icon: Mountain },
        { value: "42", label: "Robots croisés", subtitle: "vivants ou presque", icon: Cpu }
      ],
      hoverMessages: {
        github: "Mon code en liberté",
        linkedin: "Version corporate de moi",
        email: "Je réponds vite, promis",
        cv: "Monlife en PDF"
      }
    },
    en: {
      nav: { home: 'Home', about: 'About', experience: 'Journey', projects: 'Projects', cv: 'CV', contact: 'Contact' },
      tagline: "Robotics Engineer in the making",
      subtitle: "I bring life to slope-walking robots",
      intro: "M2 Perception & Robotics @ UCA • Obsessed with energy efficiency of autonomous systems • Between ROS 2 code lines and mountain peaks, I'm building the future of mobile robotics.",
      cta: "Explore my projects",
      ctaSecondary: "Let's talk robots!",
      funFacts: [
        "🎯 Published before graduating (yes, it's legal)",
        "⚡ My robot uses less power than an LED bulb",
        "🏔️ I code better after a 10km trail run",
        "🤖 Named my robot 'Voltaire' (pun intended)",
        "☕ Personal record: 7 coffees during one debug session"
      ],
      stats: [
        { value: "1+", label: "Publications", subtitle: "just getting started", icon: FileText },
        { value: "500h+", label: "Field hours", subtitle: "mud and glory", icon: Mountain },
        { value: "42", label: "Robots met", subtitle: "alive or almost", icon: Cpu }
      ],
      hoverMessages: {
        github: "My code in the wild",
        linkedin: "Corporate version of me",
        email: "I reply fast, promise",
        cv: "My life in PDF"
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
          {lang === 'fr' ? 'Étudiant, chercheur en devenir, et dresseur de robots' : 'Student, researcher-to-be, and robot tamer'}
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
              ? "Master 2 PAR à Clermont-Ferrand. Je transforme des équations en robots qui marchent. Passionné par l'intersection entre physique, IA et efficacité énergétique. Mon crédo : un robot intelligent sait où il va ET combien ça coûte en énergie."
              : "Master 2 PAR in Clermont-Ferrand. I turn equations into walking robots. Passionate about the intersection of physics, AI and energy efficiency. My motto: a smart robot knows where it's going AND how much energy it costs."
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
              ? "Créer des robots qui comprennent vraiment leur environnement. Mon truc ? L'optimisation énergétique sur terrains complexes. Genre faire qu'un quadrupède sache exactement où poser ses pattes pour grimper une pente sans vider sa batterie."
              : "Creating robots that truly understand their environment. My thing? Energy optimization on complex terrains. Like making a quadruped know exactly where to place its paws to climb a slope without draining its battery."
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
            { icon: '🎓', title: 'Transmission', desc: lang === 'fr' ? '50h/semestre de tutorat. Voir les yeux s\'illuminer, ça n\'a pas de prix' : '50h/semester tutoring. Seeing eyes light up, priceless' },
            { icon: '🌍', title: 'Multilinguisme', desc: lang === 'fr' ? 'FR/EN/DE. Parce que les idées n\'ont pas de frontières' : 'FR/EN/DE. Because ideas have no borders' }
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-2xl transition-all hover:scale-110 ${isDark ? 'bg-gray-900/30' : 'bg-white/50'}`}>
              <div className="text-3xl mb-2">{item.icon}</div>
              <h4 className="font-bold text-lg mb-2">{item.title}</h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={`text-center p-10 rounded-3xl ${isDark ? 'bg-gradient-to-r from-pink-950/40 via-purple-950/40 to-indigo-950/40 border-2 border-pink-500/30' : 'bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 border-2 border-pink-200'}`}>
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
          <div className={`p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border-2 border-emerald-500/30' : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200'}`}>
            <div className="flex items-start gap-6">
              <div className={`p-4 rounded-2xl ${isDark ? 'bg-emerald-500/20' : 'bg-emerald-200'} animate-pulse-glow`}>
                <Cpu className={isDark ? 'text-emerald-400' : 'text-emerald-700'} size={40} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-3xl font-black">INRAE - TSCF Lab</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${isDark ? 'bg-emerald-500/30 text-emerald-300' : 'bg-emerald-200 text-emerald-900'}`}>2025 🔥</span>
                </div>
                <p className={`text-xl font-bold mb-3 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  {lang === 'fr' ? 'Stage Recherche - Robotique Autonome' : 'Research Intern - Autonomous Robotics'}
                </p>
                <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {lang === 'fr' 
                    ? "Premier framework ROS 2 natif pour Unitree B1. Modèle énergétique avec prise en compte de l'orientation sur pentes. Résultat ? Publication à ECMR 2025 ! (et un robot qui ne tombe plus)"
                    : "First native ROS 2 framework for Unitree B1. Heading-aware energy model on slopes. Result? ECMR 2025 publication! (and a robot that doesn't fall anymore)"
                  }
                </p>
                <div className="flex flex-wrap gap-2">
                  {['ROS 2', 'Docker', 'C++', 'GNSS', 'Field Tests'].map(tech => (
                    <span key={tech} className={`px-4 py-2 rounded-xl font-medium ${isDark ? 'bg-gray-800 text-emerald-400' : 'bg-white text-emerald-700'} border-2 ${isDark ? 'border-emerald-500/30' : 'border-emerald-300'}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

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
                <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {lang === 'fr'
                    ? "Création de l'asso robotique de l'UCA. Ateliers ROS 2, hackathons, démos. Parce qu'apprendre seul c'est bien, ensemble c'est mieux. Et plus marrant !"
                    : "Created UCA's robotics association. ROS 2 workshops, hackathons, demos. Because learning alone is good, together is better. And more fun!"
                  }
                </p>
              </div>
            </div>
          </div>

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
                    ? "Gestion financière nationale + pilotage Women in Science. Événements, expos, sensibilisation. L'égalité en sciences, c'est pas une option, c'est une nécessité."
                    : "National financial management + Women in Science leadership. Events, exhibitions, awareness. Equality in science isn't optional, it's essential."
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
        <div className={`group p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-yellow-950/40 to-amber-950/40 border-2 border-yellow-500/30' : 'bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200'}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl group-hover:animate-bounce">🐝</span>
            <div>
              <h3 className="text-3xl font-black">PolliNexus</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold mt-2 ${isDark ? 'bg-yellow-500/30 text-yellow-300' : 'bg-yellow-200 text-yellow-900'}`}>
                🏆 {lang === 'fr' ? 'Prix Régional DD 2024' : 'Regional Award 2024'}
              </span>
            </div>
          </div>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr'
              ? "Drone autonome de pollinisation. Parce que les abeilles ont besoin d'aide, et que les robots peuvent être écolo. Résultat : un prix et des fleurs contentes."
              : "Autonomous pollination drone. Because bees need help, and robots can be eco-friendly. Result: an award and happy flowers."
            }
          </p>
          <div className="flex gap-2 flex-wrap">
            {['Vision', 'Autonomy', 'Ecology'].map(tag => (
              <span key={tag} className={`px-3 py-1 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-800 text-yellow-400' : 'bg-white text-yellow-700'}`}>{tag}</span>
            ))}
          </div>
        </div>

        <div className={`group p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-cyan-950/40 to-blue-950/40 border-2 border-cyan-500/30' : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Rocket size={48} className={`${isDark ? 'text-cyan-400' : 'text-cyan-600'} group-hover:animate-float`} />
            <h3 className="text-3xl font-black">Teach & Repeat</h3>
          </div>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr'
              ? "Navigation énergétiquement optimisée. Le robot apprend un trajet, puis le refait en mode éco. Genre un GPS qui pense à ta batterie."
              : "Energy-optimized navigation. Robot learns a path, then repeats it in eco mode. Like a GPS that thinks about your battery."
            }
          </p>
          <div className="flex gap-2 flex-wrap">
            {['ROS 2', 'C++', 'Energy', 'GNSS'].map(tag => (
              <span key={tag} className={`px-3 py-1 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-800 text-cyan-400' : 'bg-white text-cyan-700'}`}>{tag}</span>
            ))}
          </div>
        </div>

        <div className={`group p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-indigo-950/40 to-purple-950/40 border-2 border-indigo-500/30' : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200'}`}>
          <div className="flex items-center gap-4 mb-4">
            <MapPin size={48} className={`${isDark ? 'text-indigo-400' : 'text-indigo-600'} group-hover:animate-float`} />
            <h3 className="text-3xl font-black">Robot SLAM</h3>
          </div>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr'
              ? "Projet de Licence : robot autonome avec SLAM temps réel. Low-cost, haute performance. La preuve que l'ingéniosité > budget."
              : "Bachelor's project: autonomous robot with real-time SLAM. Low-cost, high performance. Proof that ingenuity > budget."
            }
          </p>
          <div className="flex gap-2 flex-wrap">
            {['SLAM', 'Fusion', 'Autonomy'].map(tag => (
              <span key={tag} className={`px-3 py-1 rounded-lg text-sm font-medium ${isDark ? 'bg-gray-800 text-indigo-400' : 'bg-white text-indigo-700'}`}>{tag}</span>
            ))}
          </div>
        </div>

        <div className={`group p-8 rounded-3xl hover-lift ${isDark ? 'bg-gradient-to-br from-orange-950/40 to-red-950/40 border-2 border-orange-500/30' : 'bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200'}`}>
          <div className="flex items-center gap-4 mb-4">
            <Github size={48} className={`${isDark ? 'text-orange-400' : 'text-orange-600'} group-hover:animate-float`} />
            <h3 className="text-3xl font-black">Open Source</h3>
          </div>
          <p className={`text-lg leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {lang === 'fr'
              ? "Contributions ROS 2, configs Docker, tutos. Parce que le savoir, c'est comme le code : meilleur quand c'est partagé."
              : "ROS 2 contributions, Docker configs, tutorials. Because knowledge is like code: better when shared."
            }
          </p>
          <a href="https://github.com/mohamedounally" target="_blank" rel="noopener noreferrer" 
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
          {lang === 'fr' ? 'Ma vie en une page (ou presque)' : 'My life on one page (almost)'}
        </p>
        <div className="flex justify-center gap-4">
          <button className={`group px-8 py-4 rounded-2xl flex items-center gap-3 font-bold text-lg transition-all hover:scale-110 ${isDark ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500' : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600'} text-white shadow-2xl`}>
            <Download size={24} className="group-hover:animate-bounce" />
            {lang === 'fr' ? 'Télécharger PDF' : 'Download PDF'}
          </button>
        </div>
      </div>

      <div className={`p-10 rounded-3xl glass ${isDark ? 'bg-gray-900/50 border-2 border-orange-500/30' : 'bg-white/90 border-2 border-orange-200'}`}>
        <div className="space-y-10">
          <div className="text-center pb-8 border-b-2 border-dashed border-gray-500">
            <h2 className="text-4xl font-black mb-3">MOHAMED DHIA OUNALLY</h2>
            <p className={`text-2xl font-bold mb-4 ${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-600'}`}>
              {lang === 'fr' ? 'Ingénieur Robotique en Formation' : 'Robotics Engineer in Training'}
            </p>
            <div className={`flex justify-center gap-6 text-lg flex-wrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className="flex items-center gap-2"><MapPin size={18} /> Clermont-Ferrand, FR</span>
              <span className="flex items-center gap-2"><Mail size={18} /> Mohamed_Dhia.OUNALLY@etu.uca.fr</span>
              <span className="flex items-center gap-2"><Sparkles size={18} /> {lang === 'fr' ? 'Mobilité internationale' : 'International mobility'}</span>
            </div>
          </div>

          <div>
            <h3 className={`text-3xl font-black mb-6 flex items-center gap-3 ${isDark ? 'text-teal-400' : 'text-teal-600'}`}>
              <GraduationCap size={36} />
              {lang === 'fr' ? 'Formation' : 'Education'}
            </h3>
            <div className="space-y-4">
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-teal-950/30 border-l-4 border-teal-500' : 'bg-teal-50 border-l-4 border-teal-600'}`}>
                <h4 className="text-xl font-bold">Master 2 - Perception & Robotique (PAR)</h4>
                <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Université Clermont Auvergne • 2024-2026</p>
                <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {lang === 'fr' ? 'Autonomie robotique, perception 3D, navigation énergétique' : 'Robotic autonomy, 3D perception, energy-aware navigation'}
                </p>
              </div>
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-orange-950/30 border-l-4 border-orange-500' : 'bg-orange-50 border-l-4 border-orange-600'}`}>
                <h4 className="text-xl font-bold">Master 1 - Automatique & Robotique</h4>
                <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>UCA • 2023-2024</p>
                <p className={`mt-2 font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'}`}>
                  ⭐ Major de promotion (1/42)
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`text-3xl font-black mb-6 flex items-center gap-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
              <Code size={36} />
              {lang === 'fr' ? 'Arsenal Technique' : 'Technical Arsenal'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Robotique', skills: ['ROS 2', 'C++', 'Python', 'Docker', 'Gazebo'] },
                { title: 'IA & Vision', skills: ['OpenCV', 'PyTorch', 'SLAM', 'LiDAR'] },
                { title: 'Langues', skills: ['🇫🇷 FR (C2)', '🇬🇧 EN (C1)', '🇩🇪 DE (A2)'] }
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

          <div className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-r from-indigo-950/40 to-purple-950/40 border-2 border-indigo-500/30' : 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200'}`}>
            <h3 className={`text-2xl font-black mb-4 flex items-center gap-3 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
              <Trophy size={28} />
              {lang === 'fr' ? 'Publication Phare' : 'Featured Publication'}
            </h3>
            <p className="font-bold text-lg mb-2">Heading-Aware Energy Prediction for Quadrupeds on Slopes</p>
            <p className={`mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <strong>M. Ounally</strong>, C. Pierre, J. Laconte • ECMR 2025 - 3D-AdViCE Workshop
            </p>
            <p className={`text-sm ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
              {lang === 'fr' ? '🎯 Premier auteur : conception, implémentation, validation' : '🎯 First author: design, implementation, validation'}
            </p>
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

        <a href="https://calendar.google.com/calendar/appointments" target="_blank" rel="noopener noreferrer"
           className={`group p-10 rounded-3xl hover-lift text-center ${isDark ? 'bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border-2 border-emerald-500/30' : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200'}`}>
          <Calendar size={64} className={`mx-auto mb-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'} group-hover:animate-bounce`} />
          <h3 className="text-2xl font-black mb-3">{lang === 'fr' ? 'Prendre RDV' : 'Book Meeting'}</h3>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{lang === 'fr' ? 'Mes disponibilités' : 'My availability'}</p>
        </a>

        <a href="https://teams.microsoft.com/l/meetup-join" target="_blank" rel="noopener noreferrer"
           className={`group p-10 rounded-3xl hover-lift text-center ${isDark ? 'bg-gradient-to-br from-purple-950/40 to-fuchsia-950/40 border-2 border-purple-500/30' : 'bg-gradient-to-br from-purple-50 to-fuchsia-50 border-2 border-purple-200'}`}>
          <Video size={64} className={`mx-auto mb-6 ${isDark ? 'text-purple-400' : 'text-purple-600'} group-hover:animate-bounce`} />
          <h3 className="text-2xl font-black mb-3">Teams</h3>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{lang === 'fr' ? 'Visio instantanée' : 'Instant video call'}</p>
        </a>

        <a href="https://github.com/mohamedounally" target="_blank" rel="noopener noreferrer"
           title={t.hoverMessages.github}
           className={`group p-10 rounded-3xl hover-lift text-center ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-gray-700' : 'bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-gray-400'}`}>
          <Github size={64} className={`mx-auto mb-6 ${isDark ? 'text-gray-400' : 'text-gray-700'} group-hover:animate-bounce`} />
          <h3 className="text-2xl font-black mb-3">GitHub</h3>
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>@mohamedounally</p>
          <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>{t.hoverMessages.github}</p>
        </a>
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
    <div className={`min-h-screen transition-all duration-700 ${isDark ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100' : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900'}`}>
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
              {['🎉', '🎊', '⭐', '✨', '🚀', '🤖', '💫', '🌟'][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>
      )}

      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 glass ${scrollY > 50 || currentPage !== 'home' ? (isDark ? 'bg-gray-950/90 shadow-2xl border-b-2 border-orange-500/20' : 'bg-white/90 shadow-2xl border-b-2 border-orange-200') : ''}`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Top bar with logo and controls */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} 
                    className="group font-black text-3xl hover:scale-110 transition-all duration-300">
              <span className={`${isDark ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-purple-400 animate-gradient' : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-purple-600 animate-gradient'}`}>
                Dhia
              </span>
              <span className={isDark ? 'text-teal-400' : 'text-teal-600'}>.</span>
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

      <main className="pt-28 pb-20 px-6">
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
                  <a href="https://github.com/mohamedounally" target="_blank" rel="noopener noreferrer"
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
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <p className={`text-lg font-bold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            © 2025 Mohamed Dhia OUNALLY · {lang === 'fr' ? 'Codé avec' : 'Coded with'} ❤️ {lang === 'fr' ? 'et' : 'and'} ☕
          </p>
          <p className={`text-sm italic ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            {lang === 'fr'
              ? '"Dans 20 ans, vous regretterez davantage les choses que vous n\'avez pas faites." — Mark Twain'
              : '"In 20 years, you\'ll regret more the things you didn\'t do." — Mark Twain'
            }
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;