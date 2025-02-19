import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button 
        onClick={() => setOpen(!isOpen)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isOpen ? 'Close' : 'Open'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-red-500 p-10 mt-4 rounded shadow-lg"
          >
            Hello
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
