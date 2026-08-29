// CallLink — the landline (the number listed on Google Maps) rendered as a
// click-to-call control.
//
// A bare `tel:` link dials straight away on a phone and does nothing at all on
// most desktops. So instead of linking directly, clicking here opens a small
// confirm sheet: the visitor sees the number, then chooses "Call now" (which
// hands off to the dialler) or "Copy number". Same behaviour everywhere.

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Copy, Check, X } from 'lucide-react';

import { CONTACT } from './contact';

export default function CallLink({
  children,
  className = '',
  style,
  accent = '#4A1D7A',
  label = 'Call EduCare International',
  onClick,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Escape to dismiss, and hold the page still while the sheet is up.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && close();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.phoneIntl);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          onClick?.(e);
          setOpen(true);
        }}
        className={className}
        style={style}
        aria-haspopup="dialog"
        aria-label={`${label} on ${CONTACT.phoneIntl}`}
        {...rest}
      >
        {children ?? CONTACT.phone}
      </button>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={close}
                role="dialog"
                aria-modal="true"
                aria-labelledby="call-prompt-title"
              >
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(20,10,32,0.55)', backdropFilter: 'blur(2px)' }}
                  aria-hidden="true"
                />

                <motion.div
                  className="relative w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl"
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close"
                    className="absolute right-3 top-3 rounded-lg p-1.5 text-[#5B5566] transition-colors hover:bg-black/5"
                  >
                    <X size={18} />
                  </button>

                  <span
                    className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: `${accent}1A`, color: accent }}
                  >
                    <Phone size={26} aria-hidden="true" />
                  </span>

                  <h2
                    id="call-prompt-title"
                    className="text-lg font-extrabold"
                    style={{ color: '#2D2A32' }}
                  >
                    Call EduCare International?
                  </h2>

                  <p className="mt-1 text-sm" style={{ color: '#5B5566' }}>
                    {CONTACT.hours}
                  </p>

                  <p
                    className="mt-4 text-2xl font-extrabold tracking-tight"
                    style={{ color: accent }}
                  >
                    {CONTACT.phoneIntl}
                  </p>

                  <a
                    href={`tel:${CONTACT.phoneTel}`}
                    onClick={close}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: accent }}
                  >
                    <Phone size={18} aria-hidden="true" />
                    Call now
                  </a>

                  <button
                    type="button"
                    onClick={copy}
                    className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-colors"
                    style={{ borderColor: '#EFE9F8', color: '#2D2A32' }}
                  >
                    {copied ? (
                      <>
                        <Check size={16} aria-hidden="true" />
                        Number copied
                      </>
                    ) : (
                      <>
                        <Copy size={16} aria-hidden="true" />
                        Copy number
                      </>
                    )}
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
