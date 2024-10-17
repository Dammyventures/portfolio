import { motion } from "framer-motion";
import { styles } from "../styles";
import { cv } from "../assets";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[10px] phone:top-[-140px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-center items-center gap-40 tablet:gap-20 phone:gap-8`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white laptop:text-[100px] tablet:text-[70px]`}>
            Hi, I'm <span className="text-[#915eff]">Silas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Data Analyst, Database Administrator <br className="sm:block hidden" /> and a Project Manager.
          </p>
        </div>
      </div>

      {/* CTA Buttons Section */}
      <div className="absolute bottom-[200px]  phone:bottom-[250px] w-full flex flex-col justify-center items-center">
        <div className="cta mt-5 gap-4 flex flex-row">
          <a href={cv} download className='bg-purple-600 text-white py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105'>
            Download CV
          </a>
          <a href="#contact" className='bg-white text-black py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105'>
            Let's Talk
          </a>
        </div>
      </div>
<ComputersCanvas className='mt-[200px]'/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
