/* eslint-disable @next/next/no-img-element */
export default function PromoCard({ arraySections }) {
  return (
    /* Este es un componente pensado en que, dado un tamaño de un elemento padre basado en el viewport, sus hijos se adapten a ese tamaño, tanto fuentes como longitud de elementos*/
    <section class=" m-4 min-h-[40vh] max-h-[40vh] flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h3 className="flex-1 [font-size:1.5vmax] text-white ">Company title</h3>
      <div className="flex-[9] flex  overflow-x-scroll gap-2 ">
        {/*El overflow x ocupaba espacio en Y??? >:( */}
        {arraySections &&
          arraySections.products.map((element, i) => (
            <div
              key={i}
              className=" flex flex-col [min-width:15vmax] [max-width:15vmax] "
            >
              <h5 class="flex-1 [font-size:1.2vmax] font-bold tracking-tight text-gray-900 dark:text-white">
                Product title
              </h5>
              <div className="flex-[9]">
                <img
                  className=" rounded-lg w-[25vh] "
                  src={element.image}
                  alt=""
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
