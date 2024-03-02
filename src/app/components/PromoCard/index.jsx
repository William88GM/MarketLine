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
        backgroundColor: "#2A283D",
      }}
      className={`  p-2  flex flex-col  rounded-lg `}
    >
      <h3 className="flex-1 [font-size:2.2vh] p-1 text-white ">
        Company title
      </h3>
      <div className="flex-[9] flex scrollBar scroll-bar pb-2 overflow-x-scroll gap-2 ">
        {/*El overflow x ocupaba espacio en Y??? >:( */}
        {arraySections &&
          arraySections.products.map((element, i) => (
            <div
              key={i}
              className={`rounded-lg flex flex-col gap-2 p-1 items-center justify-center`}
              style={{
                backgroundImage:
                  "linear-gradient(to left bottom, #2a283d, #2c2d44, #2e324b, #303753, #313c5a, #313c5a, #313c5a, #313c5a, #303753, #2e324b, #2c2d44, #2a283d)",

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
