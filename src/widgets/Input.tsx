import { useState } from "react";

const InputWithOverlappingLabel = ({ labelText, inputType }: { labelText: string; inputType: string }) => {
  const [isFocused, setIsFocused] = useState(false);
//   const [name,setName] = useState("")
//   const handle = ({target:{value}}) => setName(value)
  
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 text-black"        
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        className={`absolute transition-all left-2 ${
          isFocused
            ? "top-1 text-xs text-blue-500 bg-transparent" // Set background to transparent when focused
            : "top-2/4 -translate-y-2/4 text-gray-500 bg-white" // Set background to white when not focused
        }`}
      >
        {labelText}
      </label>
    </div>
  );
};

export default InputWithOverlappingLabel;
