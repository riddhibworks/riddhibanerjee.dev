import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error';
  title: string;
  description: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full px-4 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-2xl shadow-xl border backdrop-blur-xl ${
              toast.type === 'success'
                ? 'bg-[#FAF6F0] border-accent-600/40 text-[#3A1F1D]'
                : 'bg-[#FAF6F0] border-accent-600/60 text-[#3A1F1D]'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-accent-700 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-accent-600 shrink-0 mt-0.5" />
            )}
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-[#3A1F1D]">{toast.title}</h4>
              <p className="text-xs text-[#614B47] mt-1 leading-relaxed">{toast.description}</p>
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="text-[#8C6E66] hover:text-[#3A1F1D] p-1 rounded-lg transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
