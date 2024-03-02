/* eslint-disable @next/next/no-img-element */
export default function PromoCard({ arraySections }) {
  const price = 1000;
  const tamaño = 10; //vh - Minimo 0 - El 0 se ve bien en todos lados menos en el Z Fold la descripcion del producto no se ve
  const separacion = 5; //vh

  return (
    /* Este es un componente pensado en que,
     dado un tamaño de un elemento padre basado en el viewport, 
     sus hijos se adapten a ese tamaño, tanto fuentes como longitud de elementos
     sin usar media queries
     */
    <section
      style={{
        minHeight: `${tamaño + 50}vh`,
        marginBottom: `${separacion}vh`,
        maxHeight: `${tamaño + 50}vh`,
        backgroundColor: "#0F172A",
      }}
      className={`  p-2  flex flex-col  rounded-lg `}
    >
      <h3 className="flex-1 [font-size:2.2vh] p-1 text-white ">
        Company title
      </h3>
      <div className="hola flex-[9] flex gap-10 scroll-bar pb-2 overflow-x-scroll ">
        {/*El overflow x ocupaba espacio en Y??? >:( */}
        {arraySections &&
          arraySections.products.map((element, i) => (
            <div
              key={i}
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
                alt=""
              />

              <p className="onlyTwoLines mx-2  w-[80%] text-white  [font-size:2vh]">
                El Mejor Suplemento de Colageno Hidrolizado, Flex, nutricion
                Articular, En polvo, sabor citrico, en pote de 375g, vitalis,
                navitas
              </p>

              <span className="size-fit [font-size:2.5vh] text-white">
                $ {price}
              </span>
              <span className="size-fit [font-size:2vh] text-white">
                en 6x $ {(price / 6).toFixed(2)}
              </span>
            </div>
          ))}
      </div>
    </section>
  );
}
