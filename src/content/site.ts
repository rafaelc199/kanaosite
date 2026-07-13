// =====================================================================
// CONTEÚDO DO SITE — edite este ficheiro para alterar textos e projetos
// =====================================================================
// Cada projeto tem versões PT e EN. As imagens podem ser URLs externos
// ou caminhos para ficheiros em /public (ex: "/images/projeto1/1.jpg").
// O primeiro item de `images` é usado como capa.
// =====================================================================

export type Lang = "pt" | "en";

// Casa da Tapada
import tapadaHall01 from "../assets/tapada-hall-01.json";
import tapadaOpen4 from "../assets/tapada-openspace-04.json";
import tapadaCoz1 from "../assets/tapada-cozinha-01.json";
import tapadaCoz4 from "../assets/tapada-cozinha-04.json";
import tapadaSuite from "../assets/tapada-suite-01.json";
import tapadaMF from "../assets/tapada-mf-02.json";
import tapadaPE from "../assets/tapada-pe-02.json";

// Sampaio Apartments (mesmos ficheiros antes em Casa da Tapada)
import sampaioHall from "../assets/tapada-hall.json";
import sampaioOpen1 from "../assets/tapada-openspace-01.json";
import sampaioOpen2 from "../assets/tapada-openspace-02.json";
import sampaioOpen3 from "../assets/tapada-openspace-03.json";
import sampaioQ1 from "../assets/tapada-quarto-i.json";
import sampaioQ1b from "../assets/tapada-quarto-i-2.json";
import sampaioQ2 from "../assets/tapada-quarto-ii.json";
import sampaioQ2b from "../assets/tapada-quarto-ii-2.json";
import sampaioQ3 from "../assets/tapada-quarto-iii.json";

// Casa SN

// São Paio Apartments
import saopaio01 from "../assets/saopaio-img_4100.json";
import saopaio02 from "../assets/saopaio-img_4097.json";
import saopaio03 from "../assets/saopaio-img_4099.json";
import saopaio04 from "../assets/saopaio-img_4065.json";
import saopaio05 from "../assets/saopaio-img_4090.json";
import saopaio06 from "../assets/saopaio-img_4066.json";
import saopaio07 from "../assets/saopaio-img_4103.json";
import saopaio08 from "../assets/saopaio-img_4068.json";
import saopaio09 from "../assets/saopaio-511e9e38-6f57-4654-9c03-338cd54b6410.json";
import saopaio10 from "../assets/saopaio-0128292c-ce62-41f9-b43a-cb22366f7b74.json";

export const brand = {
  name: "Kanao",
  tagline: {
    pt: "Estúdio de Design de Interiores",
    en: "Interior Design Studio",
  },
  email: "kanao.interiordesign@gmail.com",
  phone: "+351 914 448 002",
  address: {
    pt: "Marco de Canaveses, Porto, Portugal",
    en: "Marco de Canaveses, Porto, Portugal",
  },
  instagram: "https://instagram.com/kanao.interiordesign",
};

export const nav = {
  home: { pt: "Início", en: "Home" },
  projects: { pt: "Portfólio", en: "Portfolio" },
  about: { pt: "Sobre", en: "About" },
  contact: { pt: "Contacto", en: "Contact" },
};

export const home = {
  heroTitle: {
    pt: "Espaços pensados\npara serem vividos.",
    en: "Spaces designed\nto be lived in.",
  },
  heroSubtitle: {
    pt: "Design de interiores residencial e comercial. Da concepção à obra.",
    en: "Residential and commercial interior design. From concept to construction.",
  },
  intro: {
    pt: "A Kanao é um estúdio dedicado ao design de interiores. Trabalhamos cada projeto como uma narrativa única, equilibrando luz, materialidade e proporção para criar ambientes intemporais.",
    en: "Kanao is a studio dedicated to interior design. We approach each project as a unique narrative, balancing light, materiality and proportion to create timeless environments.",
  },
  ctaProjects: { pt: "Ver projetos", en: "View projects" },
  ctaContact: { pt: "Contactar", en: "Get in touch" },
};

export const phases = {
  title: { pt: "O nosso processo", en: "Our process" },
  subtitle: {
    pt: "Quatro fases que orientam cada projeto, do primeiro encontro à entrega final.",
    en: "Four phases that guide every project, from the first meeting to final handover.",
  },
  items: [
    {
      label: { pt: "Fase 1", en: "Phase 1" },
      title: { pt: "Escuta", en: "Listening" },
      body: {
        pt: "O primeiro passo é conhecer o cliente e compreender as suas necessidades e expectativas. Visitamos o espaço, analisamos as particularidades e identificamos os detalhes essenciais ao desenvolvimento do projeto.",
        en: "The first step is getting to know the client and understanding their needs. We visit the space, analyse its particularities and identify the essential details for the project.",
      },
    },
    {
      label: { pt: "Fase 2", en: "Phase 2" },
      title: { pt: "Conceito", en: "Concept" },
      body: {
        pt: "Criamos a base do projeto, definindo o layout e a organização espacial. Estudamos a relação entre ambientes e desenvolvemos um primeiro mood board com propostas de materiais, cores e atmosfera.",
        en: "We create the foundation of the project, defining the layout and spatial organisation, and develop a first mood board with materials, colours and atmosphere.",
      },
    },
    {
      label: { pt: "Fase 3", en: "Phase 3" },
      title: { pt: "Visualização 3D", en: "3D Visualisation" },
      body: {
        pt: "Levamos o cliente para uma experiência imersiva através de percursos virtuais em 3D, permitindo visualizar com clareza materiais, cores, texturas e o conceito adotado.",
        en: "We take the client into an immersive 3D virtual walkthrough, allowing a clear visualisation of materials, colours, textures and the overall concept.",
      },
    },
    {
      label: { pt: "Fase 4", en: "Phase 4" },
      title: { pt: "Obra", en: "Construction" },
      body: {
        pt: "Garantimos que a obra é executada de forma fiel ao projeto idealizado, acompanhando cada detalhe com rigor — da escolha dos acabamentos ao acompanhamento diário em obra.",
        en: "We ensure the construction is executed faithfully to the design, following every detail with rigour — from final finishes to daily on-site supervision.",
      },
    },
  ],
};

export const about = {
  title: { pt: "Estúdio", en: "Studio" },
  body: {
    pt: [
      "Fundado em 2024, o estúdio Kanao nasce do desejo de criar interiores que perdurem — espaços onde a forma serve o quotidiano e a matéria conta uma história.",
      "Cada projeto começa numa escuta atenta. Procuramos compreender o lugar, as rotinas e as aspirações de quem o vai habitar antes de propor qualquer linha.",
      "Acompanhamos todo o processo, do primeiro esboço à entrega da chave, com uma equipa multidisciplinar e uma rede de artesãos e fornecedores de confiança.",
    ],
    en: [
      "Founded in 2024, Kanao was born from the desire to create interiors that endure — spaces where form serves daily life and matter tells a story.",
      "Each project begins with careful listening. We seek to understand the place, the routines and the aspirations of those who will inhabit it before proposing any line.",
      "We follow the entire process, from the first sketch to the handover, with a multidisciplinary team and a network of trusted artisans and suppliers.",
    ],
  },
};

export const services = {
  title: { pt: "Serviços", en: "Services" },
  intro: {
    pt: "Projetamos para casas, escritórios, hotelaria e retalho. Apresentamos abaixo as principais áreas de actuação.",
    en: "We design for homes, offices, hospitality and retail. Below are our main areas of practice.",
  },
  items: [
    {
      title: { pt: "Design de Interiores", en: "Interior Design" },
      body: {
        pt: "Conceito, plantas, materiais, mobiliário e iluminação para espaços residenciais e comerciais.",
        en: "Concept, plans, materials, furniture and lighting for residential and commercial spaces.",
      },
    },
    {
      title: { pt: "Remodelação Integral", en: "Full Renovation" },
      body: {
        pt: "Coordenação completa de obra, do projeto técnico à gestão de empreitada chave-na-mão.",
        en: "Complete renovation coordination, from technical design to turnkey project management.",
      },
    },
    {
      title: { pt: "Consultoria & Styling", en: "Consulting & Styling" },
      body: {
        pt: "Sessões de consultoria pontual, styling para fotografia e curadoria de peças.",
        en: "One-off consulting sessions, photography styling and curation of pieces.",
      },
    },
    {
      title: { pt: "Mobiliário à Medida", en: "Bespoke Furniture" },
      body: {
        pt: "Desenho e produção de mobiliário desenhado especificamente para cada projeto.",
        en: "Design and production of furniture made specifically for each project.",
      },
    },
  ],
};

export const contact = {
  title: { pt: "Contacto", en: "Contact" },
  intro: {
    pt: "Tem um projeto em mente? Conte-nos sobre o seu espaço e responderemos em breve.",
    en: "Have a project in mind? Tell us about your space and we'll get back to you shortly.",
  },
  form: {
    name: { pt: "Nome", en: "Name" },
    email: { pt: "Email", en: "Email" },
    message: { pt: "Mensagem", en: "Message" },
    send: { pt: "Enviar", en: "Send" },
    sent: { pt: "Obrigado. Responderemos em breve.", en: "Thank you. We'll be in touch soon." },
  },
};

// =====================================================================
// PROJETOS — adicione/remova/edite à vontade.
// Para usar as suas fotos: coloque-as em /public/projects/<slug>/ e
// referencie como "/projects/<slug>/01.jpg"
// =====================================================================

export type Project = {
  slug: string;
  title: { pt: string; en: string };
  location: { pt: string; en: string };
  year: string;
  category: { pt: string; en: string };
  description: { pt: string; en: string };
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "vg",
    title: { pt: "Casa VG", en: "Casa VG" },
    location: { pt: "Portugal", en: "Portugal" },
    year: "2024",
    category: { pt: "Residencial", en: "Residential" },
    description: {
      pt: "Projeto residencial com cozinha e sala de jantar em linguagem clássica contemporânea, madeira quente em espinha, iluminação integrada e sala de estar marcada por estantaria escultórica e materiais naturais.",
      en: "Residential project with a contemporary-classic kitchen and dining area, warm herringbone wood flooring, integrated lighting, and a living room defined by sculptural shelving and natural materials.",
    },
    images: [
      "/images/vg/cozinha-sala-03.jpg",
      "/images/vg/cozinha-sala-01.jpg",
      "/images/vg/cozinha-sala-02.jpg",
      "/images/vg/hall-quartos-01.png",
      "/images/vg/sala-estar-01.jpg",
      "/images/vg/sala-estar-02.jpg",
      "/images/vg/sala-estar-03.jpg",
      "/images/vg/sala-estar-04.jpg",
    ],
  },
  {
    slug: "casa-sn",
    title: { pt: "Casa SN", en: "Casa SN" },
    location: { pt: "Portugal", en: "Portugal" },
    year: "2024",
    category: { pt: "Residencial", en: "Residential" },
    description: {
      pt: "Projeto residencial de carácter intemporal: hall com ripado de madeira e separadores escultóricos, sala ampla com lareira a três faces e cozinha integrada em pedra e nogueira, complementada por um escritório-biblioteca com zona de leitura em arco. Madeira quente, tons cru e iluminação cénica dão coerência a todo o espaço.",
      en: "A timeless family home shaped by warm wood, raw tones and scenographic lighting. The entrance hall unfolds through vertical slats and sculptural dividers, opening into a generous living room anchored by a three-sided fireplace and a kitchen where stone meets walnut in quiet balance. A study-library extends the atmosphere with an arched reading nook — a place to pause, read and inhabit the light.",
    },
    images: [
      "/images/sn/sala-01.jpg",
      "/images/sn/sala-02.jpg",
      "/images/sn/hall-02.jpg",
      "/images/sn/sala-03.jpg",
      "/images/sn/sala-04-cozinha.jpg",
      "/images/sn/suite-02.jpg",
      "/images/sn/escrit-01.jpg",
      "/images/sn/escritorio-01.jpg",
      "/images/sn/escritorio-02.jpg",
      "/images/sn/escritorio-03.jpg",
    ],
  },
  {
    slug: "tp",
    title: { pt: "Casa TP", en: "Casa TP" },
    location: { pt: "Portugal", en: "Portugal" },
    year: "2024",
    category: { pt: "Residencial", en: "Residential" },
    description: {
      pt: "Reabilitação integral de uma casa de família. Open space generoso onde cozinha, sala e refeições partilham a mesma luz, complementado por três quartos de atmosfera serena. Paleta neutra, madeira clara e detalhes em pedra dão continuidade entre os ambientes.",
      en: "Full renovation of a family home. A generous open space where kitchen, living and dining share the same light, complemented by three serene bedrooms. A neutral palette, light wood and stone details create continuity between spaces.",
    },
    images: [
      tapadaOpen4.url,
      tapadaHall01.url,
      tapadaCoz1.url,
      tapadaCoz4.url,
      tapadaSuite.url,
      tapadaMF.url,
      tapadaPE.url,
    ],
  },
  {
    slug: "foz-apartments",
    title: { pt: "Foz Apartments", en: "Foz Apartments" },
    location: { pt: "Portugal", en: "Portugal" },
    year: "2024",
    category: { pt: "Residencial", en: "Residential" },
    description: {
      pt: "Projeto integral de apartamentos com átrio em madeira escura, open space contínuo entre sala, jantar e cozinha, e três quartos de carácter próprio — do verde profundo ao azul sereno. Materiais naturais, ripado de madeira e têxteis suaves criam uma atmosfera intemporal.",
      en: "Full apartment project featuring a dark-wood entrance hall, a continuous open space across living, dining and kitchen, and three bedrooms with distinct characters — from deep green to serene blue. Natural materials, wooden slats and soft textiles create a timeless atmosphere.",
    },
    images: [
      sampaioOpen2.url,
      sampaioOpen1.url,
      sampaioHall.url,
      sampaioOpen3.url,
      sampaioQ1.url,
      sampaioQ1b.url,
      sampaioQ2.url,
      sampaioQ2b.url,
      sampaioQ3.url,
    ],
  },
  {
    slug: "sao-paio-apartments",
    title: { pt: "São Paio Apartments", en: "São Paio Apartments" },
    location: { pt: "Porto, Portugal", en: "Porto, Portugal" },
    year: "2024",
    category: { pt: "Residencial", en: "Residential" },
    description: {
      pt: "Apartamentos sobre o Douro, desenhados como um exercício de calma e luz. Uma sala ampla abre-se ao rio através de vãos generosos, prolongando-se numa cozinha-ilha em ónix verde que se torna peça central. Madeira de nogueira, têxteis cru e apontamentos em latão dão continuidade a todos os ambientes, culminando em quartos de atmosfera intimista — do bege sereno ao verde profundo.",
      en: "Apartments overlooking the Douro river, conceived as an exercise in calm and light. A generous living area opens to the river through wide glazing, extending into a kitchen island in green onyx that becomes the sculptural centrepiece. Walnut wood, raw textiles and brass accents thread continuity through every room, culminating in bedrooms of intimate atmosphere — from serene beige to deep green.",
    },
    images: [
      saopaio01.url,
      saopaio02.url,
      saopaio03.url,
      saopaio04.url,
      saopaio05.url,
      saopaio06.url,
      saopaio07.url,
      saopaio08.url,
      saopaio09.url,
      saopaio10.url,
    ],
  },
];
