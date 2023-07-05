import { motion } from "framer-motion";

const EducationPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>This is the EducationPage</h1>
    </motion.main>
  );
};

export default EducationPage;
