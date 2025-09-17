  // === 1) DICCIONARIO ===
  const translations = {
    es: {
      nav_inicio: "Inicio",
      nav_nosotros: "Nosotros",
      nav_sedes: "Sedes",
      nav_dentistas: "Dentistas",
      nav_tratamientos: "Nuestros Tratamientos",
      nav_servicios: "Servicios",
      nav_cotice: "Cotice su procedimiento",
      nav_modelo3d: "Modelo 3D",
      nav_encuesta: "Encuesta",
      nav_galeria: "Galería",
      nav_procedimientos: "Procedimientos",
      nav_contacto: "Contacto",
      nav_formulario: "Formulario",
      nav_inscripcion: "Inscripción",
      nav_agendar: "Agendar Cita",
      hero_bienvenidos: "Bienvenidos a Dentisalud",
      hero_ofrecemos: "Ofrecemos una amplia gama de servicios dentales para garantizar tu salud bucal. Contamos con un equipo de profesionales altamente capacitados.",
      tratamientos_titulo: "Opciones de Tratamientos",
      odontologia_preventiva: "Odontología Preventiva",
      odontologia_restauradora: "Odontología Restauradora",
      emergencias_dentales: "Emergencias <br> Dentales",
      invisalign: "Invisalign",
      cosmetica_dental: "Cosmética Dental",
      blanqueamiento: "Blanqueamiento",
      mas_info: "Más Información",
      ayudandote_sonrisa: "Instalaciones modernas",
      objetivo: "En Dentisalud, combinamos experiencia y calidez humana con lo último en tecnología dental. Nuestra meta es que cada visita sea una experiencia positiva. ¿Te gustaría ver dónde empieza tu nueva sonrisa?",
      instalaciones: "Nuestra clínica",
      testimonios_titulo: "Testimonios de pacientes",
      testimonio1: "Gracias a Dentisalud ahora puedo sonreír tranquila, su servicio es increíble.",
      testimonio2: "El Dr. Aguirre es muy profesional y atento, gracias a Dentisalud por su atención.",
      testimonio3: "Antes me daba miedo ir al dentista, desde que conocí Dentisalud mi vida cambió.",
      testimonio4: "Muy satisfecho con la clínica Dentisalud, muchas gracias!",
      testimonio5: "Atienden bien, saben escuchar las sugerencias de los pacientes, son muy profesionales.",
      sonrisa_tarjeta: "Tu sonrisa es nuestra mejor tarjeta de presentación",
      nuestros_dentistas: "Nuestros Dentistas",
      pacientes_satisfechos: "Pacientes satisfechos en Dentisalud",
      limpiezas_2024: "Limpiezas dentales en 2024",
      sonrisas_invisalign: "Sonrisas perfectas con Invisalign",
      sonrisas_felices: "Sonrisas felices",
      clientes_satisfechos: "Clientes satisfechos",
      todos_derechos: "© 2024 Todos los derechos reservados | Dentisalud",

      // Extras para accesibilidad/labels del nav y botones
      nav_principal: "Navegación principal",
      abrir_menu: "Abrir menú",
      whatsapp_label: "Chatear por WhatsApp con Dentisalud",
      cerrar_video: "Cerrar video",
      cerrar_imagen: "Cerrar imagen ampliada"
    },
    en: {
      nav_inicio: "Home",
      nav_nosotros: "About Us",
      nav_sedes: "Locations",
      nav_dentistas: "Dentists",
      nav_tratamientos: "Our Treatments",
      nav_servicios: "Services",
      nav_cotice: "Get a Quote",
      nav_modelo3d: "3D Model",
      nav_encuesta: "Survey",
      nav_galeria: "Gallery",
      nav_procedimientos: "Procedures",
      nav_contacto: "Contact",
      nav_formulario: "Form",
      nav_inscripcion: "Sign Up",
      nav_agendar: "Schedule Appointment",
      hero_bienvenidos: "Welcome to Dentisalud",
      hero_ofrecemos: "We offer a wide range of dental services to ensure your oral health. Our team of highly skilled professionals is ready to assist you.",
      tratamientos_titulo: "Treatment Options",
      odontologia_preventiva: "Preventive Dentistry",
      odontologia_restauradora: "Restorative Dentistry",
      emergencias_dentales: "Dental <br> Emergencies",
      invisalign: "Invisalign",
      cosmetica_dental: "Cosmetic Dentistry",
      blanqueamiento: "Whitening",
      mas_info: "More Information",
      ayudandote_sonrisa: "Modern Facilities",
      objetivo: "At Dentisalud, we combine experience and human warmth with the latest in dental technology. Our goal is to make every visit a positive experience. Would you like to see where your new smile begins?",
      instalaciones: "Our clinic",
      testimonios_titulo: "Patient Testimonials",
      testimonio1: "Thanks to Dentisalud I can now smile peacefully, their service is incredible.",
      testimonio2: "Dr. Aguirre is very professional and attentive, thank you Dentisalud for your care.",
      testimonio3: "I used to be afraid of going to the dentist, since I met Dentisalud my life has changed.",
      testimonio4: "Very satisfied with the Dentisalud clinic, thank you very much!",
      testimonio5: "They attend well, they know how to listen to patients' suggestions, they are very professional.",
      sonrisa_tarjeta: "Your smile is our best business card",
      nuestros_dentistas: "Our Dentists",
      pacientes_satisfechos: "Satisfied Patients at Dentisalud",
      limpiezas_2024: "Dental Cleanings in 2024",
      sonrisas_invisalign: "Perfect Smiles with Invisalign",
      sonrisas_felices: "Happy Smiles",
      clientes_satisfechos: "Satisfied Clients",
      todos_derechos: "© 2024 All rights reserved | Dentisalud",

      // Extras para accesibilidad/labels del nav y botones
      nav_principal: "Main navigation",
      abrir_menu: "Open menu",
      whatsapp_label: "Chat on WhatsApp with Dentisalud",
      cerrar_video: "Close video",
      cerrar_imagen: "Close enlarged image"
    }
  };

  // === 2) Atributos soportados ===
  const SUPPORTED_ATTRS = ["aria-label", "placeholder", "title", "value", "alt"];

  // === 3) Aplicar traducciones ===
  function applyTranslations(lang) {
    const dict = translations[lang] || {};

    // Texto/HTML interno
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      const txt = dict[key];
      if (typeof txt !== "undefined") {
        // Usamos innerHTML para respetar posibles <br> en los textos
        el.innerHTML = txt;
      }
    });

    // Atributos (aria-label, placeholder, etc.)
    SUPPORTED_ATTRS.forEach(attr => {
      document.querySelectorAll(`[data-translate-${attr}]`).forEach(el => {
        const key = el.getAttribute(`data-translate-${attr}`);
        const txt = dict[key];
        if (typeof txt !== "undefined") {
          if (attr === "value" && "value" in el) el.value = txt; // inputs/botones
          el.setAttribute(attr, txt);
        }
      });
    });

    document.documentElement.lang = lang;
  }

  // === 4) Cambiar idioma (toggle del switch) ===
  function changeLanguage() {
    const current = localStorage.getItem("lang") || document.documentElement.lang || "es";
    const next = current === "es" ? "en" : "es";
    localStorage.setItem("lang", next);

    const chk = document.getElementById("languageSwitch");
    if (chk) chk.checked = (next === "en");

    applyTranslations(next);
  }

  // Exponer global para el onclick del switch
  window.changeLanguage = changeLanguage;

  // === 5) Inicializar al cargar ===
  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("lang") || document.documentElement.lang || "es";
    document.documentElement.lang = saved;

    const chk = document.getElementById("languageSwitch");
    if (chk) chk.checked = (saved === "en");

    applyTranslations(saved);
  });

