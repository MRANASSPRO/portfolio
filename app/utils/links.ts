export interface AnchorLink {
  label: string
  to: string
}

export const navLinks: AnchorLink[] = [
  { label: 'About', to: '#about' },
  { label: 'Experience', to: '#experience' },
  { label: 'Skills', to: '#skills' },
  { label: 'Projects', to: '#projects' },
  { label: 'Education', to: '#education' },
  { label: 'Contact', to: '#contact' }
]
