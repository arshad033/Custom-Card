import React, { useState } from "react";
import Card from "./components/Card.jsx";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, { name, email, image }]);
    setName("");
    setEmail("");
    setImage("");
  };

  const deleteCard = (ind) => {
    return setData(()=> data.filter((elem, index)=> index !== ind))

  }

  return (
    <div className="w-full bg-slate-300 h-screen p-8 flex flex-col items-center gap-6">
      <h1 className="text-2xl font-sans font-bold">🅲🅰🆁🅳 - 🅼🅰🅺🅴🆁</h1>
      <div className="h-3/4 w-full flex justify-center items-center overflow-x-auto scrollbar-custom">
        <div className="h-3/4 max-w-max flex justify-center items-center gap-8 px-8">
          <Card data={data} deleteCard={deleteCard}/>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex justify-center flex-wrap gap-6"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="enter name"
            className="border-2 border-black w-60 rounded-md pl-4"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="enter email"
            className="border-2 border-black w-60 rounded-md pl-4"
          />
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            value={image}
            placeholder="enter Image url"
            className="border-2 border-black w-60 rounded-md pl-4"
          />
          <input
            type="submit"
            value="Create"
            className="bg-blue-600 px-2 py-1 rounded-lg text-white font-bold "
          />
        </form>
      </div>
    </div>
  );
}

export default App;
