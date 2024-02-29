/* eslint-disable @next/next/no-img-element */
export default function PromoCard({ arraySections }) {
  return (
    <section className="bg-green-300 p-2 items-center gap-1 m-5 max-h-[60vh] ">
      <h3>{arraySections.name}</h3>
      <div className="flex h-full">
        {arraySections &&
          arraySections.products.map((element, i) => (
            <div key={i} className="flex-1">
              <h5>{element.name}</h5>
              <img
                className=" size-full bg-slate-500"
                src={element.image}
                alt={`Product ${i}`}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
