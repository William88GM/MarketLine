import React, { useEffect, useRef } from "react";

export default function Card({ cardRef, tamaño, price, element }) {
  return (
    <div
      ref={cardRef}
      className={`snap-center rounded-lg flex flex-col gap-2 p-1 items-center justify-center`}
      style={{
        backgroundImage:
          "linear-gradient(to left bottom, #0f172a, #171d32, #1f233b, #272a43, #30304c, #30304c, #30304c, #30304c, #272a43, #1f233b, #171d32, #0f172a)",

        minWidth: `${tamaño / 2 + 25}vh`,
        maxWidth: `${tamaño / 2 + 25}vh`,
      }}
    >
      <h5 class=" size-fit [font-size:2.5vh] font-bold tracking-tight text-gray-900 dark:text-white">
        Recomendation Title
      </h5>

      <img
        style={{ width: `${tamaño / 5 + 16}vh` }}
        className=" rounded-lg  "
        src={element.image}
        alt="" // !!!
      />

      <p className="onlyTwoLines mx-2  w-[80%] text-white  [font-size:2vh]">
        El Mejor Suplemento de Colageno Hidrolizado, Flex, nutricion Articular,
        En polvo, sabor citrico, en pote de 375g, vitalis, navitas
      </p>

      <span className="size-fit [font-size:2.5vh] text-white">$ {price}</span>
      <span className="size-fit [font-size:2vh] text-white">
        en 6x $ {(price / 6).toFixed(2)}
      </span>
    </div>
  );
}
