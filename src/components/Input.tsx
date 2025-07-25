import {useState} from "react";

interface InputProps {
  type: "text" | "password" | "number";
}

export const Input: React.FC<InputProps> = ({type}) => {
  const [eye, setEye] = useState<boolean>(false);
  const [clearable, setClearable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  return (
    <>
      <label htmlFor="input">{type}</label>
      <input id="input" />
    </>
  )
}