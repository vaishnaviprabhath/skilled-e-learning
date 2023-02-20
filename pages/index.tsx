import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Skilled e-learning landing page</title>
      </Head>
      <main>
        <div className="pt-4 px-4 bg-white2">
          <div className="flex items-center justify-between ">
            <Image
              width={89}
              height={35}
              src="/assets/logo-dark.svg"
              alt="Logo"
            ></Image>
            <button className="flex-row  h-12 w-[140px] rounded-[31.5px] bg-vdb  ">
              <span className="font-plusjakarta font-bold text-base leading-[28px] text-white pt-[9px] pl-[24px] pb-[11px] pr-[24px] ">
                Get Started{" "}
              </span>{" "}
            </button>{" "}
          </div>
          <div className="pt-[38px] ">
            <h1 className="font-plusjakarta font-extrabold text-vdb text-[40px] leading-[50px] ">
              Maximize skill, minimize budget
            </h1>
          </div>

          <div className="pt-[26px]">
            <p className="font-plusjakarta text-grey font-medium text-base leading-[26px]">
              Our modern courses across a range of in-demand skills will give
              you the knowledge you need to live the life you want.
            </p>
          </div>

          <div className="pt-6">
            <button className="flex-row  h-14 w-[167px] rounded-[31.5px] bg-gradient-to-b from-orange to-pink2  ">
              <span className=" pt-[15px] pl-[38px] pr-[37px] font-plusjakarta font-bold text-base leading-[26px]  text-white ">
                Get Started{" "}
              </span>
            </button>
          </div>
          <div className="pt-[46px] pl-6 pr-6">
            <Image
              width={327}
              height={301}
              src="/assets/image-hero-mobile@2x.png"
              alt="Logo"
            ></Image>
          </div>

          <div className="bg-gradient-to-b from-orange to-pink2 w-[343px] h-[120px] rounded-[10px]">
            <p className="font-plusjakarta font-extrabold text-2xl text-white pt-[24px] pl-[28px] pr-[29px] pb-[32px] ">
              Check out our most popular courses!
            </p>
          </div>
          <div className="pt-4 pl-7">
            <Image
              width={56}
              height={56}
              src="/assets/icon-animation.svg"
              alt="Logo"
            ></Image>
          </div>

          <div className="pt-4 pl-7">
            <p className="font-plusjakarta  font-extrabold text-xl text-vdb leading-[25.2px]">
              Animation
            </p>
          </div>

          <div className="pt-4 pr-[29px] pl-7">
            <p className="font-plusjakarta font-medium text-base leading-[26px] text-grey">
              Learn the latest animation techniques to create stunning motion
              design and captivate your audience.
            </p>
          </div>

          <div className="pt-6  pl-7 pb-8">
            <a className="font-plusjakarta font-bold text-lg text-pink" href="">
              Get Started
            </a>
          </div>

          <div className="pt-4 pl-7">
            <Image
              width={56}
              height={56}
              src="/assets/icon-design.svg"
              alt="Logo"
            ></Image>
          </div>

          <div className=" pt-4 pl-7 ">
            <p className="font-plusjakarta  font-extrabold text-xl text-vdb leading-[25.2px]">
              Design
            </p>
          </div>

          <div className="pt-4 pr-[29px] pl-7">
            <p className="font-plusjakarta font-medium text-base leading-[26px] text-grey">
              Create beautiful, usable interfaces to help shape the future of
              how the web looks.
            </p>
          </div>

          <div className="pt-6  pl-7 pb-8 drop-shadow-2xl">
            <a className="font-plusjakarta font-bold text-lg text-pink" href="">
              Get Started
            </a>
          </div>

          <div className="pt-4 pl-7">
            <Image
              width={56}
              height={56}
              src="/assets/icon-photography.svg"
              alt="Logo"
            ></Image>
          </div>

          <div className=" pt-4 pl-7 ">
            <p className="font-plusjakarta  font-extrabold text-xl text-vdb leading-[25.2px]">
              Photography
            </p>
          </div>

          <div className="pt-4 pr-[29px] pl-7">
            <p className="font-plusjakarta font-medium text-base leading-[26px] text-grey">
              Explore critical fundamentals like lighting, composition, and
              focus to capture exceptional photos.
            </p>
          </div>
          <div className="pt-6  pl-7 pb-8 drop-shadow-2xl">
            <a className="font-plusjakarta font-bold text-lg text-pink" href="">
              Get Started
            </a>
          </div>
          <div className="pt-4 pl-7">
            <Image
              width={56}
              height={56}
              src="/assets/icon-crypto.svg"
              alt="Logo"
            ></Image>
          </div>

          <div className=" pt-4 pl-7 ">
            <p className="font-plusjakarta  font-extrabold text-xl text-vdb leading-[25.2px]">
              Crypto
            </p>
          </div>

          <div className="pt-4 pr-[29px] pl-7">
            <p className="font-plusjakarta font-medium text-base leading-[26px] text-grey">
              All you need to know to get started investing in crypto. Go from
              beginner to advanced with this 54 hour course.
            </p>
          </div>
          <div className="pt-6  pl-7 pb-8 drop-shadow-2xl">
            <a className="font-plusjakarta font-bold text-lg text-pink" href="">
              Get Started
            </a>
          </div>
          <div className="pt-4 pl-7">
            <Image
              width={56}
              height={56}
              src="/assets/icon-business.svg"
              alt="Logo"
            ></Image>
          </div>

          <div className=" pt-4 pl-7 ">
            <p className="font-plusjakarta  font-extrabold text-xl text-vdb leading-[25.2px]">
              Business
            </p>
          </div>

          <div className="pt-4 pr-[29px] pl-7">
            <p className="font-plusjakarta font-medium text-base leading-[26px] text-grey">
              A step-by-step playbook to help you start, scale, and sustain your
              business without outside investment.
            </p>
          </div>
          <div className="pt-6  pl-7 pb-8 drop-shadow-2xl">
            <a className="font-plusjakarta font-bold text-lg text-pink" href="">
              Get Started
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
