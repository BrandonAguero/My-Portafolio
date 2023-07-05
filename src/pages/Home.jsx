import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1>ESte es el home</h1>
    </motion.main>
  );
};

export default Home;
