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
      className="flex flex-col"
    >
      <div className="flex flex-col-reverse items-center gap-4 md:flex-row md:px-4 lg:px-6 xl:px-8">
        <section className="flex w-[95%] flex-col gap-2 medium:gap-4 super:gap-6 2md:gap-8">
          <div className="flex flex-col gap-2 super:gap-4">
            <h1 className="flex flex-col font-serif text-3xl font-bold text-gray-800 small:text-4xl super:text-5xl 2md:text-6xl xl:text-7xl">
              <span>Hola,</span>
              <span>soy Brandon Agüero</span>
            </h1>
            <h2 className="font-serif text-xl font-semibold text-gray-700 small:text-2xl super:text-3xl 2md:text-4xl xl:text-5xl">
              Frontend Developer
            </h2>
            <p className="font-sans text-base font-normal text-gray-600 small:text-lg super:text-xl 2md:text-2xl xl:text-3xl">
              ¡Bienvenido a mi página web! Soy estudiante de Academlo. Explora
              mis proyectos y habilidades, y no dudes en contactarme para
              colaborar en emocionantes proyectos.
            </p>
          </div>
          <footer className="flex justify-center md:justify-start">
            <ul className="flex w-[93%] flex-wrap justify-center gap-4 max-large:max-w-[15rem] super:gap-6 md:justify-start">
              <li className="text-base">
                <a
                  href="https://www.linkedin.com/in/brandonaguero/"
                  target="_blank"
                  className="group relative inline-flex items-center gap-1 font-mono"
                >
                  <i className="bx bxl-linkedin bx-tada text-blue-500"></i>
                  <span className="text-base text-gray-600 small:text-xl">
                    LinkedIn
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 w-full origin-left scale-x-0 transform bg-blue-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li className="text-base">
                <a
                  href="https://github.com/BrandonAguero"
                  target="_blank"
                  className="group relative inline-flex items-center gap-1 font-mono"
                >
                  <i className="bx bxl-github bx-tada text-gray-800"></i>
                  <span className="text-base text-gray-600 small:text-xl">
                    Github
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 w-full origin-left scale-x-0 transform bg-gray-800 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li className="text-base">
                <a
                  href="https://api.whatsapp.com/send?phone=+51987398362&text=Hola,%20soy..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-1 font-mono"
                >
                  <i className="bx bxl-whatsapp bx-tada text-green-500"></i>
                  <span className="text-base text-gray-600 small:text-xl">
                    WhatsApp
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 w-full origin-left scale-x-0 transform bg-green-500 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li className="text-base">
                <a
                  href="mailto:name.brandon.aguero@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-1 font-mono"
                >
                  <i className="bx bxl-gmail bx-tada text-red-600"></i>
                  <span className="text-base text-gray-600 small:text-xl">
                    Gmail
                  </span>
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 w-full origin-left scale-x-0 transform bg-red-600 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            </ul>
          </footer>
        </section>
        <motion.figure
          className="h-44 w-44 max-xl:rounded-full small:h-60 small:w-60 super:h-72 super:w-72 md:rounded-xl  2md:h-96 2md:w-96 xl:h-[30rem] xl:w-[30rem]"
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
            className="h-full w-full rounded-full object-cover object-top md:rounded-xl"
            src="/png/profileHomeTwo.png"
            alt="Foto de perfil del creador de la página web"
          />
        </motion.figure>
      </div>
    </motion.main>
  );
};

export default Home;
