import React from "react";
import lady from "../assets/lady_sapa.png";
import greetBros from "../assets/greet_bros.png";
import guy from "../assets/guy_sapa.png";

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
      <div>
        {cards.map((card) => {
          return (
            <div>
              <h5 className="text-center text-[#474747] text-2xl font-medium">
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
    </>
  );
}

export default SectionTwo;
