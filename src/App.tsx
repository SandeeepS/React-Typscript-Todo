import { useState } from "react";
import "./App.css";
import ImageHeader from "./components/ImageHeader";
import Input from "./components/Input";
import Button from "./components/Button";
import { Items } from "./types/utils";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState<Items[]>([]); //state is used for storing the list and also provide the generics to infrom that it accect array of strings
  const [inputValue, setInputValue] = useState<string>(""); // state is used for storing the input data

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    setItems((prev) => [
      ...prev,
      { title: inputValue, id: Date.now().toString() },
    ]);
    setInputValue("");
  };

  return (
    <div className=" flex h-[100vh] flex-col justify-center items-center ">
      <ImageHeader />
      <div className="w-[350px]">
        <form className="mb-5" onSubmit={handleSumbit}>
          <Input
            type="text"
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Button className="bg-gray-700 w-full p-2">Add </Button>
        </form>
        <div className=" h-52 overflow-y-auto text-white">
          <ItemList items={items} setItems={setItems}></ItemList>
        </div>
      </div>
    </div>
  );
}

export default App;
