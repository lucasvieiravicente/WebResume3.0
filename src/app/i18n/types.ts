export type Lang = 'pt' | 'en' | 'es';

export interface ExperienceRole {
  role: string;
  period: string;
  description: string;
}

export interface ExperienceCompany {
  company: string;
  period: string;
  roles: ExperienceRole[];
}

export interface ProjectItem {
  title: string;
  description: string;
  buttons: { text: string; url: string }[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    skills: string;
    projects: string;
    contact: string;
    openMenu: string;
  };
  lang: {
    label: string;
    pt: string;
    en: string;
    es: string;
  };
  hero: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    lead: string;
    resume: string;
    portfolio: string;
    aboutCta: string;
    follow: string;
    aboutTitle: string;
    aboutText: string;
    aboutLink: string;
    workTitle: string;
    workText: string;
    workLink: string;
  };
  about: {
    label: string;
    title: string;
    lead: string;
    greeting: string;
    p1: string;
    p2: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    languagesLabel: string;
    languagesValue: string;
    yearsLabel: string;
    yearsText: string;
    roleLabel: string;
    roleText: string;
  };
  experience: {
    label: string;
    title: string;
    lead: string;
    items: ExperienceCompany[];
  };
  education: {
    label: string;
    title: string;
    school: string;
    course: string;
    location: string;
    period: string;
    whatLabel: string;
    whatTitle: string;
    capabilities: string[];
    languagesTitle: string;
    languageItems: { name: string; level: string }[];
    certsTitle: string;
    certifications: string[];
  };
  skills: {
    label: string;
    title: string;
    lead: string;
    loading: string;
    error: string;
    seeMore: string;
    close: string;
  };
  projects: {
    label: string;
    title: string;
    lead: string;
    sourceTitle: string;
    items: ProjectItem[];
    repositories: { description: string; url: string }[];
  };
  contact: {
    label: string;
    title: string;
    lead: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    required: string;
    successFallback: string;
    errorFallback: string;
  };
  footer: {
    aboutTitle: string;
    aboutText: string;
    license: string;
  };
}

export const PROFILE = {
  fullName: 'Lucas V.G. Vicente',
  shortName: 'Lucas',
  brandName: 'Lucas V.G. Vicente',
  phoneDisplay: '+55 (11) 98377-3017',
  phoneHref: 'tel:+5511983773017',
  email: 'lucasvieiravicente1@gmail.com',
  location: 'Mauá, São Paulo, Brasil',
  locationUrl: 'https://goo.gl/maps/1eTjhJJapNkz1fE99',
  linkedin: 'https://www.linkedin.com/in/lucas-vieira-vicente',
  github: 'https://github.com/lucasvieiravicente',
  website: 'https://resume.lucasvieiravicente.com',
  whatsapp:
    'https://api.whatsapp.com/send?phone=5511983773017&text=Olá,%20tudo%20bem?%20Te%20encontrei%20no%20seu%20currículo%20online',
  resumeFile: 'assets/files/Profile.pdf',
  photoPrimary: 'assets/images/foto1.jpg',
  photoSecondary: 'assets/images/foto2.jpeg',
  professionalStartYear: 2019
} as const;
