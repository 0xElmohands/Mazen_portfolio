
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onDismiss: () => void;
}

const LoadingScreen = ({ onDismiss }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      <motion.div
        key="loading-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(5, 8, 22, 0.55)' }}
      >
        {/* Dismiss button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
          onClick={onDismiss}
          className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
          title="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </motion.button>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative flex flex-col items-center gap-6 px-12 py-10 rounded-2xl"
          style={{
            background: 'rgba(15, 20, 40, 0.75)',
            border: '1px solid rgba(139, 92, 246, 0.25)',
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.15), 0 20px 60px rgba(0,0,0,0.4)',
          }}
        >
          {/* Spinner */}
          <div className="relative w-20 h-20 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="absolute w-full h-full rounded-full border-t-2 border-r-2 border-primary"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              className="absolute w-14 h-14 rounded-full border-b-2 border-l-2 border-blue-500"
            />
            <span className="text-lg font-mono font-bold text-white flex items-center">
              <span className="text-primary">&lt;</span>
              M
              <span className="text-primary">/&gt;</span>
            </span>
          </div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xs text-gray-400 font-mono tracking-widest uppercase"
          >
            Initializing System...
          </motion.p>

          {/* Progress bar */}
          <div className="w-40 h-0.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="h-full rounded-full bg-gradient-to-r from-primary to-blue-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
