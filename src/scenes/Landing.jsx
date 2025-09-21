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
      <div
        className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-40"
        data-aos="fade-up"
        data-aos-delay="50"
      >
        {isAboveLargeScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 before:rounded-t-[400px]
          before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[300px]"
              src="assets/profile-image1.AVIF"
              data-aos="fade-up"
              data-aos-delay="50"
            />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
              src="assets/profile-image1.AVIF"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
        )}
      </div>

      {/* Main section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* Headings */}
        <div
          data-aos="fade-down"
          data-aos-delay="100"
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
            Hello! I am  the Founder of CookGPT.io, a passionate Full Stack Developer, and
            a dedicated Tech Educator with strong IT credentials. I love building
            scalable AI systems solving complex problems,
            and exploring new technologies to create impactful solutions.
            When I am not coding or teaching, you will find me hiking,
            immersed in a good book, or practicing transcendental
            meditation to stay mindful and productive.
            <br />
            Let&lsquo;s build something amazing together!
          </p>
        </div>
        {/* Get in touch */}
        <div
          className="flex mt-5 justify-center md:justify-start"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-lg py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            href="#contact"
          >
            Get in touch
          </AnchorLink>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <SocialMediaIcons />
        </div>
      </div>

    </section>
  );
};

export default Landing;
