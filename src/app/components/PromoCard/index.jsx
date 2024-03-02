/* eslint-disable @next/next/no-img-element */
export default function PromoCard({ arraySections }) {
  const price = 1000;
  const tamaño = 10; //vh - Minimo 0
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
      }}
      className={`  p-2  flex flex-col  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}
    >
      <h3 className="flex-1 [font-size:2.2vh] p-1 text-white ">
        Company title
      </h3>
      <div className="flex-[9] flex  overflow-x-scroll gap-2 ">
        {/*El overflow x ocupaba espacio en Y??? >:( */}
        {arraySections &&
          arraySections.products.map((element, i) => (
            <div
              key={i}
              className={` flex flex-col gap-2 p-1 items-center justify-center`}
              style={{
                minWidth: `${tamaño / 2 + 25}vh`,
                maxWidth: `${tamaño / 2 + 25}vh`,
              }}
            >
              <h5 class="flex-1 [font-size:2.5vh] font-bold tracking-tight text-gray-900 dark:text-white">
                Recomendation Title
              </h5>
              <div className="flex-[1]">
                <img
                  style={{ width: `${tamaño / 5 + 16}vh` }}
                  className=" rounded-lg  "
                  src={element.image}
                  alt=""
                />
              </div>
              {/* h-[12%] MEJOR*/}
              <p className="max-h-[12%] mx-2 [font-size:2vh] overflow-hidden whitespace-nowrap text-ellipsis text-white text-pretty">
                El Mejor Suplemento de Colageno Hidrolizado, Flex, nutricion
                Articular, En polvo, sabor citrico, en pote de 375g, vitalis,
                navitas
              </p>
              <span className="flex-[1] [font-size:2.2vh] text-white">
                $ {price}
              </span>
              <span className="flex-1 [font-size:1.7vh] text-white">
                en 6x $ {(price / 6).toFixed(2)}{" "}
              </span>
            </div>
          ))}
      </div>
    </section>
  );
}
