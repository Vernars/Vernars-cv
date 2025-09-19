// Données personnelles d'Ibrahim
const personalInfo = {
  name: "Ibrahim Gabaev",
  title: "Coursier Livreur Professionnel",
  dateOfBirth: "18 janvier 2000",
  age: 25,
  address: "Rue Fyon n° 39/1, 4800 VERVIERS, Belgique",
  phone: "+32471251853",
  email: "ibrajob00@gmail.com",
  transportation: "Automobile",
  profileSummary: "Coursier livreur expérimenté avec plus de 6 ans d'expérience dans la logistique, la sécurité et la vente. Polyglotte parlant français, russe et tchétchène. Permis de conduire B et AM. Fiable, ponctuel et orienté service client."
};

const workExperience = [
  {
    id: 1,
    period: "08/2024 - 02/2025",
    company: "Chez Baba",
    position: "Coursier livreur / Coursière livreuse de pizzas",
    location: "Belgique",
    description: "Livraison de pizzas aux clients, gestion des commandes, service client de qualité"
  },
  {
    id: 2,
    period: "10/2023 - 05/2024", 
    company: "KMG",
    position: "Chauffeur-livreur / Chauffeuse-livreuse",
    location: "Belgique",
    description: "Transport et livraison de marchandises, respect des délais, relation client"
  },
  {
    id: 3,
    period: "02/2020 - 02/2020",
    company: "Corporate Unit à Bruxelles",
    position: "Gardien / Gardienne de musée",
    location: "Bruxelles, Belgique",
    description: "Veiller à la sécurité dans un musée, accueil du public, surveillance"
  },
  {
    id: 4,
    period: "12/2019 - 12/2019",
    company: "Corporate Unit Bruxelles",
    position: "Gardien / Gardienne de musée",
    location: "Bruxelles (Atomium), Belgique", 
    description: "Veiller à la sécurité à l'Atomium, contrôle d'accès, assistance aux visiteurs"
  },
  {
    id: 5,
    period: "10/2018 - 04/2019",
    company: "Kruidvat",
    position: "Vendeur-magasinier (h/f)",
    location: "Belgique",
    description: "Gestion de stock, réassort des marchandises, étiquetage, inventaire, service client"
  },
  {
    id: 6,
    period: "01/2018 - 12/2019", 
    company: "Circuit de Francorchamps",
    position: "Agent / Agente de surveillance",
    location: "Francorchamps, Belgique",
    description: "Surveillance d'un hôtel durant les vacances scolaires, sécurité des lieux"
  }
];

const education = [
  {
    id: 1,
    period: "09/2018 - 06/2019",
    level: "Enseignement ordinaire, Fondamental, Primaire",
    location: "Belgique"
  },
  {
    id: 2,
    period: "09/2016 - 06/2018", 
    level: "Enseignement ordinaire, Fondamental, Primaire",
    location: "Belgique"
  }
];

const languages = [
  { language: "Français", level: "B2 (Avancé)", proficiency: 85 },
  { language: "Tchétchène", level: "B2 (Avancé)", proficiency: 85 },
  { language: "Russe", level: "Débutant", proficiency: 40 }
];

const skills = [
  "Livraison et logistique",
  "Service client",
  "Gestion de stock", 
  "Sécurité et surveillance",
  "Conduite automobile",
  "Ponctualité",
  "Polyglotte (3 langues)",
  "Travail en équipe",
  "Adaptabilité",
  "Sens des responsabilités"
];

// Composant principal
function App() {
  return React.createElement('div', { className: 'min-h-screen' }, [
    React.createElement(Header),
    React.createElement('main', null, [
      React.createElement(Hero),
      React.createElement(Experience),
      React.createElement(Education),
      React.createElement(Skills),
      React.createElement(Contact)
    ]),
    React.createElement(Footer)
  ]);
}// Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return React.createElement('header', {
    className: 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-lg'
  }, [
    React.createElement('div', { className: 'max-w-6xl mx-auto px-6 py-4' }, [
      React.createElement('div', { className: 'flex items-center justify-between' }, [
        React.createElement('div', { 
          className: 'font-bold text-xl gradient-text'
        }, 'Ibrahim Gabaev'),
        React.createElement('nav', { className: 'hidden md:flex space-x-8' }, [
          React.createElement('button', {
            className: 'text-gray-700 hover:text-emerald-600 transition-colors font-medium',
            onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
          }, 'Expérience'),
          React.createElement('button', {
            className: 'text-gray-700 hover:text-emerald-600 transition-colors font-medium',
            onClick: () => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })
          }, 'Formation'),
          React.createElement('button', {
            className: 'text-gray-700 hover:text-emerald-600 transition-colors font-medium',
            onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
          }, 'Compétences'),
          React.createElement('button', {
            className: 'bg-gradient-to-r from-emerald-500 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-yellow-600 transition-all duration-300 font-medium shadow-lg',
            onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }, 'Contact')
        ])
      ])
    ])
  ]);
}

// Hero Component
function Hero() {
  return React.createElement('section', {
    className: 'pt-24 pb-16 bg-gradient-to-br from-gray-50 via-white to-emerald-50'
  }, [
    React.createElement('div', { className: 'max-w-6xl mx-auto px-6' }, [
      React.createElement('div', { className: 'grid lg:grid-cols-2 gap-12 items-center' }, [
        React.createElement('div', { className: 'space-y-8' }, [
          React.createElement('div', { className: 'space-y-4' }, [
            React.createElement('h1', { 
              className: 'text-4xl lg:text-5xl font-bold gradient-text leading-tight'
            }, personalInfo.name),
            React.createElement('p', { 
              className: 'text-xl text-emerald-600 font-semibold'
            }, personalInfo.title),
            React.createElement('p', { 
              className: 'text-lg text-gray-600 leading-relaxed'
            }, personalInfo.profileSummary)
          ]),
          React.createElement('div', { className: 'grid grid-cols-1 sm:grid-cols-2 gap-4' }, [
            React.createElement('div', { className: 'flex items-center space-x-3 text-gray-700' }, [
              React.createElement('span', { className: 'text-emerald-600' }, '📍'),
              React.createElement('span', { className: 'text-sm' }, personalInfo.address)
            ]),
            React.createElement('div', { className: 'flex items-center space-x-3 text-gray-700' }, [
              React.createElement('span', { className: 'text-emerald-600' }, '📞'),
              React.createElement('span', { className: 'text-sm' }, personalInfo.phone)
            ]),
            React.createElement('div', { className: 'flex items-center space-x-3 text-gray-700' }, [
              React.createElement('span', { className: 'text-emerald-600' }, '✉️'),
              React.createElement('span', { className: 'text-sm' }, personalInfo.email)
            ]),
            React.createElement('div', { className: 'flex items-center space-x-3 text-gray-700' }, [
              React.createElement('span', { className: 'text-emerald-600' }, '🚗'),
              React.createElement('span', { className: 'text-sm' }, `Véhicule : ${personalInfo.transportation}`)
            ])
          ])
        ]),React.createElement('div', { className: 'lg:pl-8' }, [
          React.createElement('div', { 
            className: 'bg-white rounded-2xl shadow-xl p-8 border border-gray-200'
          }, [
            React.createElement('h3', { 
              className: 'text-xl font-bold gradient-text mb-6'
            }, 'Informations personnelles'),
            React.createElement('div', { className: 'space-y-4' }, [
              React.createElement('div', { className: 'flex justify-between items-center py-2 border-b border-gray-100' }, [
                React.createElement('span', { className: 'text-gray-600 font-medium' }, 'Âge'),
                React.createElement('span', { className: 'text-gray-900 font-semibold' }, `${personalInfo.age} ans`)
              ]),
              React.createElement('div', { className: 'flex justify-between items-center py-2 border-b border-gray-100' }, [
                React.createElement('span', { className: 'text-gray-600 font-medium' }, 'Date de naissance'),
                React.createElement('span', { className: 'text-gray-900 font-semibold' }, personalInfo.dateOfBirth)
              ]),
              React.createElement('div', { className: 'flex justify-between items-center py-2 border-b border-gray-100' }, [
                React.createElement('span', { className: 'text-gray-600 font-medium' }, 'Localisation'),
                React.createElement('span', { className: 'text-gray-900 font-semibold' }, 'Verviers, Belgique')
              ]),
              React.createElement('div', { className: 'flex justify-between items-center py-2' }, [
                React.createElement('span', { className: 'text-gray-600 font-medium' }, 'Disponibilité'),
                React.createElement('span', { 
                  className: 'text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-full text-sm border border-emerald-200'
                }, 'Disponible immédiatement')
              ])
            ])
          ])
        ])
      ])
    ])
  ]);
}

// Experience Component
function Experience() {
  return React.createElement('section', {
    id: 'experience',
    className: 'py-16 bg-white'
  }, [
    React.createElement('div', { className: 'max-w-6xl mx-auto px-6' }, [
      React.createElement('div', { className: 'text-center mb-12' }, [
        React.createElement('h2', { 
          className: 'text-3xl lg:text-4xl font-bold gradient-text mb-4'
        }, 'Expérience Professionnelle'),
        React.createElement('p', { 
          className: 'text-lg text-gray-600 max-w-2xl mx-auto'
        }, 'Plus de 6 ans d\'expérience dans différents secteurs : livraison, sécurité, vente et logistique.')
      ]),
      React.createElement('div', { className: 'relative' }, [
        React.createElement('div', { 
          className: 'absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-yellow-300'
        }),
        React.createElement('div', { className: 'space-y-8' }, 
          workExperience.map((job, index) => 
            React.createElement('div', {
              key: job.id,
              className: `relative flex flex-col lg:flex-row items-start lg:items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`
            }, [
              React.createElement('div', { 
                className: 'absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full border-4 border-white shadow-lg z-10'
              }),
              React.createElement('div', {
                className: `ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`
              }, [
                React.createElement('div', { 
                  className: 'bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
                }, [React.createElement('div', { className: 'flex items-start space-x-4' }, [
                    React.createElement('div', { 
                      className: 'bg-gradient-to-r from-emerald-100 to-yellow-100 p-3 rounded-lg border border-emerald-200'
                    }, [
                      React.createElement('span', { className: 'text-2xl' }, '💼')
                    ]),
                    React.createElement('div', { className: 'flex-1' }, [
                      React.createElement('h3', { 
                        className: 'text-xl font-bold text-gray-900 mb-2'
                      }, job.position),
                      React.createElement('div', { className: 'space-y-2 mb-4' }, [
                        React.createElement('div', { className: 'flex items-center text-emerald-600 font-semibold' }, [
                          React.createElement('span', { className: 'mr-2' }, '📅'),
                          job.period
                        ]),
                        React.createElement('div', { className: 'flex items-center text-gray-600' }, [
                          React.createElement('span', { className: 'mr-2' }, '📍'),
                          `${job.company} - ${job.location}`
                        ])
                      ]),
                      React.createElement('p', { 
                        className: 'text-gray-700 leading-relaxed'
                      }, job.description)
                    ])
                  ])
                ])
              ]),
              React.createElement('div', { className: 'hidden lg:block lg:w-1/2' })
            ])
          )
        )
      ])
    ])
  ]);
}

// Education Component
function Education() {
  return React.createElement('section', {
    id: 'education',
    className: 'py-16 bg-white'
  }, [
    React.createElement('div', { className: 'max-w-6xl mx-auto px-6' }, [
      React.createElement('div', { className: 'text-center mb-12' }, [
        React.createElement('h2', { 
          className: 'text-3xl lg:text-4xl font-bold gradient-text mb-4'
        }, 'Formation'),
        React.createElement('p', { 
          className: 'text-lg text-gray-600 max-w-2xl mx-auto'
        }, 'Mon parcours éducatif et mes qualifications.')
      ]),
      React.createElement('div', { className: 'max-w-4xl mx-auto' }, [
        React.createElement('div', { className: 'space-y-6' },
          education.map(edu => 
            React.createElement('div', {
              key: edu.id,
              className: 'bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
            }, [
              React.createElement('div', { className: 'flex items-start space-x-4' }, [
                React.createElement('div', { 
                  className: 'bg-gradient-to-r from-emerald-100 to-yellow-100 p-3 rounded-lg border border-emerald-200'
                }, [
                  React.createElement('span', { className: 'text-2xl' }, '🎓')
                ]),
                React.createElement('div', { className: 'flex-1' }, [
                  React.createElement('h3', { 
                    className: 'text-xl font-bold text-gray-900 mb-2'
                  }, edu.level),
                  React.createElement('div', { className: 'space-y-2' }, [
                    React.createElement('div', { className: 'flex items-center text-emerald-600 font-semibold' }, [
                      React.createElement('span', { className: 'mr-2' }, '📅'),
                      edu.period]),
                    React.createElement('div', { className: 'flex items-center text-gray-600' }, [
                      React.createElement('span', { className: 'mr-2' }, '📍'),
                      edu.location
                    ])
                  ])
                ])
              ])
            ])
          )
        )
      ])
    ])
  ]);
}

// Skills Component
function Skills() {
  return React.createElement('section', {
    id: 'skills',
    className: 'py-16 bg-gradient-to-br from-gray-50 via-white to-emerald-50'
  }, [
    React.createElement('div', { className: 'max-w-6xl mx-auto px-6' }, [
      React.createElement('div', { className: 'text-center mb-12' }, [
        React.createElement('h2', { 
          className: 'text-3xl lg:text-4xl font-bold gradient-text mb-4'
        }, 'Compétences & Qualifications'),
        React.createElement('p', { 
          className: 'text-lg text-gray-600 max-w-2xl mx-auto'
        }, 'Mes compétences professionnelles, langues parlées et permis de conduire.')
      ]),
      React.createElement('div', { className: 'grid lg:grid-cols-3 gap-8' }, [
        // Skills Card
        React.createElement('div', { 
          className: 'bg-white rounded-2xl p-8 shadow-lg border border-gray-200'
        }, [
          React.createElement('h3', { 
            className: 'text-xl font-bold text-gray-900 mb-6 flex items-center'
          }, [
            React.createElement('span', { className: 'text-emerald-600 mr-3 text-2xl' }, '🏆'),
            'Compétences Principales'
          ]),
          React.createElement('div', { className: 'space-y-4' },
            skills.map((skill, index) => 
              React.createElement('div', {
                key: index,
                className: 'flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-yellow-50 transition-all duration-300 border border-transparent hover:border-emerald-200'
              }, [
                React.createElement('span', { className: 'text-emerald-600 flex-shrink-0' }, '✓'),
                React.createElement('span', { className: 'text-gray-700 font-medium' }, skill)
              ])
            )
          )
        ]),
        // Languages Card
        React.createElement('div', { 
          className: 'bg-white rounded-2xl p-8 shadow-lg border border-gray-200'
        }, [
          React.createElement('h3', { 
            className: 'text-xl font-bold text-gray-900 mb-6 flex items-center'
          }, [
            React.createElement('span', { className: 'text-emerald-600 mr-3 text-2xl' }, '🌍'),
            'Langues Parlées'
          ]),
          React.createElement('div', { className: 'space-y-6' },
            languages.map((lang, index) => 
              React.createElement('div', { key: index, className: 'space-y-2' }, [
                React.createElement('div', { className: 'flex justify-between items-center' }, [
                  React.createElement('span', { className: 'font-semibold text-gray-900' }, lang.language),
                  React.createElement('span', { className: 'text-sm text-gray-600' }, lang.level)
                ]),React.createElement('div', { className: 'w-full bg-gray-200 rounded-full h-3 shadow-inner' }, [
                  React.createElement('div', {
                    className: `h-3 rounded-full ${
                      lang.proficiency >= 80 ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                      lang.proficiency >= 60 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                      'bg-gradient-to-r from-gray-400 to-gray-500'
                    } transition-all duration-500 shadow-md`,
                    style: { width: `${lang.proficiency}%` }
                  })
                ])
              ])
            )
          )
        ]),
        // Licenses Card
        React.createElement('div', { 
          className: 'bg-white rounded-2xl p-8 shadow-lg border border-gray-200'
        }, [
          React.createElement('h3', { 
            className: 'text-xl font-bold text-gray-900 mb-6 flex items-center'
          }, [
            React.createElement('span', { className: 'text-emerald-600 mr-3 text-2xl' }, '🚗'),
            'Permis de Conduire'
          ]),
          React.createElement('div', { className: 'space-y-6' }, [
            React.createElement('div', { 
              className: 'bg-gradient-to-r from-emerald-50 to-yellow-50 rounded-lg p-4 border border-emerald-200 shadow-sm'
            }, [
              React.createElement('div', { className: 'flex items-start space-x-3' }, [
                React.createElement('span', { className: 'text-2xl' }, '🏍️'),
                React.createElement('div', null, [
                  React.createElement('h4', { className: 'font-semibold text-gray-900 mb-1' }, 'Permis AM'),
                  React.createElement('p', { className: 'text-gray-600 text-sm' }, 'Cyclomoteur 25 km/h - 45 km/h')
                ])
              ])
            ]),
            React.createElement('div', { 
              className: 'bg-gradient-to-r from-emerald-50 to-yellow-50 rounded-lg p-4 border border-emerald-200 shadow-sm'
            }, [
              React.createElement('div', { className: 'flex items-start space-x-3' }, [
                React.createElement('span', { className: 'text-2xl' }, '🚗'),
                React.createElement('div', null, [
                  React.createElement('h4', { className: 'font-semibold text-gray-900 mb-1' }, 'Permis B'),
                  React.createElement('p', { className: 'text-gray-600 text-sm' }, 'Auto < 3.500 kg < 8 passagers')
                ])
              ])
            ]),
            React.createElement('div', { 
              className: 'bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg p-4 border border-emerald-200 shadow-sm'
            }, [
              React.createElement('h4', { className: 'font-semibold text-gray-900 mb-2 flex items-center' }, [
                React.createElement('span', { className: 'text-emerald-600 mr-2' }, '✓'),
                'Aide à l\'Emploi'
              ]),
              React.createElement('p', { className: 'text-gray-600 text-sm' }, 'Bénéficiaire du programme Impulsion -25 ans')
            ])
          ])
        ])
      ])
    ])
  ]);
}
// Contact Component
function Contact() {
  return React.createElement('section', {
    id: 'contact',
    className: 'py-16 bg-gradient-to-br from-emerald-50 via-gray-50 to-yellow-50'
  }, [
    React.createElement('div', { className: 'max-w-6xl mx-auto px-6' }, [
      React.createElement('div', { className: 'text-center mb-12' }, [
        React.createElement('h2', { 
          className: 'text-3xl lg:text-4xl font-bold gradient-text mb-4'
        }, 'Me Contacter'),
        React.createElement('p', { 
          className: 'text-lg text-gray-600 max-w-2xl mx-auto'
        }, 'N\'hésitez pas à me contacter pour toute opportunité d\'emploi ou pour plus d\'informations.')
      ]),
      React.createElement('div', { className: 'grid lg:grid-cols-2 gap-12' }, [
        // Contact Information
        React.createElement('div', { className: 'space-y-8' }, [
          React.createElement('div', null, [
            React.createElement('h3', { 
              className: 'text-2xl font-bold text-gray-900 mb-6'
            }, 'Informations de Contact'),
            React.createElement('div', { className: 'space-y-6' }, [
              React.createElement('div', { 
                className: 'flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-200'
              }, [
                React.createElement('div', { 
                  className: 'bg-gradient-to-r from-emerald-100 to-yellow-100 p-3 rounded-lg border border-emerald-200'
                }, [
                  React.createElement('span', { className: 'text-2xl' }, '📞')
                ]),
                React.createElement('div', null, [
                  React.createElement('h4', { className: 'font-semibold text-gray-900 mb-1' }, 'Téléphone'),
                  React.createElement('p', { className: 'text-gray-600' }, personalInfo.phone),
                  React.createElement('p', { className: 'text-sm text-gray-500' }, 'Disponible 7j/7')
                ])
              ]),
              React.createElement('div', { 
                className: 'flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-200'
              }, [
                React.createElement('div', { 
                  className: 'bg-gradient-to-r from-emerald-100 to-yellow-100 p-3 rounded-lg border border-emerald-200'
                }, [
                  React.createElement('span', { className: 'text-2xl' }, '✉️')
                ]),
                React.createElement('div', null, [
                  React.createElement('h4', { className: 'font-semibold text-gray-900 mb-1' }, 'Email'),
                  React.createElement('p', { className: 'text-gray-600' }, personalInfo.email),
                  React.createElement('p', { className: 'text-sm text-gray-500' }, 'Réponse sous 24h')
                ])
              ]),
              React.createElement('div', { 
                className: 'flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-200'
              }, [
                React.createElement('div', { 
                  className: 'bg-gradient-to-r from-emerald-100 to-yellow-100 p-3 rounded-lg border border-emerald-200'
                }, [
                  React.createElement('span', { className: 'text-2xl' }, '📍')
                ]),
                React.createElement('div', null, [
                  React.createElement('h4', { className: 'font-semibold text-gray-900 mb-1' }, 'Adresse'),
                  React.createElement('p', { className: 'text-gray-600' }, personalInfo.address),
                  React.createElement('p', { className: 'text-sm text-gray-500' }, 'Verviers, Belgique')
                ])
              ])
            ])
          ]),React.createElement('div', { 
            className: 'bg-white rounded-2xl p-6 shadow-lg border border-gray-200'
          }, [
            React.createElement('h4', { className: 'font-bold text-gray-900 mb-4' }, 'Disponibilité'),
            React.createElement('div', { className: 'space-y-3' }, [
              React.createElement('div', { className: 'flex justify-between items-center' }, [
                React.createElement('span', { className: 'text-gray-600' }, 'Statut'),
                React.createElement('span', { 
                  className: 'text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-full text-sm border border-emerald-200'
                }, 'Disponible immédiatement')
              ]),
              React.createElement('div', { className: 'flex justify-between items-center' }, [
                React.createElement('span', { className: 'text-gray-600' }, 'Type de contrat'),
                React.createElement('span', { className: 'text-gray-900 font-semibold' }, 'CDI, CDD, Intérim')
              ]),
              React.createElement('div', { className: 'flex justify-between items-center' }, [
                React.createElement('span', { className: 'text-gray-600' }, 'Zone géographique'),
                React.createElement('span', { className: 'text-gray-900 font-semibold' }, 'Liège, Verviers et environs')
              ])
            ])
          ])
        ]),
        // QR Code Section
        React.createElement('div', { className: 'flex flex-col items-center justify-center space-y-8' }, [
          React.createElement('div', { 
            className: 'bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center'
          }, [
            React.createElement('h3', { 
              className: 'text-2xl font-bold text-gray-900 mb-6'
            }, 'Accès Rapide à Mon CV'),
            React.createElement('div', { className: 'bg-white p-6 rounded-lg shadow-inner border border-gray-200 mb-4' }, [
              React.createElement('img', {
                src: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(window.location.href)}`,
                alt: 'QR Code pour accéder au CV d\'Ibrahim Gabaev',
                style: { width: '200px', height: '200px', margin: '0 auto' }
              })
            ]),
            React.createElement('p', { className: 'text-gray-600 text-sm mb-2' }, 'Scannez ce QR code avec votre téléphone'),
            React.createElement('p', { className: 'text-gray-500 text-xs' }, 'pour accéder instantanément à mon CV en ligne')
          ]),
          React.createElement('div', { 
            className: 'bg-gradient-to-r from-emerald-50 to-yellow-50 rounded-2xl p-6 border border-emerald-200 shadow-lg text-center'
          }, [
            React.createElement('h4', { className: 'text-lg font-bold text-gray-900 mb-3' }, 'Partagez Mon Profil'),
            React.createElement('p', { className: 'text-gray-600 text-sm mb-4' }, 'Partagez facilement mon CV avec vos contacts professionnels'),
            React.createElement('div', { 
              className: 'bg-white px-4 py-2 rounded-lg border border-gray-200 text-xs text-gray-700 font-mono break-all'
            }, window.location.href)
          ])
        ])
      ])
    ])
  ]);
}// Footer Component
function Footer() {
  const currentYear = new Date().getFullYear();
  
  return React.createElement('footer', {
    className: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12'
  }, [
    React.createElement('div', { className: 'max-w-6xl mx-auto px-6' }, [
      React.createElement('div', { className: 'grid md:grid-cols-3 gap-8' }, [
        React.createElement('div', { className: 'space-y-4' }, [
          React.createElement('h3', { 
            className: 'text-xl font-bold gradient-text'
          }, personalInfo.name),
          React.createElement('p', { className: 'text-gray-300' }, personalInfo.title),
          React.createElement('p', { className: 'text-gray-400 text-sm leading-relaxed' }, 'Coursier livreur expérimenté, fiable et ponctuel. Disponible immédiatement pour vos besoins de livraison et logistique.')
        ]),
        React.createElement('div', { className: 'space-y-4' }, [
          React.createElement('h4', { className: 'text-lg font-semibold text-white' }, 'Contact Rapide'),
          React.createElement('div', { className: 'space-y-3' }, [
            React.createElement('div', { className: 'flex items-center space-x-3 text-gray-300' }, [
              React.createElement('span', { className: 'text-emerald-400' }, '📞'),
              React.createElement('span', { className: 'text-sm' }, personalInfo.phone)
            ]),
            React.createElement('div', { className: 'flex items-center space-x-3 text-gray-300' }, [
              React.createElement('span', { className: 'text-emerald-400' }, '✉️'),
              React.createElement('span', { className: 'text-sm' }, personalInfo.email)
            ]),
            React.createElement('div', { className: 'flex items-center space-x-3 text-gray-300' }, [
              React.createElement('span', { className: 'text-emerald-400' }, '📍'),
              React.createElement('span', { className: 'text-sm' }, 'Verviers, Belgique')
            ])
          ])
        ]),
        React.createElement('div', { className: 'space-y-4' }, [
          React.createElement('h4', { className: 'text-lg font-semibold text-white' }, 'Navigation'),
          React.createElement('div', { className: 'space-y-2' }, [
            React.createElement('button', {
              className: 'block text-gray-300 hover:text-emerald-400 transition-colors text-sm',
              onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
            }, 'Expérience'),
            React.createElement('button', {
              className: 'block text-gray-300 hover:text-emerald-400 transition-colors text-sm',
              onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
            }, 'Compétences'),
            React.createElement('button', {
              className: 'block text-gray-300 hover:text-emerald-400 transition-colors text-sm',
              onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }, 'Contact')
          ])
        ])
      ]),
      React.createElement('div', { className: 'border-t border-gray-700 mt-8 pt-8' }, [
        React.createElement('div', { className: 'flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0' }, [
          React.createElement('div', { className: 'text-gray-400 text-sm' }, `© ${currentYear} ${personalInfo.name}. Tous droits réservés.`),
          React.createElement('div', { className: 'flex items-center space-x-1 text-gray-400 text-sm' }, [
            React.createElement('span', null, 'Créé avec'),
            React.createElement('span', { className: 'text-yellow-400' }, '❤️'),
            React.createElement('span', null, 'pour mes futurs employeurs')
          ])
        ])
      ])
    ])
  ]);
}

// Render the app
ReactDOM.render(React.createElement(App), document.getElementById('root'));
