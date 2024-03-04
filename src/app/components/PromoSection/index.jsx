"use client";
import { useEffect, useRef } from "react";
import Card from "@/app/components/PromoSection/Card";

export default function PromoSection({ arraySections }) {
  /* Este es un componente pensado en que,
     dado un tamaño de un elemento padre basado en el viewport, 
     sus hijos se adapten a ese tamaño, tanto fuentes como longitud de elementos
     sin usar media queries
     */
  const galleryRef = useRef();
  const cardRef = useRef();
  const price = 1000;
  const tamaño = 10; //vh - Minimo 0
  const separacion = 5; //vh

  function handleScrollLeft() {
    galleryRef.current.scrollLeft -= cardRef.current.offsetWidth * 1; //Cantidad de cards a desplazar
  }
  function handleScrollRight() {
    galleryRef.current.scrollLeft += cardRef.current.offsetWidth * 1;
  }

  return (
    <section
      style={{
        minHeight: `${tamaño + 50}vh`,
        marginBottom: `${separacion}vh`,
        maxHeight: `${tamaño + 50}vh`,
        backgroundColor: "#0F172A",
      }}
      className={` relative z-10 p-2  flex flex-col  rounded-lg `}
    >
      <h3 className="flex-1 [font-size:2.2vh] p-1 text-white ">
        Company title
      </h3>

      <div
        style={{ scrollBehavior: "smooth" }}
        ref={galleryRef}
        className="scrollSnap px-8 flex-[9] flex gap-10 scrollBar pb-2 overflow-x-scroll relative "
      >
        <button
          className="sticky top-[35%] left-2
          h-[10vh]"
          style={{ fontSize: "5vh" }}
          onClick={handleScrollLeft}
        >
          {"<"}
        </button>

        {arraySections &&
          arraySections.products.map((element, i) => (
            <Card
              cardRef={cardRef}
              tamaño={tamaño}
              price={price}
              element={element}
              key={i}
            />
          ))}

        <button
          onClick={handleScrollRight}
          style={{ fontSize: "5vh" }}
          ref={galleryRef}
          className="sticky top-[35%]  right-2 h-[10vh] "
        >
          {">"}
        </button>
      </div>
    </section>
  );
}
