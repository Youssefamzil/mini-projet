import axios from "axios";
import { useState } from "react";
import { CompactPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { updateColor } from "./redux/UserSlice";
import useDynamicTextColor from "./useDynamicTextColor";




const ChangeColor = () => {
  const user = useSelector((state) => state.user);
  const [color, setColor] = useState(user.couleur || ""); 
  const dispatch = useDispatch();
  const { backgroundColor, textColor } = useDynamicTextColor();

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor.hex); 
  };

  const handleApply = () => {
    dispatch(updateColor(color));
   
    axios
      .put(
        `https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire/${user.id}`, 
        {
          ...user,
          couleur: color, 
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(updateColor(color)); 
      })
      .catch((err) => {
        console.error("Error from API:", err); 
      });
  };

  return (
    <div className="w-full bg-white border-b-2 rounded-bl-xl rounded-br-xl shadow shadow-gray-200">
      <div className="flex flex-col justify-end items-center gap-10 px-4 py-10">
        <h1
          className="font-bold text-4xl flex flex-col"
          style={{
            color: backgroundColor === "#ffffff" ? textColor : backgroundColor, 
          }}
        >
          Pick a Color
        </h1>
        <CompactPicker color={color} onChange={handleColorChange} /> 

        <button
          onClick={handleApply}
          className="bg-white px-8 py-4 font-bold rounded-lg hover:opacity-80"
          style={{
            color: textColor,
            backgroundColor: backgroundColor,
            border: `1px solid ${textColor}`, 
          }}
        >
          Apply changes
        </button>
      </div>
    </div>
  );
};

export default ChangeColor;





