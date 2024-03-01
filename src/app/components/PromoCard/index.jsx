/* eslint-disable @next/next/no-img-element */
export default function PromoCard({ arraySections }) {
  return (
    /*El error estaba en una colision entre flex flex-1 y el max height 60% del padre*/
    //   <section className="bg-green-300 p-2 items-center gap-1 m-5 max-h-[60vh] ">
    //     <h3>{arraySections.name}</h3>
    //     <div className="flex">
    //       {arraySections &&
    //         arraySections.products.map((element, i) => (
    //           <div key={i} className="flex-1">
    //             <h5>{element.name}</h5>
    //               <img
    //                 className=""
    //                 src={element.image}
    //                 alt={`Product ${i}`}
    //               />
    //           </div>
    //         ))}
    //     </div>
    //   </section>

    <section class=" p-2 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-white">Company title</h3>
      <div className="flex gap-2 p-2">
        {arraySections &&
          arraySections.products.map((element, i) => (
            <div key={i} className="flex-1 ">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {/* {element.image} */}
                Product title
              </h5>
              <img className="rounded-t-lg " src={element.image} alt="" />
            </div>
          ))}
      </div>
    </section>
  );
}
