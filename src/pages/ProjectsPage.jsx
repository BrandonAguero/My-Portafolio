import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>This a ProjectsPage</h1>
    </motion.main>
  );
};

export default ProjectsPage;
