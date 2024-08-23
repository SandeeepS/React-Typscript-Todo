import Button from "./Button";
import { Items, ReactSetState } from "../types/utils";

type ItemList = {
  items: Items[];
  setItems: ReactSetState<Items[]>;
};

function ItemList({ items, setItems }: ItemList) {
  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };

  return items.map((data) => (
    <div
      key={data.id}
      className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2"
    >
      <p>{data.title}</p>
      <button></button>
      <Button onClick={() => handleDelete(data.id)}>
        <img
          width={24}
          height={24}
          src="https://www.svgrepo.com/show/489907/delete.svg"
          alt=""
        />
      </Button>
    </div>
  ));
}

export default ItemList;
