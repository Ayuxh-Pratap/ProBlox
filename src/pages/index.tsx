import Head from "next/head";
import Navbar from "../../components/Navbar";
import ProjectPreview from "../../components/ProjectPreview";
import Dribbble from "../../public/dribbble.svg";
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/linkedin.svg";
import SocialButton from "../../components/SocialButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pro Blox</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <div className="bg-zinc-200 lg:h-[30rem] h-[33rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-4xl font-semibold">
            Hello, I am a Developer and I Forge Future for Web.
          </h1>
          <p className="flex-1">
            I care a lot about using design for positive impact and enjoy
            creating user-centric, delightful, and human experiences.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <a href="mailto:ayuaharshita14@gmail.com" target='_blank' className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">
              Contact me
            </a>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/ayuxh_pratap_/" target='_blank'>
                <SocialButton bgColor="instagram">
                  <Instagram className="w-5 h-5" />
                </SocialButton>
              </a>
              <a href="https://twitter.com/Ayuxh_Pratap" target="_blank">
                <SocialButton bgColor="twitter">
                  <Twitter className="w-5 h-5" />
                </SocialButton>
              </a>
              <a href="https://www.linkedin.com/in/ayush-pratap-singh-7716b2295/" target="_blank">
                <SocialButton bgColor="linkedin">
                  <Linkedin className="w-5 h-5" />
                </SocialButton>
              </a>
            </div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/profile5.jpg')] bg-cover bg-center" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <ProjectPreview
          name="Project App 1"
          description="This is Project Description"
          imageUrl="/project-1.png"
          bgColor="#685cdd"
          dark
        />
        <ProjectPreview
          name="Project App 2"
          description="This is Project Description"
          imageUrl="/project-2.png"
          bgColor="#313442"
          dark
        />
        <ProjectPreview
          name="Project App 3"
          description="This is Project Description"
          imageUrl="/project-3.png"
        />
        <ProjectPreview
          name="Project App 4"
          description="This is Project Description"
          bgColor="#4e4e56"
          dark
        />
        <ProjectPreview
          name="Project App 5"
          description="This is Project Description"
          imageUrl="/project-2.png"
          bgColor="#171717"
          dark
        />
        <ProjectPreview
          name="Project App 6"
          description="This is Project Description"
          imageUrl="/project-3.png"
        />
      </section>
    </>
  );
}
