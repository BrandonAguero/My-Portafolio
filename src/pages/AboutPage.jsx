import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>This is a AboutPage</h1>
    </motion.main>
  );
};

export default AboutPage;
