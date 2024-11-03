import dynamic from "next/dynamic";

import { Carousel } from "@/components/Carousel";
import { NavbarStart } from "@/components/NavbarStart";
import { TopbarStart } from "@/components/TopbarStart";
import { Facts } from "@/components/Facts";
import { About } from "@/components/About";
import { Service } from "@/components/Service";
import { Feature } from "@/components/Feature";
import { Project } from "@/components/Project";
import { Team } from "@/components/Team";
import { Appointment } from "@/components/Appointment";
import { Testimonial } from "@/components/Testimonial";
import { FooterCla } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopbarStart />
      {/* <NavbarStart /> */}
      <Carousel />
      <Facts />
      <About />
      <Service />
      <Feature />
      <Project />
      <Team />
      <Appointment />
      <Testimonial />
      <FooterCla />
    </>
  );
}
