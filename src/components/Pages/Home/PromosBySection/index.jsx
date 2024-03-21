export default function PromosBySection() {
  let cards = [
    {
      category: "Moda",
      title: "¡3X sin Interes!",
      button: "Ver Ofertas",
      image:
        "https://http2.mlstatic.com/D_NQ_NP826334-MLA74805717067_022024-B.webp",
    },
    {
      category: "Electronica",
      title: "¡6X sin Interes!",
      button: "Ver Ofertas",
      image: "https://i.postimg.cc/SNcdzdWB/samsung.jpg",
    },
    {
      category: "Automovilismo",
      title: "¡18X cuotas!",
      button: "Ver Ofertas",
      image: "https://i.postimg.cc/ZR9FYxbD/cupra.jpg",
    },
    {
      category: "Juguetes",
      title: "¡6X sin Interes!",
      button: "Ver Ofertas",
      image: "https://i.postimg.cc/8k6Bq4n7/juguetes.jpg",
    },
  ];

  return (
    <section className="flex flex-wrap w-full h-[90vh] justify-center gap-12">
      {cards.map((e, i) => (
        <div key={i} className="flex w-[40vw] gap-2 justify-center text-white">
          <div className=" max-w-[180px] min-w-[180px]">
            <span>{e.category}</span>
            <h3 className="text-cyan-400 text-2xl">{e.title}</h3>
            <button className="w-32 h-8 my-4">{e.button}</button>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span class="text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#1e293b] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Green to blue
              </span>
            </button>
          </div>
          <img
            className="[aspect-ratio:1/1] w-60 h-60 outline outline-1 outline-offset-8 outline-cyan-900"
            src={e.image}
            alt={e.title + " image"}
          />
        </div>
      ))}
    </section>
  );
}
