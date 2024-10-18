import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMapPin, FiMail } from "react-icons/fi";
import { SiInstagram, SiLinkedin, SiGithub, SiX } from "react-icons/si";

const Bento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto max-w-4xl grid grid-cols-12 gap-4 grid-flow-dense"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ children, className, ...motionProps }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      // className={`col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6 ${className}`}{...motionProps}>
      className={twMerge(
        `col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6`,
        className
      )}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        className="mb-4 size-14 rounded-full"
        src="https://api.dicebear.com/9.x/lorelei-neutral/svg?seed=Luis"
        alt="avatar"
      />
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Sertifikat Farid Ardiansyah.{" "}
        <span className="text-zinc-400">
          Web Sertifikat ini untuk daftar list sertifikat apa aja yang saya lakukan selama di dunia
        </span>
      </h1>
      <a
        href="#"
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        Contact Me <FiArrowRight />
      </a>
    </Block>
  );
};

const SocialsBlock = () => {
  return (
    <>
      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className={`col-span-6 bg-black md:col-span-3`}
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiGithub />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className={`col-span-6 bg-blue-700 md:col-span-3`}
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiLinkedin />
        </a>
      </Block>
      <Block
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className={`col-span-6 bg-gradient-to-br from-purple-700 via-red-500 to-yellow-300 md:col-span-3`}
      >
        <a
          href="https://www.instagram.com/fardardinsyh/"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiInstagram />
        </a>
      </Block>

      <Block
        whileHover={{
          rotate: "-2.5deg",
          scale: 1.1,
        }}
        className={`col-span-6 bg-neutral-800 md:col-span-3`}
      >
        <a
          href="#"
          className="grid h-full place-content-center text-3xl text-white"
        >
          <SiX />
        </a>
      </Block>
    </>
  );
};

const AboutBlock = () => {
  return (
    <Block className={`col-span-12 text-3xl leading-snug`}>
      <p>Sertifikat. </p>
      <span className="text-zinc-400">
        DRONE - Lembaga Pengembangan Komputer Universitas Gunadarma (03 April 2023)
		MINICOMPUTER - Lembaga Pengembangan Komputer Universitas Gunadarma (31 August 2022)
		MICROCONTROLLER - Lembaga Pengembangan Komputer Universitas Gunadarma (15 August 2022)
		JavaScript Programming Language Fundamental - Lembaga Pengembangan Komputer Universitas Gunadarma (18 June 2021)
		XML Programming Language - Lembaga Pengembangan Komputer Universitas Gunadarma (6 June 2021)
		C # Programming Language Fundamental - Lembaga Pengembangan Komputer Universitas Gunadarma (28 April 2021)
		Building Website using HTML 5 - Lembaga Pengembangan Komputer Universitas Gunadarma (26 April 2021)
      </span>
    </Block>
  );
};

const LocationBlock = () => {
  return (
    <Block
      className={`col-span-12 flex flex-col items-center gap-4 md:col-span-3`}
    >
      <FiMapPin className="text-3xl" />
      <p className="text-center text-lg text-zinc-400">di dunia</p>
    </Block>
  );
};

const EmailListBlock = () => {
  return (
    <Block className={`col-span-12 md:col-span-9`}>
      <p className="mb-3 text-lg">Join my mailing list</p>
      <form
        onSubmit={(e) => e.preventDefault}
        className="flex items-center gap-2"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
        >
          <FiMail /> Join the list
        </button>
      </form>
    </Block>
  );
};

const Logo = () => {
  return (
    <svg
      id="logo-70"
      width="78"
      height="30"
      viewBox="0 0 78 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-12 fill-zinc-50"
    >
      {" "}
      <path
        d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z"
        class="ccustom"
      ></path>{" "}
      <path
        d="M39.364 22.3934C38.3353 23.4221 36.9401 24 35.4853 24C33.05 24 30.9853 22.413 30.2692 20.2167L25.7982 24.6877C27.838 27.8819 31.4143 30 35.4853 30C38.5314 30 41.4527 28.7899 43.6066 26.636L62.636 7.6066C63.6647 6.57791 65.0599 6 66.5147 6C69.5442 6 72 8.45584 72 11.4853C72 12.9401 71.4221 14.3353 70.3934 15.364L63.364 22.3934C62.3353 23.4221 60.9401 24 59.4853 24C57.0498 24 54.985 22.4127 54.269 20.2162L49.798 24.6873C51.8377 27.8818 55.4141 30 59.4853 30C62.5314 30 65.4527 28.7899 67.6066 26.636L74.636 19.6066C76.7899 17.4527 78 14.5314 78 11.4853C78 5.14214 72.8579 0 66.5147 0C63.4686 0 60.5473 1.21005 58.3934 3.36396L39.364 22.3934Z"
        class="ccustom"
      ></path>
    </svg>
  );
};

export default Bento;
