import { Translations } from './types';

export const translations: Record<'pt' | 'en' | 'es', Translations> = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre',
      experience: 'Experiência',
      skills: 'Skills',
      projects: 'Projetos',
      contact: 'Contato',
      openMenu: 'Abrir menu'
    },
    lang: {
      label: 'Idioma',
      pt: 'Português',
      en: 'Inglês',
      es: 'Espanhol'
    },
    hero: {
      eyebrow: 'Tech Lead · BTG Pactual',
      titlePrefix: 'Eu sou',
      titleHighlight: 'Lucas',
      titleSuffix: 'Tech Lead & engenheiro de software',
      lead: 'Lidero o time de Onboarding e Manutenção Cadastral no BTG Empresas, com foco em .NET, React, Angular e AWS.',
      resume: 'Currículo',
      portfolio: 'Portfólio',
      aboutCta: 'Ir para sobre',
      follow: 'Follow me',
      aboutTitle: 'Sobre mim',
      aboutText: 'Referência técnica em sistemas financeiros, com liderança de times e entrega de produtos complexos.',
      aboutLink: 'Saiba mais →',
      workTitle: 'Meu trabalho',
      workText: 'Projetos pessoais, APIs e aplicações construídas ao longo da carreira.',
      workLink: 'Ver projetos →'
    },
    about: {
      label: 'About',
      title: 'Sobre mim',
      lead: 'Formação em Informática para Negócios e atuação sênior em inovação tecnológica no setor financeiro.',
      greeting: 'Olá, prazer em te conhecer',
      p1: 'Com formação em Informática para Negócios pela FATEC Mauá, atualmente impulsiono a inovação tecnológica no BTG Pactual como Tech Lead. Com foco no time de Onboarding e Manutenção Cadastral para a plataforma BTG Empresas, minha atuação engloba tecnologias como .NET, React e AWS, além de metodologias ágeis e padrões de design modernos.',
      p2: 'Valorizando a colaboração e o crescimento contínuo, contribuo para a evolução dos sistemas financeiros e atuo como ponto de referência técnica, facilitando o sucesso da equipe e dos projetos.',
      name: 'Nome',
      phone: 'Telefone',
      email: 'E-mail',
      location: 'Local',
      languagesLabel: 'Idiomas',
      languagesValue: 'Inglês (profissional) · Espanhol (básico)',
      yearsLabel: 'Anos de experiência',
      yearsText: 'Do estágio à liderança técnica em ambientes de alta escala.',
      roleLabel: 'Posição atual',
      roleText: 'Tech Lead no BTG Pactual, à frente do time de Onboarding PJ.'
    },
    experience: {
      label: 'Resume',
      title: 'Experiência',
      lead: 'Linha do tempo da minha atuação profissional em engenharia de software e liderança técnica.',
      items: [
        {
          company: 'BTG Pactual',
          period: 'Agosto 2022 — Presente',
          roles: [
            {
              role: 'Tech Lead',
              period: 'Janeiro 2025 — Presente',
              description:
                'À frente do time de desenvolvedores focado em Onboarding e Manutenção Cadastral (Revisão/Atualização) para pessoas jurídicas. Gerencio atividades diárias, decisões técnicas e alinhamento com o negócio, além de apoiar monitores de observabilidade dos fluxos do time.'
            },
            {
              role: 'Senior Software Engineer',
              period: 'Janeiro 2024 — Janeiro 2025',
              description:
                'Engenharia de software na esteira de Onboarding e Manutenção Cadastral no BTG Empresas, com .NET, React, AWS e padrões como DDD, TDD, CQRS, eventos e Monad.'
            },
            {
              role: 'Software Engineer',
              period: 'Agosto 2022 — Dezembro 2023',
              description:
                'Engenharia de software para Primeiro Acesso e Abertura de Contas no BTG Empresas, com .NET, React, AWS e design patterns para soluções robustas e escaláveis.'
            }
          ]
        },
        {
          company: 'Iteris Consultoria e Software',
          period: 'Setembro 2020 — Julho 2022',
          roles: [
            {
              role: 'Software Engineer',
              period: 'Março 2021 — Julho 2022',
              description:
                'Desenvolvimento para clientes como REDE, SGS e Easynvest/NuInvest com C#, Angular, React, Azure e AWS, aplicando design patterns para soluções eficazes e escaláveis.'
            },
            {
              role: 'Junior Software Engineer',
              period: 'Setembro 2020 — Fevereiro 2021',
              description:
                'Desenvolvimento para clientes como REDE, SGS e Easynvest/NuInvest com C#, Angular, React, Azure e AWS.'
            }
          ]
        },
        {
          company: 'so+ma',
          period: 'Dezembro 2019 — Agosto 2020',
          roles: [
            {
              role: 'Software Engineer Intern',
              period: 'Dezembro 2019 — Agosto 2020',
              description:
                'Estágio em engenharia de software com novas funcionalidades e manutenção em .NET Core, Microsoft Azure, SQL Server e stack correlata.'
            }
          ]
        }
      ]
    },
    education: {
      label: 'Education',
      title: 'Educação',
      school: 'FATEC Mauá',
      course: 'Tecnólogo em Informática para Negócios',
      location: 'Mauá, São Paulo, Brasil',
      period: 'Janeiro 2017 — Julho 2020',
      whatLabel: 'What I do',
      whatTitle: 'Competências em destaque',
      capabilities: [
        'Liderança de equipe multifuncional',
        'Desenvolvimento web full-stack',
        '.NET, Angular e React',
        'Cloud AWS e Azure DevOps',
        'Observabilidade com Datadog + Grafana'
      ],
      languagesTitle: 'Idiomas',
      languageItems: [
        { name: 'Inglês', level: 'Profissional' },
        { name: 'Espanhol', level: 'Básico' }
      ],
      certsTitle: 'Certificações',
      certifications: [
        'C# Programação Orientada a Objetos',
        'Javascript, jQuery, Ajax e Json'
      ]
    },
    skills: {
      label: 'My skills',
      title: 'Conhecimento técnico',
      lead: 'Stacks e tecnologias com as quais tenho experiência como desenvolvedor e tech lead.',
      loading: 'Carregando conhecimentos...',
      error: 'Não foi possível carregar as skills no momento.',
      seeMore: 'Ver mais',
      close: 'Fechar'
    },
    projects: {
      label: 'Portfolio',
      title: 'Projetos',
      lead: 'Projetos pessoais e APIs que sustentam este currículo online.',
      sourceTitle: 'Veja o código fonte',
      items: [
        {
          title: 'Fatec Mauá Job Newsletter',
          description:
            'MVP de um TCC para a FATEC Mauá e seus alunos registrarem e divulgarem vagas de emprego e estágio de maneira mais prática (front-end e back-end).',
          buttons: [
            {
              text: 'Página da aplicação',
              url: 'https://fatecmauajobnewsletterfront.azurewebsites.net'
            },
            {
              text: 'Swagger da API',
              url: 'https://fatecmauajobnewsletter.azurewebsites.net/swagger'
            }
          ]
        },
        {
          title: 'API Knowledge',
          description:
            'API para retorno das informações da minha base de conhecimento para popular o projeto Web Resume.',
          buttons: [
            {
              text: 'Swagger da API',
              url: 'https://webapiknowledge.azurewebsites.net/swagger'
            }
          ]
        },
        {
          title: 'API Email Sender',
          description:
            'API para contato no meu e-mail a partir dos meus projetos (utilizada na aba de contato).',
          buttons: [
            {
              text: 'Swagger da API',
              url: 'https://webapiemail.azurewebsites.net/swagger'
            }
          ]
        }
      ],
      repositories: [
        {
          description: 'Código desta página',
          url: 'https://github.com/lucasvieiravicente/WebResumeAngular'
        },
        {
          description: 'Demais repositórios',
          url: 'https://github.com/lucasvieiravicente'
        }
      ]
    },
    contact: {
      label: 'Contact',
      title: 'Entre em contato',
      lead: 'Tem uma oportunidade, ideia ou dúvida? Envie uma mensagem — respondo o quanto antes.',
      name: 'Nome',
      email: 'E-mail',
      phone: 'Telefone',
      message: 'Mensagem',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'seu@email.com',
      phonePlaceholder: 'Opcional',
      messagePlaceholder: 'Como posso ajudar?',
      send: 'Enviar mensagem',
      sending: 'Enviando...',
      required: 'Preencha os campos obrigatórios corretamente.',
      successFallback: 'Mensagem enviada com sucesso!',
      errorFallback: 'Não foi possível enviar a mensagem. Tente novamente.'
    },
    footer: {
      aboutTitle: 'Sobre esta página',
      aboutText:
        'Web Resume 3.0 em Angular moderno, com layout dark e suporte a português, inglês e espanhol.',
      license: 'Licença MIT © Lucas V.G. Vicente'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      openMenu: 'Open menu'
    },
    lang: {
      label: 'Language',
      pt: 'Portuguese',
      en: 'English',
      es: 'Spanish'
    },
    hero: {
      eyebrow: 'Tech Lead · BTG Pactual',
      titlePrefix: "I'm",
      titleHighlight: 'Lucas',
      titleSuffix: 'Tech Lead & software engineer',
      lead: 'I lead the Onboarding and Customer Data Maintenance team at BTG Empresas, focused on .NET, React, Angular, and AWS.',
      resume: 'Resume',
      portfolio: 'Portfolio',
      aboutCta: 'Go to about',
      follow: 'Follow me',
      aboutTitle: 'About me',
      aboutText: 'Technical reference in financial systems, with team leadership and delivery of complex products.',
      aboutLink: 'Learn more →',
      workTitle: 'My work',
      workText: 'Personal projects, APIs, and applications built throughout my career.',
      workLink: 'Browse projects →'
    },
    about: {
      label: 'About',
      title: 'About me',
      lead: 'Business Informatics background and senior work driving technological innovation in financial services.',
      greeting: 'Hi there, nice to meet you',
      p1: 'With a degree in Business Informatics from FATEC Mauá, I currently drive technological innovation at BTG Pactual as Tech Lead. Focused on the Onboarding and Customer Data Maintenance team for BTG Empresas, I work with .NET, React, and AWS, plus agile methods and modern design patterns.',
      p2: 'Valuing collaboration and continuous growth, I help evolve financial systems and act as a technical reference, enabling team and project success.',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
      languagesLabel: 'Languages',
      languagesValue: 'English (professional) · Spanish (elementary)',
      yearsLabel: 'Years of experience',
      yearsText: 'From internship to technical leadership in high-scale environments.',
      roleLabel: 'Current role',
      roleText: 'Tech Lead at BTG Pactual, leading the corporate onboarding team.'
    },
    experience: {
      label: 'Resume',
      title: 'Experience',
      lead: 'Timeline of my professional work in software engineering and technical leadership.',
      items: [
        {
          company: 'BTG Pactual',
          period: 'August 2022 — Present',
          roles: [
            {
              role: 'Tech Lead',
              period: 'January 2025 — Present',
              description:
                'Leading the development team focused on Onboarding and Customer Data Maintenance (review/update) for legal entities. I manage daily activities, technical decisions, and business alignment, and support observability monitors for the team’s flows.'
            },
            {
              role: 'Senior Software Engineer',
              period: 'January 2024 — January 2025',
              description:
                'Software engineering on the Onboarding and Customer Data Maintenance track at BTG Empresas, using .NET, React, AWS, and patterns such as DDD, TDD, CQRS, event-driven design, and Monad.'
            },
            {
              role: 'Software Engineer',
              period: 'August 2022 — December 2023',
              description:
                'Software engineering for First Access and Account Opening at BTG Empresas, using .NET, React, AWS, and design patterns for robust, scalable solutions.'
            }
          ]
        },
        {
          company: 'Iteris Consultoria e Software',
          period: 'September 2020 — July 2022',
          roles: [
            {
              role: 'Software Engineer',
              period: 'March 2021 — July 2022',
              description:
                'Built systems for clients such as REDE, SGS, and Easynvest/NuInvest with C#, Angular, React, Azure, and AWS, applying design patterns for effective, scalable solutions.'
            },
            {
              role: 'Junior Software Engineer',
              period: 'September 2020 — February 2021',
              description:
                'Built systems for clients such as REDE, SGS, and Easynvest/NuInvest with C#, Angular, React, Azure, and AWS.'
            }
          ]
        },
        {
          company: 'so+ma',
          period: 'December 2019 — August 2020',
          roles: [
            {
              role: 'Software Engineer Intern',
              period: 'December 2019 — August 2020',
              description:
                'Software engineering internship creating features and maintaining systems with .NET Core, Microsoft Azure, SQL Server, and related stack.'
            }
          ]
        }
      ]
    },
    education: {
      label: 'Education',
      title: 'Education',
      school: 'FATEC Mauá',
      course: 'Technologist in Business Informatics',
      location: 'Mauá, São Paulo, Brazil',
      period: 'January 2017 — July 2020',
      whatLabel: 'What I do',
      whatTitle: 'Featured skills',
      capabilities: [
        'Cross-functional team leadership',
        'Full-stack web development',
        '.NET, Angular, and React',
        'Cloud AWS and Azure DevOps',
        'Observability with Datadog + Grafana'
      ],
      languagesTitle: 'Languages',
      languageItems: [
        { name: 'English', level: 'Professional working' },
        { name: 'Spanish', level: 'Elementary' }
      ],
      certsTitle: 'Certifications',
      certifications: [
        'C# Object-Oriented Programming',
        'Javascript, jQuery, Ajax, and Json'
      ]
    },
    skills: {
      label: 'My skills',
      title: 'Technical knowledge',
      lead: 'Stacks and technologies I use as a developer and tech lead.',
      loading: 'Loading skills...',
      error: 'Unable to load skills right now.',
      seeMore: 'See more',
      close: 'Close'
    },
    projects: {
      label: 'Portfolio',
      title: 'Projects',
      lead: 'Personal projects and APIs that power this online resume.',
      sourceTitle: 'See the source code',
      items: [
        {
          title: 'Fatec Mauá Job Newsletter',
          description:
            'MVP for a final project helping FATEC Mauá students register and share job and internship openings more easily (front-end and back-end).',
          buttons: [
            {
              text: 'Application page',
              url: 'https://fatecmauajobnewsletterfront.azurewebsites.net'
            },
            {
              text: 'API Swagger',
              url: 'https://fatecmauajobnewsletter.azurewebsites.net/swagger'
            }
          ]
        },
        {
          title: 'API Knowledge',
          description:
            'API that returns my knowledge base information to populate the Web Resume project.',
          buttons: [
            {
              text: 'API Swagger',
              url: 'https://webapiknowledge.azurewebsites.net/swagger'
            }
          ]
        },
        {
          title: 'API Email Sender',
          description:
            'API for contacting my email from my projects (used in the contact section).',
          buttons: [
            {
              text: 'API Swagger',
              url: 'https://webapiemail.azurewebsites.net/swagger'
            }
          ]
        }
      ],
      repositories: [
        {
          description: 'This page source',
          url: 'https://github.com/lucasvieiravicente/WebResumeAngular'
        },
        {
          description: 'Other repositories',
          url: 'https://github.com/lucasvieiravicente'
        }
      ]
    },
    contact: {
      label: 'Contact',
      title: 'Get in touch',
      lead: 'Have an opportunity, idea, or question? Send a message — I’ll get back to you soon.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'you@email.com',
      phonePlaceholder: 'Optional',
      messagePlaceholder: 'How can I help?',
      send: 'Send message',
      sending: 'Sending...',
      required: 'Please fill in the required fields correctly.',
      successFallback: 'Message sent successfully!',
      errorFallback: 'Unable to send the message. Please try again.'
    },
    footer: {
      aboutTitle: 'About this page',
      aboutText:
        'Web Resume 3.0 built with modern Angular, a dark layout, and support for Portuguese, English, and Spanish.',
      license: 'MIT License © Lucas V.G. Vicente'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Skills',
      projects: 'Proyectos',
      contact: 'Contacto',
      openMenu: 'Abrir menú'
    },
    lang: {
      label: 'Idioma',
      pt: 'Portugués',
      en: 'Inglés',
      es: 'Español'
    },
    hero: {
      eyebrow: 'Tech Lead · BTG Pactual',
      titlePrefix: 'Soy',
      titleHighlight: 'Lucas',
      titleSuffix: 'Tech Lead e ingeniero de software',
      lead: 'Lidero el equipo de Onboarding y Mantenimiento Catastral en BTG Empresas, con foco en .NET, React, Angular y AWS.',
      resume: 'Currículum',
      portfolio: 'Portafolio',
      aboutCta: 'Ir a sobre mí',
      follow: 'Sígueme',
      aboutTitle: 'Sobre mí',
      aboutText: 'Referencia técnica en sistemas financieros, con liderazgo de equipos y entrega de productos complejos.',
      aboutLink: 'Saber más →',
      workTitle: 'Mi trabajo',
      workText: 'Proyectos personales, APIs y aplicaciones construidas a lo largo de mi carrera.',
      workLink: 'Ver proyectos →'
    },
    about: {
      label: 'About',
      title: 'Sobre mí',
      lead: 'Formación en Informática para Negocios y actuación senior impulsando la innovación tecnológica en el sector financiero.',
      greeting: 'Hola, un gusto conocerte',
      p1: 'Con formación en Informática para Negocios por la FATEC Mauá, actualmente impulso la innovación tecnológica en BTG Pactual como Tech Lead. Enfocado en el equipo de Onboarding y Mantenimiento Catastral para BTG Empresas, trabajo con .NET, React y AWS, además de metodologías ágiles y patrones de diseño modernos.',
      p2: 'Valorando la colaboración y el crecimiento continuo, contribuyo a la evolución de los sistemas financieros y actúo como referencia técnica, facilitando el éxito del equipo y de los proyectos.',
      name: 'Nombre',
      phone: 'Teléfono',
      email: 'Correo',
      location: 'Ubicación',
      languagesLabel: 'Idiomas',
      languagesValue: 'Inglés (profesional) · Español (básico)',
      yearsLabel: 'Años de experiencia',
      yearsText: 'Desde la pasantía hasta el liderazgo técnico en entornos de alta escala.',
      roleLabel: 'Rol actual',
      roleText: 'Tech Lead en BTG Pactual, al frente del equipo de onboarding PJ.'
    },
    experience: {
      label: 'Resume',
      title: 'Experiencia',
      lead: 'Línea de tiempo de mi trayectoria en ingeniería de software y liderazgo técnico.',
      items: [
        {
          company: 'BTG Pactual',
          period: 'Agosto 2022 — Presente',
          roles: [
            {
              role: 'Tech Lead',
              period: 'Enero 2025 — Presente',
              description:
                'Al frente del equipo de desarrolladores enfocado en Onboarding y Mantenimiento Catastral (revisión/actualización) para personas jurídicas. Gestiono actividades diarias, decisiones técnicas y alineación con el negocio, además de apoyar monitores de observabilidad de los flujos del equipo.'
            },
            {
              role: 'Senior Software Engineer',
              period: 'Enero 2024 — Enero 2025',
              description:
                'Ingeniería de software en la pista de Onboarding y Mantenimiento Catastral en BTG Empresas, con .NET, React, AWS y patrones como DDD, TDD, CQRS, eventos y Monad.'
            },
            {
              role: 'Software Engineer',
              period: 'Agosto 2022 — Diciembre 2023',
              description:
                'Ingeniería de software para Primer Acceso y Apertura de Cuentas en BTG Empresas, con .NET, React, AWS y design patterns para soluciones robustas y escalables.'
            }
          ]
        },
        {
          company: 'Iteris Consultoria e Software',
          period: 'Septiembre 2020 — Julio 2022',
          roles: [
            {
              role: 'Software Engineer',
              period: 'Marzo 2021 — Julio 2022',
              description:
                'Desarrollo para clientes como REDE, SGS y Easynvest/NuInvest con C#, Angular, React, Azure y AWS, aplicando design patterns para soluciones eficaces y escalables.'
            },
            {
              role: 'Junior Software Engineer',
              period: 'Septiembre 2020 — Febrero 2021',
              description:
                'Desarrollo para clientes como REDE, SGS y Easynvest/NuInvest con C#, Angular, React, Azure y AWS.'
            }
          ]
        },
        {
          company: 'so+ma',
          period: 'Diciembre 2019 — Agosto 2020',
          roles: [
            {
              role: 'Software Engineer Intern',
              period: 'Diciembre 2019 — Agosto 2020',
              description:
                'Pasantía en ingeniería de software creando funciones y manteniendo sistemas con .NET Core, Microsoft Azure, SQL Server y stack relacionada.'
            }
          ]
        }
      ]
    },
    education: {
      label: 'Education',
      title: 'Educación',
      school: 'FATEC Mauá',
      course: 'Tecnólogo en Informática para Negocios',
      location: 'Mauá, São Paulo, Brasil',
      period: 'Enero 2017 — Julio 2020',
      whatLabel: 'What I do',
      whatTitle: 'Competencias destacadas',
      capabilities: [
        'Liderazgo de equipos multifuncionales',
        'Desarrollo web full-stack',
        '.NET, Angular y React',
        'Cloud AWS y Azure DevOps',
        'Observabilidad con Datadog + Grafana'
      ],
      languagesTitle: 'Idiomas',
      languageItems: [
        { name: 'Inglés', level: 'Profesional' },
        { name: 'Español', level: 'Básico' }
      ],
      certsTitle: 'Certificaciones',
      certifications: [
        'C# Programación Orientada a Objetos',
        'Javascript, jQuery, Ajax y Json'
      ]
    },
    skills: {
      label: 'My skills',
      title: 'Conocimiento técnico',
      lead: 'Stacks y tecnologías con las que tengo experiencia como desarrollador y tech lead.',
      loading: 'Cargando conocimientos...',
      error: 'No fue posible cargar las skills en este momento.',
      seeMore: 'Ver más',
      close: 'Cerrar'
    },
    projects: {
      label: 'Portfolio',
      title: 'Proyectos',
      lead: 'Proyectos personales y APIs que impulsan este currículum online.',
      sourceTitle: 'Ver el código fuente',
      items: [
        {
          title: 'Fatec Mauá Job Newsletter',
          description:
            'MVP de un TCC para que FATEC Mauá y sus alumnos registren y compartan vacantes de empleo y pasantías de forma más práctica (front-end y back-end).',
          buttons: [
            {
              text: 'Página de la aplicación',
              url: 'https://fatecmauajobnewsletterfront.azurewebsites.net'
            },
            {
              text: 'Swagger de la API',
              url: 'https://fatecmauajobnewsletter.azurewebsites.net/swagger'
            }
          ]
        },
        {
          title: 'API Knowledge',
          description:
            'API para devolver la información de mi base de conocimiento y alimentar el proyecto Web Resume.',
          buttons: [
            {
              text: 'Swagger de la API',
              url: 'https://webapiknowledge.azurewebsites.net/swagger'
            }
          ]
        },
        {
          title: 'API Email Sender',
          description:
            'API para contactarme por correo desde mis proyectos (usada en la sección de contacto).',
          buttons: [
            {
              text: 'Swagger de la API',
              url: 'https://webapiemail.azurewebsites.net/swagger'
            }
          ]
        }
      ],
      repositories: [
        {
          description: 'Código de esta página',
          url: 'https://github.com/lucasvieiravicente/WebResumeAngular'
        },
        {
          description: 'Otros repositorios',
          url: 'https://github.com/lucasvieiravicente'
        }
      ]
    },
    contact: {
      label: 'Contact',
      title: 'Ponte en contacto',
      lead: '¿Tienes una oportunidad, idea o duda? Envía un mensaje — te respondo lo antes posible.',
      name: 'Nombre',
      email: 'Correo',
      phone: 'Teléfono',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      phonePlaceholder: 'Opcional',
      messagePlaceholder: '¿Cómo puedo ayudar?',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      required: 'Completa los campos obligatorios correctamente.',
      successFallback: '¡Mensaje enviado con éxito!',
      errorFallback: 'No fue posible enviar el mensaje. Inténtalo de nuevo.'
    },
    footer: {
      aboutTitle: 'Sobre esta página',
      aboutText:
        'Web Resume 3.0 en Angular moderno, con layout dark y soporte para portugués, inglés y español.',
      license: 'Licencia MIT © Lucas V.G. Vicente'
    }
  }
};
