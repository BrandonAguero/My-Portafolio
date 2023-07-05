import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>This is the ContactPage</h1>
    </motion.main>
  );
};

export default ContactPage;
