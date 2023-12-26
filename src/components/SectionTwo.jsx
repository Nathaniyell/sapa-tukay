import React from "react";
import lady from "../assets/lady_sapa.png";
import greetBros from "../assets/greet_bros.png";
import guy from "../assets/guy_sapa.png";
import greetBros2 from "../assets/greet_brosbigimage.png";
import sectionbanner from "../assets/sectionbannerTwo.png";
import tukayNotes from "../assets/money.png";
import { motion } from "framer-motion";

function SectionTwo() {
  const cards = [
    {
      title: "No more Sapa",
      img: guy,
    },
    {
      title: "Beg",
      img: lady,
    },
    {
      title: "Send money",
      img: greetBros,
    },
  ];
  return (
    <>
      <motion.div
      initial={{x: -200, opacity: 0}}
      whileInView={{opacity: 1, x:0}}
      transition={{duration:.5, delay: 0.3}}
      viewport={{once: true}}
       className="text-[#474747] text-center font-medium ">
        <h1 className="text-3xl leading-loose">What you stand to benefit</h1>
        <p className="text-xl">This is how our product works</p>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center w-11/12 mx-auto my-14">
        {cards.map((card) => {
          return (
            <div key={card.title} className="bg-white p-4 rounded-md">
              <motion.img 
                    initial={{y: 100, opacity: 0}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration:.5, delay: 0.3}}
                    viewport={{once: false}}
              src={card.img} alt={card.title} className="mx-auto" />
              <motion.h5
              initial={{y: 100, opacity: 0}}
              whileInView={{opacity: 1, y:0}}
              transition={{duration:.6, delay: 0.4}}
              viewport={{once: false}}
              className="leading-loose text-center text-[#474747] text-2xl font-medium">
                {card.title}
              </motion.h5>
              <motion.p 
                    initial={{y: 100, opacity: 0}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration:.7, delay: 0.5}}
                    viewport={{once: false}}
              className="text-center">
                In Nigerian Pidgin English, Sapa is sometimes used to describe
                financial hardship or running out of money.
              </motion.p>
            </div>
          );
        })}
      </div>
      <section className="bg-[#00545F] p-4 flex flex-col items-center md:flex-row gap-6 md:justify-between md:h-96">
        <img src={greetBros2} className="md:w-1/3" alt="Greet Bros" />
        <img
          src={sectionbanner}
          className="md:w-[40%] object-cover"
          alt=""
        />
      </section>

      <section className="mt- w-11/12 mx-auto flex justify-between items-center flex-col-reverse md:flex-row">
        <div className="w-full md:w-2/5 text-[#474747] text-center md:text-left">
          <h1 className="text-4xl font-medium leading-relaxed">
            Urgent Tukay - the Notes
          </h1>
          <p className="font-medium mb-4">
            No cash, No wahala get our application and deal with Sapa
          </p>
          <button className='border border-lime-900 bg-teal-800 text-white px-8 py-2 rounded-md text-center'>Get started</button>
        </div>
          <img className="md:w-1/2" src={tukayNotes} alt="tukay notes" />
      </section>
    </>
  );
}

export default SectionTwo;
