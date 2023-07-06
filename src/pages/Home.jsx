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
      className="relative flex flex-col pt-28 small:pt-12"
    >
      <div className="flex flex-col-reverse items-center gap-4">
        <section className="flex w-[95%] flex-col">
          <div>
            <h1 className="flex flex-col font-serif text-3xl text-gray-800 small:text-4xl">
              <span>Hola,</span>
              <span>soy Brandon Agüero</span>
            </h1>
            <h2 className="font-serif text-gray-700">
              Soy un Frontend Developer
            </h2>
            <p className="font-sans text-gray-600">
              ¡Bienvenido a mi portafolio! Aquí podrás explorar mis proyectos,
              habilidades y educación. Si estás interesado en colaborar, no
              dudes en contactarme.
            </p>
          </div>
          <footer>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/brandonaguero/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/BrandonAguero" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=+51987398362&text=Hola,%20soy..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:name.brandon.aguero@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gmail
                </a>
              </li>
            </ul>
          </footer>
        </section>
        <motion.figure
          className="h-44 w-44 max-xl:rounded-full small:h-60 small:w-60"
          initial={{ scale: 0.8 }}
          animate={{
            scale: 1,
            boxShadow: "0px 0px 10px rgba(0, 0, 255, 0.3)",
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            className="h-full w-full rounded-full object-cover object-top"
            src="/png/profileHomeTwo.png"
            alt="Foto de perfil del creador de la página web"
          />
        </motion.figure>
      </div>
    </motion.main>
  );
};

export default Home;
