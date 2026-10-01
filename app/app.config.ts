export default defineAppConfig({
  global: {
    picture: {
      dark: '/hero/anass-radi.png',
      light: '/hero/anass-radi.png',
      alt: 'Anass Radi'
    },
    email: 'mranass.deu@gmail.com',
    resume: '/Anass_Radi_CV.pdf',
    available: true
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  },
  footer: {
    credits: `© ${new Date().getFullYear()} Anass Radi. All rights reserved.`,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/MRANASSPRO',
      'target': '_blank',
      'aria-label': 'Anass Radi on GitHub'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/anass-radi1',
      'target': '_blank',
      'aria-label': 'Anass Radi on LinkedIn'
    }, {
      'icon': 'i-lucide-mail',
      'to': 'mailto:mranass.deu@gmail.com',
      'aria-label': 'Email Anass Radi'
    }]
  }
})
