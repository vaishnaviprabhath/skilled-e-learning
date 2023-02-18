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
        <div className="pt-4 px-4">
          <div className="flex items-center justify-between  ">
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
              <span className=" pt-[15px] pl-[38px] pr-[37px] font-plusjakarta font-bold text-base leading-[26px] text-white ">
                Get Started{" "}
              </span>
            </button>
          </div>
          <div className="pt-[46px] ">
            <Image
              width={327}
              height={301}
              src="/assets/image-hero-mobile@2x.png"
              alt="Logo"
            ></Image>
          </div>
        </div>
      </main>
    </>
  );
}
