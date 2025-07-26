import {useState} from "react";


interface InputProps {
  type: "text" | "password" | "number";
  isClearable: boolean;
}

export const Input = ({type, isClearable}: InputProps) => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [eye, setEye] = useState();


  const handleEyeToggle = () => {
    if (isPasswordHidden) {

    }
  }


  if (type === "password") {
    return (
      <>
        <label htmlFor="input">{type}</label>
        <input id="input" />

      </>
    )
  }
}