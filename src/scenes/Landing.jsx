import { motion } from 'framer-motion';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Landing = () => {
  const isAboveLargeScreens = useMediaQuery('(min-width:1060px)');

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* Image section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-40">
        {isAboveLargeScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 before:rounded-t-[400px]
          before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[300px]"
              src="assets/profile-image1.AVIF"
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
              src="assets/profile-image1.AVIF"
            />
          </div>
        )}
      </div>

      {/* Main section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* Headings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Binod
            {' '}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20
            xs:before:content-brush before:absolute before:-left-[30px] before:-top-[60px]
             before:z-[-1]"
            >
              Bhusal
            </span>
          </p>
          <p className="mt-10 mb-7 text-xl text-center md:text-start">
            Hello friends, I am full stack passionate developer with impressive IT credentials,
            a keen eye for detail and a love for problem-solving. I am constantly striving to
            improve my skills and embrace new technologies. When I am not coding, you can find me
            hiking in the great outdoors or immersed in a good book.
            I also spend time on transcendental
            meditation to sustain my awareness and productivity.
            <br />
            Let&lsquo;s build something great together!
          </p>
        </motion.div>
        {/* Get in touch */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-lg py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            href="#contact"
          >
            Get in touch
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>

    </section>
  );
};

export default Landing;
