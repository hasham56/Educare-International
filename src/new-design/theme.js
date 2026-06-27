// Design tokens for the /new-design experience.
// Inspired by the EduCare "Where Education Meets Care" brand poster:
// deep royal purple + gold accents, premium / editorial education feel.

export const C = {
  royal:     '#4A1D7A', // primary deep royal purple ("Edu" / poster IELTS)
  royalDark: '#37145C', // deeper purple for gradients / hovers
  royalDeep: '#2A0E47', // deepest — footer / dark bands
  violet:    '#6B3FA0', // mid secondary purple
  lilac:     '#B79CE0', // light purple accent on dark surfaces
  lilacSoft: '#EFE9F8', // card borders, chips, icon-badge backgrounds
  ink:       '#2D2A32', // charcoal — headings on light ("Care")
  gold:      '#C9A227', // accent rules, highlights
  goldSoft:  '#E4C766', // lighter gold (on dark surfaces)
  cloud:     '#F7F5FB', // light page tint
  body:      '#5B5566', // muted body text on light
  white:     '#FFFFFF',
};

// Gradient presets reused across dark sections.
export const GRADIENTS = {
  hero:  'linear-gradient(135deg, #37145C 0%, #4A1D7A 52%, #6B3FA0 100%)',
  band:  'linear-gradient(135deg, #2A0E47 0%, #4A1D7A 60%, #6B3FA0 100%)',
  deep:  'linear-gradient(160deg, #2A0E47 0%, #37145C 100%)',
};

// Contact details (sourced from the brand poster).
export const CONTACT = {
  whatsappNumber: '923007955551',          // +92 300 7955551 (mobile)
  whatsappMessage:
    "Hello EduCare! I'd like to know more about your IELTS / PTE / Visa programs.",
  mobile:    '0300 7955551',
  mobileTel: '+923007955551',
  landline:  '042 35296000',
  landlineTel: '+924235296000',
  email:     'info@educareinternational.pk',
  address:   'Allama Iqbal Town, Lahore',
  mapsUrl:   'https://maps.app.goo.gl/EsjNKmbxyrkVfsej6',
  facebook:  'https://www.facebook.com/educare.lhr',
  instagram: 'https://www.instagram.com/educare.international/',
};

export const whatsappHref = () =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;

export const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'Programs', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Why Us',   href: '#why-us' },
  { label: 'Results',  href: '#testimonials' },
  { label: 'Contact',  href: '#contact' },
];
