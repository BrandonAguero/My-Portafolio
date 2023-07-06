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
      className="relative flex flex-col"
    >
      <div className="flex flex-col-reverse items-center gap-4 md:flex-row md:px-4 lg:px-6 xl:px-8">
        <section className="flex w-[95%] flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="flex flex-col font-serif text-3xl font-bold text-gray-800 small:text-4xl super:text-5xl 2md:text-6xl xl:text-7xl">
              <span>Hola,</span>
              <span>soy Brandon Agüero</span>
            </h1>
            <h2 className="font-serif text-xl font-semibold text-gray-700 small:text-2xl super:text-3xl 2md:text-4xl xl:text-5xl">
              Frontend Developer
            </h2>
            <p className="font-sans text-base font-normal text-gray-600 small:text-lg super:text-xl 2md:text-2xl xl:text-3xl">
              ¡Bienvenido a mi portafolio! Aquí podrás explorar mis proyectos,
              habilidades y educación. Si estás interesado en colaborar, no
              dudes en contactarme.
            </p>
          </div>
          <footer>
            <ul className="flex gap-4">
              <li className="">
                <a
                  href="https://www.linkedin.com/in/brandonaguero/"
                  target="_blank"
                >
                  <i className="bx bxl-linkedin bx-tada text-blue-500"></i>{" "}
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/BrandonAguero" target="_blank">
                  <i className="bx bxl-github bx-tada text-gray-800"></i>Github
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=+51987398362&text=Hola,%20soy..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-whatsapp bx-tada text-green-500"></i>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:name.brandon.aguero@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-gmail bx-tada text-red-600"></i> Gmail
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
