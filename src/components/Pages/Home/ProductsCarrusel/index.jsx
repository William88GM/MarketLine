"use client";
import { useEffect, useRef } from "react";
import Card from "./Card";

export default function ProductCarrusel({ arraySections }) {
  /* Este es un componente experimental pensado en que,
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
          className=" sticky top-[35%] rounded-lg border-none px-1
             h-[10vh] flex items-center"
          style={{
            left: "-15px",
            fontSize: "4vh",
            boxShadow: "0 0 4px 2px #00f1ff, 0 0 40px 5px #000",
            backgroundColor: "#00608bdd",
            color: "white",
            fontWeight: "lighter",
          }}
          onClick={handleScrollLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ height: "2vh", width: "2vw" }}
            viewBox="0 0 20 34"
            version="1.1"
          >
            <g id="surface1">
              <path
                style={{
                  stroke: "none",
                  fillRule: "evenodd",
                  fill: "#fff",
                  fillOpacity: "1",
                }}
                d="M 19.171875 27.992188 L 8.085938 17 L 19.171875 6.007812 C 20.285156 4.902344 20.285156 3.117188 19.171875 2.011719 C 18.058594 0.90625 16.257812 0.90625 15.144531 2.011719 L 2.027344 15.015625 C 0.914062 16.121094 0.914062 17.90625 2.027344 19.011719 L 15.144531 32.015625 C 16.257812 33.121094 18.058594 33.121094 19.171875 32.015625 C 20.257812 30.910156 20.285156 29.097656 19.171875 27.992188 Z M 19.171875 27.992188 "
              />
            </g>
          </svg>
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
          style={{
            right: "-15px",
            fontSize: "4vh",
            boxShadow: "0 0 4px 2px #00f1ff, 0 0 40px 5px #000",
            backgroundColor: "#00608bdd",
            color: "white",
            fontWeight: "lighter",
          }}
          ref={galleryRef}
          className="sticky top-[35%]  right-0 h-[10vh] rounded-lg border-none px-1 flex items-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{ height: "2vh", width: "2vw" }}
            viewBox="0 0 20 34"
            version="1.1"
          >
            <g id="surface1">
              <path
                style={{
                  stroke: "none",
                  fillRule: "evenodd",
                  fill: "#fff",
                  fillOpacity: "1",
                }}
                d="M 0.828125 27.992188 L 11.914062 17 L 0.828125 6.007812 C -0.285156 4.902344 -0.285156 3.117188 0.828125 2.011719 C 1.941406 0.90625 3.742188 0.90625 4.855469 2.011719 L 17.972656 15.015625 C 19.085938 16.121094 19.085938 17.90625 17.972656 19.011719 L 4.855469 32.015625 C 3.742188 33.121094 1.941406 33.121094 0.828125 32.015625 C -0.257812 30.910156 -0.285156 29.097656 0.828125 27.992188 Z M 0.828125 27.992188 "
              />
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
}
