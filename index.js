// ===== i18n dictionary =====
  const I18N = {
    es: {
      // NAV
      "nav.projects": "Proyectos",
      "nav.services": "Servicios",
      "nav.about": "Sobre mí",
      "nav.stack": "Stack",
      "nav.contact": "Contacto",
      "nav.toggleTheme": "Cambiar tema",
      "nav.toggleLang": "Cambiar idioma",
      "nav.downloadCv": "Descargar CV",

      // HERO
      "hero.title": "Hola, soy <span class='accent-name'>Diana Pasos</span>",
      "hero.lead": "Desarrolladora & diseñadora web.<br>Creo experiencias limpias, rápidas y enfocadas en el usuario.",
      "hero.cta": "Ver proyectos",

      // SECTIONS
      "sections.projects": "Proyectos",
      "sections.services": "Servicios",
      "sections.about": "Sobre mí",
      "sections.contact": "Contacto",

      // PROJECTS
      "projects.demo": "Ver demo",
      "projects.carwash.title": "Carwash",
      "projects.carwash.desc": "Sitio demo para un carwash con secciones de servicios, galería y contacto.",
      "projects.dentisalud.title": "Dentisalud",
      "projects.dentisalud.desc": "Página web para clínica dental con procedimientos, galería y contacto.",
      "projects.incecom.title": "Incecom",
      "projects.incecom.desc": "Rediseño de página institucional con secciones de cursos y servicios.",
      "projects.lamimi.title": "LaMimi",
      "projects.lamimi.desc": "E-commerce demo para collares isabelinos para gatos con carrito y blog.",
      "projects.neon.title": "Museo Neón",
      "projects.neon.desc": "One-page con galería, animaciones y secciones de eventos de museo.",

      // SERVICES
      "services.design.title": "Diseño & Frontend",
      "services.design.desc": "UI/UX, HTML, CSS, Bootstrap, animaciones,logos, mockups en figma.",
      "services.webapps.title": "Web Apps",
      "services.webapps.desc": "JS, APIs, formularios, validaciones, almacenamiento, e-comerce, aplicaciones web.",
      "services.brand.title": "Brand & Contenido",
      "services.brand.desc": "Identidad visual, microcopy, SEO básico, marca personal.",

      // ABOUT
      "about.body": "Hola soy Diana y soy diseñadora y desarrolladora web con formación técnica y una marcada vocación creativa. Antes de dedicarme al diseño web fui profesora de música y flautista, lo que me enseñó sensibilidad, disciplina y la importancia de comunicar ideas de manera clara. También trabajé en Amazon durante 4 años como investigadora de fraude, desarrollando habilidades de análisis, resolución de problemas y atención al detalle.<br><br>Hoy combino esa experiencia con mi pasión por el diseño y la tecnología, creando sitios web funcionales y visualmente atractivos. Me interesa especialmente colaborar con artistas y emprendedores, ayudándoles a llevar su identidad al entorno digital con propuestas personalizadas, útiles y humanas.",

      // CONTACT
      "contact.subtitle": "Disponible para proyectos y colaboraciones.",
      "contact.email": "✉️ Escríbeme",
      "contact.whatsapp": "WhatsApp",

      // FOOTER / ALTS
      "footer.copy": "© <span id='year'></span> Diana Pasos — Portafolio",
      "footer.backTop": "↑ Arriba",
      "footer.backTopAria": "Volver arriba",
      "alts.about": "Diana Pasos"
    },

    en: {
      // NAV
      "nav.projects": "Projects",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.stack": "Stack",
      "nav.contact": "Contact",
      "nav.toggleTheme": "Toggle theme",
      "nav.toggleLang": "Toggle language",
      "nav.downloadCv": "Download CV",

      // HERO
      "hero.title": "Hi, I’m <span class='accent-name'>Diana Pasos</span>",
      "hero.lead": "Web developer & designer.<br>I build clean, fast, user-focused experiences.",
      "hero.cta": "View projects",

      // SECTIONS
      "sections.projects": "Projects",
      "sections.services": "Services",
      "sections.about": "About",
      "sections.contact": "Contact",

      // PROJECTS
      "projects.demo": "View demo",
      "projects.carwash.title": "Carwash",
      "projects.carwash.desc": "Demo website for a carwash with services, gallery, and contact sections.",
      "projects.dentisalud.title": "Dentisalud",
      "projects.dentisalud.desc": "Dental clinic site with procedures, gallery, and contact.",
      "projects.incecom.title": "Incecom",
      "projects.incecom.desc": "Institutional site redesign with course and service sections.",
      "projects.lamimi.title": "LaMimi",
      "projects.lamimi.desc": "E-commerce demo for cat recovery collars with cart and blog.",
      "projects.neon.title": "Neon Museum",
      "projects.neon.desc": "One-page with gallery, animations, and museum events.",

      // SERVICES
      "services.design.title": "Design & Front-end",
      "services.design.desc": "UI/UX, HTML, CSS, Bootstrap, animations, logos, Figma mockups.",
      "services.webapps.title": "Web Apps",
      "services.webapps.desc": "JS, APIs, forms, validation, storage, e-commerce, web apps.",
      "services.brand.title": "Brand & Content",
      "services.brand.desc": "Visual identity, microcopy, basic SEO, personal branding.",

      // ABOUT
      "about.body": "I’m Diana, a web designer and developer with a technical background and a strong creative drive. Before web design I was a music teacher and flutist, which taught me sensitivity, discipline, and the value of communicating ideas clearly. I also worked at Amazon for 4 years in fraud investigation, developing analytical, problem-solving skills and attention to detail.<br><br>Today I combine that experience with my passion for design and technology to build functional, visually appealing websites. I love collaborating with artists and entrepreneurs, helping them bring their identity online with personalized, useful and human-centered solutions.",

      // CONTACT
      "contact.subtitle": "Available for projects and collaborations.",
      "contact.email": "✉️ Email me",
      "contact.whatsapp": "WhatsApp",

      // FOOTER / ALTS
      "footer.copy": "© <span id='year'></span> Diana Pasos — Portfolio",
      "footer.backTop": "↑ Back to top",
      "footer.backTopAria": "Back to top",
      "alts.about": "Diana Pasos"
    }
  };

  // ===== helpers =====
  function setHtmlLang(lang){
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');
  }

  function applyI18n(lang){
    const dict = I18N[lang] || I18N.es;

    // Text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const html = dict[key];
      if (typeof html === 'string') {
        // Permite innerHTML por claves que incluyen <span> (hero.title, footer.copy)
        el.innerHTML = html;
      }
    });

    // Attributes: usar data-i18n-attr="alt" (o cualquier atributo)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const attrName = el.getAttribute('data-i18n-attr'); // ej: "aria-label" o "alt"
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (typeof value === 'string') {
        el.setAttribute(attrName, value);
      }
    });

    // Botón de idioma (texto visible)
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
    }

    // WhatsApp texto prellenado según idioma
    const wa = document.querySelector('[data-i18n="contact.whatsapp"]');
    if (wa && wa.href) {
      const esMsg = "Hola%20Diana,%20vi%20tu%20portafolio%20%F0%9F%91%8B";
      const enMsg = "Hi%20Diana,%20I%20saw%20your%20portfolio%20%F0%9F%91%8B";
      wa.href = `https://wa.me/50689777836?text=${ lang === 'en' ? enMsg : esMsg }`;
    }

    // Cambia el texto del botón CV y (opcional) el archivo
    const cvBtn = document.getElementById('cvBtn');
    if (cvBtn) {
      cvBtn.setAttribute('download', '');
      cvBtn.href = (lang === 'en')
        ? 'assets/DP_web_development_en.pdf'   // <- si no existe, deja el mismo PDF
        : 'assets/DP_web_development.pdf';
    }

    // Actualiza año (mantiene el span)
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    setHtmlLang(lang);
    localStorage.setItem('lang', lang);
  }

  // ===== init idioma al cargar =====
  (function initLang(){
    const saved = localStorage.getItem('lang');
    const initial = saved || (document.documentElement.lang.startsWith('en') ? 'en' : 'es');
    applyI18n(initial);
  })();

  // ===== toggle de idioma =====
  document.getElementById('langToggle').addEventListener('click', () => {
    const current = localStorage.getItem('lang') || 'es';
    const next = current === 'es' ? 'en' : 'es';
    applyI18n(next);
  });

