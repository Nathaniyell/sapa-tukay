import React from "react";
import lady from "../assets/lady_sapa.png";
import greetBros from "../assets/greet_bros.png";
import guy from "../assets/guy_sapa.png";
import greetBros2 from "../assets/greet_brosbigimage.png";
import sectionbanner from "../assets/sectionbannerTwo.png";
import tukayNotes from "../assets/money.png";

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
      <div className="text-[#474747] text-center font-medium">
        <h1 className="text-3xl leading-loose">What you stand to benefit</h1>
        <p className="text-xl">This is how our product works</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center w-11/12 mx-auto my-14">
        {cards.map((card) => {
          return (
            <div key={card.title} className="bg-white p-4 rounded-md">
              <img src={card.img} alt={card.title} className="mx-auto" />
              <h5 className="leading-loose text-center text-[#474747] text-2xl font-medium">
                {card.title}
              </h5>
              <p>
                In Nigerian Pidgin English, Sapa is sometimes used to describe
                financial hardship or running out of money.
              </p>
            </div>
          );
        })}
      </div>
      <section className="bg-cyan-800 p-4 flex justify-between h-96">
        <img src={greetBros2} className="w-2/5" alt="Greet Bros" />
        <img
          src={sectionbanner}
          className="w-2/3 self-start md:w-[40%] object-cover"
          alt=""
        />
      </section>

      <section className="flex justify-between items-center">
        <div className="w-10/12 md:mx-auto text-[#474747]">
          <h1 className="text-[40px] md:text-6xl font-semibold leading-relaxed">
            Urgent Tukay - the Notes
          </h1>
          <p className="text-xl font-medium">
            No cash, No wahala get our application and deal with Sapa
          </p>
          <button className='border border-lime-900 bg-teal-800 text-white px-8 py-2 rounded-md'>Get started</button>
        </div>
          <img className="" src={tukayNotes} alt="tukay notes" />
      </section>
    </>
  );
}

export default SectionTwo;
