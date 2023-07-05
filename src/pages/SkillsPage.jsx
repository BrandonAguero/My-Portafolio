import { motion } from "framer-motion";

const SkillsPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>This is the SkillsPage</h1>
    </motion.main>
  );
};

export default SkillsPage;
