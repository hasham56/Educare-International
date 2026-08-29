// Single source of truth for how visitors reach EduCare.
//
// Two numbers, two different jobs — keep them apart:
//   • phone    — the landline listed on Google Maps. This is the CALL number.
//                Clicking it opens a confirm prompt (see shared/CallLink.jsx).
//   • whatsapp — mobile, for chat only. Never rendered as a `tel:` link.

export const CONTACT = {
  // Call
  phone:    '042 35296000',
  phoneIntl: '+92 42 3529 6000',
  phoneTel: '+924235296000',

  // WhatsApp (chat only — do not use for tel: links)
  whatsapp:       '+92 300 7955551',
  whatsappNumber: '923007955551',

  email:     'info@educareinternational.pk',
  address:   'Allama Iqbal Town, Lahore',
  hours:     'Mon – Sat: 9 AM – 7 PM',
  mapsUrl:   'https://maps.app.goo.gl/EsjNKmbxyrkVfsej6',
  facebook:  'https://www.facebook.com/educare.lhr',
  instagram: 'https://www.instagram.com/educare.international/',
};

// Pre-filled WhatsApp openers, keyed by what the visitor was looking at when
// they tapped through. `general` is the fallback for any unknown key.
export const WHATSAPP_MESSAGES = {
  ielts:
    "Hello EduCare! I'd like to know more about your IELTS preparation course — batch timings, fees and the next starting date.",
  pte:
    "Hello EduCare! I'd like to know more about your PTE Academic course — batch timings, fees and the next starting date.",
  spoken:
    "Hello EduCare! I'd like to know more about your Spoken English classes — batch timings, fees and the next starting date.",
  visa:
    "Hello EduCare! I'd like to know more about your visa & student consultancy services.",
  general:
    "Hello EduCare! I'd like to know more about your programs and admissions.",
};

// Maps the labels used in the contact form's service dropdown onto topic keys,
// so the WhatsApp CTA follows whatever the visitor picked.
export const SERVICE_TOPICS = {
  'IELTS Preparation': 'ielts',
  'PTE Academic': 'pte',
  'Spoken English': 'spoken',
  'Visa Consultancy': 'visa',
  Other: 'general',
};

/**
 * Build a WhatsApp deep link with the right opener already typed out.
 * @param {keyof typeof WHATSAPP_MESSAGES} [topic] — defaults to 'general'.
 */
export const whatsappHref = (topic = 'general') => {
  const text = WHATSAPP_MESSAGES[topic] ?? WHATSAPP_MESSAGES.general;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
};
