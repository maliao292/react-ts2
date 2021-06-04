import React,{useState} from "react";
interface Props{
    name:string
}
const MyHook: React.FC<Props> = (props) => {
    const [count,setCount]  = useState<number>(1)
  return <div>{count}</div>;
};
export default MyHook;
