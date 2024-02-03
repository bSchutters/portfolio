import Header from "../../components/home/header";
import Works from "../../components/home/works";
import Layout from "../../components/layout/layout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".nav-anim",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power1.inOut" },
    );
    tl.fromTo(
      ".header-lead",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power1.inOut" },
      "-=0.5",
    );
    tl.fromTo(
      ".works-test",
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.5 },
      "-=0.8",
    );
    tl.fromTo(".footer-anim", { opacity: 0 }, { opacity: 1, duration: 1 });
  });

  return (
    <Layout>
      <Header />
      <Works />
    </Layout>
  );
}
