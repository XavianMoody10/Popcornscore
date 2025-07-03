import { ClipLoader } from "react-spinners";
import { AnimatePresence, motion } from "motion/react";

export const PageLoadingOverlay = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1 }}
          className=" fixed top-0 left-0 right-0 bottom-0 h-screen w-full bg-white flex items-center justify-center z-20"
        >
          <ClipLoader color="#947EE6" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
