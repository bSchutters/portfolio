import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Card from "../../components/common/card";
import Layout from "../../components/layout/layout";
import Service from "../../components/services/service";
import { serviceDev } from "./serviceDev";
import { serviceDesgin } from "./serviceDesign";

export default function Services() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".nav-anim",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power1.inOut" },
    );
    tl.fromTo(
      ".text-anim",
      { opacity: 0 },
      { opacity: 1, duration: 0.7, ease: "power1.Out" },
      "-=0.2",
    );
    tl.fromTo(
      ".card-anim",
      { opacity: 0 },
      { opacity: 1, duration: 0.7, stagger: 0.3, ease: "power1.Out" },
      "-=0.5",
    );
    tl.fromTo(
      ".services-anim",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.2, stagger: 0.3, ease: "power1.Out" },
      "-=0.5",
    );
    tl.fromTo(".footer-anim", { opacity: 0 }, { opacity: 1, duration: 1 });
  });

  return (
    <Layout>
      <div className="overflow-hidden">
        <p className="text-anim text-5xl leading-snug lg:w-2/3">
          I imagine digital solutions & <br />I
          <span className="font-playfair italic"> design</span>,
          <span className="font-playfair italic"> build</span> and
          <span className="font-playfair italic"> create </span>
          responsive user-friendly web applications
        </p>
      </div>

      <div className="flex w-full flex-col gap-5 lg:flex-row">
        <Card className="card-anim flex w-full flex-col gap-5 lg:w-1/2">
          <h3 className="font-playfair text-xl font-bold italic">
            Developement
          </h3>

          <ul className="flex flex-col gap-2 overflow-hidden">
            {serviceDev.map((serviceDev, index) => (
              <Service
                key={index}
                title={serviceDev.title}
                className="services-anim"
              />
            ))}
          </ul>
        </Card>
        <Card className="card-anim flex w-full flex-col gap-5 lg:w-1/2">
          <h3 className="font-playfair text-xl font-bold italic">Design</h3>

          <ul className="flex flex-col gap-2 overflow-hidden">
            {serviceDesgin.map((serviceDesign, index) => (
              <Service
                key={index}
                title={serviceDesign.title}
                className="services-anim"
              />
            ))}
          </ul>
        </Card>
      </div>
    </Layout>
  );
}
