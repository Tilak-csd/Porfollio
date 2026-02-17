// const Footer = () => (
//   <footer className="border-t border-slate-200 py-12 mt-20">
//     <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
//       <div className="text-slate-500 text-sm">
//         © {new Date().getFullYear()} Tilak M. Gubhaju. All Rights Reserved.
//       </div>
//       <div className="flex gap-6 text-sm font-medium text-slate-400">
//         <span>Built with React & Tailwind</span>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;

import { motion } from "framer-motion";

const Footer = () => {
    const text = "tialk man gubhaju"
  const words = text.split(" ");

  // Container variants to control the "stagger" effect
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Child variants for individual words
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      className="flex flex-wrap text-3xl font-bold"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-2" // Space between words
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Footer;