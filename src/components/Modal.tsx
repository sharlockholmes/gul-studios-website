import { useEffect, useId, useRef } from 'react';
import type React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className = '' }) => {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    const timer = window.setTimeout(() => dialogRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', onKeyDown);
      previousFocus.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F1E1B]/60 backdrop-blur-md overflow-y-auto" onMouseDown={(event) => event.currentTarget === event.target && onClose()}>
      <div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} className={`glass-card-light w-full p-6 sm:p-8 rounded-3xl border border-[#E5E1D8] relative bg-[#FDFBF7] shadow-2xl my-8 outline-none ${className}`}>
        <h2 id={titleId} className="sr-only">{title}</h2>
        {children}
      </div>
    </div>
  );
};
