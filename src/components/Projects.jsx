import { PROJECTS } from "../constants";
import { animate, motion } from "framer-motion";
import { FaLink, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 mt-8 flex flex-wrap lg:justify-center rounded-md shadow-md"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 mt-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 mt-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-purple-200 px-2 py-1 text-sm font-medium text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Buttons for GitHub and Live */}
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" rounded bg-purple-700 px-4 py-2 text-white hover:bg-purple-600 transition-all flex items-center gap-2"
                >
                  <FaLink className="inline-block" />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-600 transition-all flex items-center gap-2"
                  >
                    <FaArrowRight className="inline-block" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
