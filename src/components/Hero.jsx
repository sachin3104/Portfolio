import { HERO_CONTENT } from "../constants";
import { animate, motion } from "framer-motion";

const container = (delay = 0) => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  return (
    <div className="h-[calc(100vh-96px)] flex items-start justify-center border-b border-neutral-900 mb-20 lg:mb-20 pt-10">
      <div className="flex flex-wrap justify-center text-center w-full max-w-screen-lg">
        <div className="flex w-full flex-col items-center lg:items-center">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-thin tracking-tight lg:text-8xl"
          >
            Sachin Jakhar
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            Software Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl py-6 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
