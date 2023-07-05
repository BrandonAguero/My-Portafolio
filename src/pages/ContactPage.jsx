import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.5,
          ease: "easeInOut",
        },
      }}
    >
      <h1>This is the ContactPage</h1>
    </motion.main>
  );
};

export default ContactPage;
