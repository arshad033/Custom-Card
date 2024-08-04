import React from "react";

function Card({data, deleteCard}) {
  return (
    <>
      {data.map((items, index) => (
         <div
          key={index}
          className="bg-white border-2 border-black h-72 max-w-60 min-w-60 rounded-lg shadow-md flex flex-col items-center gap-1 justify-center"
        >
          <div className="h-20 w-20 border-2 border-black rounded-full overflow-hidden">
            <img
              src={`${items.image}`}
              className="w-full h-full object-cover object-top"
              alt=""
            />
          </div>
          <h1 className="text-2xl font-bold">{items.name}</h1>
          <h6>{items.email}</h6>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-red-600 text-white py-1 px-2 rounded-lg font-bold w-28 mt-6" onClick={()=>deleteCard(index)}>
            Remove it
          </button>
        </div>
      ))}
    </>
  );
}

export default Card;
