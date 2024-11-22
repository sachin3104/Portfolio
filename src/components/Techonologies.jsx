import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { SiTailwindcss, SiDjango } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Techonogies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 pt-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(1.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-green-900"
        >
          <SiDjango className="text-7xl text-white bg-green-900" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <AiOutlineApi className="text-7xl text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="inital"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BsBootstrap className="text-7xl text-purple-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Techonogies;
