import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackButton from "../components/BackButton";
import Buttons from "../components/Buttons";

function UseState() {
  const navigate = useNavigate();
  const [bgcolor, setBgcolor] = useState('bg-white');
  
  return (
    <div className={`${bgcolor} relative min-h-screen p-8`}>
      <BackButton onClick={() => navigate('/')} />
      <h1 className="text-xl font-bold mb-10 block">Background Color Picker</h1>
      <div className="flex gap-4 justify-center mt-4">
        <Buttons
          text="red"
          color="red"
          textColor="white"
          onClick={() => setBgcolor('bg-red-500')}
        />
        <Buttons
          text="blue"
          color="blue"
          textColor="white"
          onClick={() => setBgcolor('bg-blue-500')}
        />
        <Buttons
          text="green"
          color="green"
          textColor="white"
          onClick={() => setBgcolor('bg-green-500')}
        />
        <Buttons
          text="White"
          color="white"
          textColor="black"
          onClick={() => setBgcolor('bg-white')}
          className="border border-black"
        />
      </div>
    </div>
  );
}
export default UseState;