import Layout from "../../components/layout/layout";
import bryan from "../../assets/images/bryan.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default function About() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".title-anim", {
      duration: 1,
      text: "Where it all began ?",
    });
    tl.fromTo(
      ".text-anim",
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.5 },
      "-=0.4",
    );
    tl.fromTo(".footer-anim", { opacity: 0 }, { opacity: 1, duration: 1 });
  });
  return (
    <Layout>
      <div className="flex flex-col gap-10 text-xl lg:flex-row lg:text-2xl">
        <div className="flex  w-full  flex-col gap-5 overflow-hidden lg:w-2/3">
          <h3 className="title-anim text-4xl font-bold">W</h3>
          <p className="text-anim">
            Passionate about computers since childhood, I am a naturally curious
            individual always eager to learn more when a subject piques my
            interest. In 2018, I stumbled upon the world of development and
            instantly knew that it would be my life's calling.
          </p>
          <p className="text-anim">
            Ever in pursuit of knowledge, I enthusiastically dive into every
            topic that captures my fascination. My journey in the field of
            computer science reflects my determination to turn my passion into a
            career filled with innovation and creativity.
          </p>
        </div>
        <div className="flex items-center justify-center lg:w-1/3">
          <img
            src={bryan}
            alt="Bryan Schutters"
            className="text-anim max-h-96 w-full rounded-2xl object-cover lg:max-h-[550px]"
          />
        </div>
      </div>
    </Layout>
  );
}
