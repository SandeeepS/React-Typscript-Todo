type Input = {
  type: "text" | "checkbox" | "color";
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

function Input({ type, inputValue, setInputValue }: Input) {
  return (
    <input
      type={type}
      value={inputValue}
      className="w-full p-2 rounded-sm mb-2"
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
}

export default Input;
