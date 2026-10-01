import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  driveViewUrl?: string;
}

const DEFAULT_DRIVE_ID = '1OmepR2CKCngEmjJcLW0gsAugGYxi_vJB';

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  driveViewUrl = `https://drive.google.com/file/d/${DEFAULT_DRIVE_ID}/view?usp=sharing`,
}) => {
  // Extract drive ID from link if available
  const match = driveViewUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  const fileId = match ? match[1] : DEFAULT_DRIVE_ID;

  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const directDownloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2D1412]/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl h-[88vh] bg-[#F7F2E9] rounded-3xl border border-[#E5DBD0] shadow-2xl overflow-hidden z-10 flex flex-col my-auto"
        >
          
          {/* Modal Toolbar Header */}
          <div className="p-4 sm:p-5 bg-[#F4EFE9] border-b border-[#E5DBD0] flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#FBE8E8] text-accent-700 border border-[#F7D0D0]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-[#3A1F1D] flex items-center gap-2">
                  Resume Preview &mdash; Riddhi Bandyopadhyay
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#FBE8E8] text-accent-800 border border-[#F7D0D0] text-[10px] font-mono">
                    <Sparkles className="w-3 h-3 text-accent-600" /> Live Drive PDF
                  </span>
                </h3>
                <p className="text-xs text-[#8C6E66]">
                  Backend-Focused Full Stack Engineer
                </p>
              </div>
            </div>

            {/* Actions (Download PDF, Open Drive, Close) */}
            <div className="flex items-center gap-2">
              <a
                href={directDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-medium text-xs shadow-md shadow-accent-600/20 transition-all hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <a
                href={driveViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:px-3 sm:py-2 rounded-xl bg-[#F7F2E9] text-[#3A1F1D] hover:bg-[#F4EFE9] border border-[#E5DBD0] text-xs font-medium transition-colors flex items-center gap-1.5"
                title="Open in Google Drive"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden md:inline">Google Drive</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#F7F2E9] text-[#3A1F1D] hover:text-accent-600 border border-[#E5DBD0] transition-colors"
                aria-label="Close resume preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Preview iFrame */}
          <div className="flex-1 bg-[#EDE4D8] relative overflow-hidden">
            <iframe
              src={previewUrl}
              title="Riddhi Bandyopadhyay Resume Preview"
              className="w-full h-full border-none"
              allow="autoplay"
            />
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
