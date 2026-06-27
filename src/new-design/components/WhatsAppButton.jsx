import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsappHref } from '../theme';

const WhatsAppGlyph = ({ size = 30 }) => (
  <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M16.04 4C9.46 4 4.1 9.36 4.1 15.94c0 2.1.55 4.15 1.6 5.96L4 28l6.27-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.58 0 11.94-5.36 11.94-11.94C27.99 9.36 22.63 4 16.04 4Zm0 21.6h-.01a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.72.98.99-3.63-.23-.37a9.59 9.59 0 0 1-1.47-5.12c0-5.31 4.32-9.63 9.64-9.63 2.57 0 4.99 1 6.81 2.82a9.56 9.56 0 0 1 2.82 6.82c0 5.31-4.32 9.62-9.63 9.62Zm5.28-7.2c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.65.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.24-.56-.48-.49-.65-.5-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.77.36-.27.29-1.01.99-1.01 2.41 0 1.42 1.04 2.8 1.18 2.99.15.19 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z" />
  </svg>
);

export default function WhatsAppButton() {
  const [hover, setHover] = useState(false);

  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with EduCare on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 18 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
    >
      {/* expanding label */}
      <AnimatePresence>
        {hover && (
          <motion.span
            initial={{ opacity: 0, x: 8, width: 0 }}
            animate={{ opacity: 1, x: 0, width: 'auto' }}
            exit={{ opacity: 0, x: 8, width: 0 }}
            transition={{ duration: 0.22 }}
            className="mr-3 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2D2A32] shadow-lg hidden sm:block"
          >
            Chat with us
          </motion.span>
        )}
      </AnimatePresence>

      <span className="relative flex items-center justify-center">
        {/* pulse ring */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: '#25D366' }}
          animate={{ scale: [1, 1.45, 1], opacity: [0.45, 0, 0.45] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
        />
        <motion.span
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl"
          style={{ background: '#25D366', boxShadow: '0 12px 28px rgba(37,211,102,0.45)' }}
        >
          <WhatsAppGlyph />
        </motion.span>
      </span>
    </motion.a>
  );
}
