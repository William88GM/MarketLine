export default function Banner() {
  let images = [
    "https://http2.mlstatic.com/D_NQ_959182-MLA75031658169_032024-OO.webp",
    "https://http2.mlstatic.com/D_NQ_761169-MLA74996734948_032024-OO.webp",
    "https://http2.mlstatic.com/D_NQ_962443-MLA75004774337_032024-OO.webp",
  ];
  //Algoritmo de Scroll infinito
  return (
    <div className="flex scrollSnap px-8 gap-10 scrollBar pb-2 overflow-x-scroll bg-indigo-500 max-h-[70vh] min-h-[70vh] w-[100%] p-2">
      <img className="min-h-full min-w-full" src={images[0]} alt="" />
      <img className="min-h-full min-w-full" src={images[1]} alt="" />
      <img className="min-h-full min-w-full" src={images[2]} alt="" />
    </div>
  );
}
