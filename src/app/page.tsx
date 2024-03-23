"use client"
import Jumbotron from "@/components/jumbotron";
import About from "@/components/about";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      offset: 200,
      once: true
    })
  }, [])

  return (
    <>
      <Jumbotron/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}
