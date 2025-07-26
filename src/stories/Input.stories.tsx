import {Input} from "../components/Input.tsx";


export default {
  title: "Input",
  component: Input,
}

export const Password = () => <Input type="password" isClearable={false}></Input>
export const Text = () => <Input type="text" isClearable={true}></Input>
export const Number = () => <Input type="number" isClearable={false}></Input>