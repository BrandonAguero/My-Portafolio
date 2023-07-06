import { motion } from "framer-motion";

const Home = () => {
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
      className="relative top-24 flex flex-col"
    >
      <div>
        <section>
          <div>
            <h1>
              <span>Hola,</span>
              <span>soy Brandon Agüero</span>
            </h1>
            <h2>Soy un Frontend Developer</h2>
            <p>
              ¡Bienvenido a mi portafolio! Aquí podrás explorar mis proyectos,
              habilidades y educación. Si estás interesado en colaborar, no
              dudes en contactarme.
            </p>
          </div>
          <footer>
            <ul>
              <li>LinkedIn</li>
              <li>Github</li>
              <li>WhatsApp</li>
              <li>Gmail</li>
            </ul>
          </footer>
        </section>
        <figure>
          <img
            src="/png/profileHomeTwo.png"
            alt="Foto de perfil del creado de la pagina web"
          />
        </figure>
      </div>
    </motion.main>
  );
};

export default Home;
