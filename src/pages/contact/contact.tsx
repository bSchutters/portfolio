import { LuFileDown } from "react-icons/lu";
import Card from "../../components/common/card";
import Layout from "../../components/layout/layout";
import cv from "../../assets/images/CV_Bryan_2024_V3.pdf";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Contact() {
  useGSAP(() => {
    const tl = gsap.timeline();
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
      <div className="flex flex-col gap-5  lg:flex-row">
        <h3 className="text-anim font-playfair w-full text-4xl italic lg:w-1/2">
          Contact me
        </h3>
        <div className="flex w-full flex-col gap-5 lg:w-1/2">
          <Card className="text-anim flex flex-col gap-2">
            <p className="font-playfair text-sm italic">Email</p>
            <p className="text-xl">hello@bschutters.be</p>
          </Card>
          <Card className="text-anim flex flex-col gap-2">
            <p className="font-playfair text-sm italic">Phone</p>
            <p className="text-xl">+32 488 95 24 02</p>
          </Card>
          <a href={cv} download>
            <Card className="text-anim flex items-center justify-between hover:cursor-pointer hover:bg-primary/80">
              <p className="font-playfair text-xl font-bold italic">Resume</p>
              <LuFileDown size={22} />
            </Card>
          </a>
        </div>
      </div>
    </Layout>
  );
}
