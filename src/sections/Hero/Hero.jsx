import heroImg from '../../assets/hero-img.png';
import styles from './HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import gitLight from '../../assets/github-light.svg';
import gitDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import cv from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const gitIcon = theme === 'light' ? gitLight : gitDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className="relative h-screen w-full">
      {/* Grid Background */}
      <div className="h-screen w-full bg-primary bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      {/* Hero Content */}
      <div className={`${styles.container} relative z-10 flex flex-col md:flex-row items-center justify-center h-full`}>
        <div className={styles.ColorModeContainer}>
          <img
            className={styles.hero}
            src={heroImg}
            alt="Profile picture of Shaik Azeem"
          />
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt={`Toggle to ${theme === 'light' ? 'dark' : 'light'} mode`}
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1 className="text-5xl font-bold text-white">Azeem <br /> Shaik</h1>
          <h2 className="text-2xl text-gray-300 mt-2">Front-end Developer</h2>
          <div className="flex gap-4 mt-4">
            <a href="https://x.com/shaikazeem2069" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter profile" className="w-8 h-8" />
            </a>
            <a href="https://github.com/shaikazeem2001" target="_blank" rel="noopener noreferrer">
              <img src={gitIcon} alt="GitHub profile" className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/shaik-azeem-817886233/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn profile" className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-300 mt-4 max-w-md">
            Passionate about building modern React web apps, including my social media platform,{' '}
            <a
              href="https://github.com/tbznmknn/radnaa-next-social-media-app"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Radnaa
            </a>
            , built with Next.js and Stream Chat.
          </p>
          <a href={cv} download className="mt-6 inline-block">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
