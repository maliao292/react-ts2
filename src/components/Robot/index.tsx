import React from "react";
import style from './index.module.css'
interface Robots {
  id: number; 
  name: string;
  email: string;
}
const Robot: React.FC<Robots> = (props) => {
  const { id, name, email } = props;
  return (
    <>
      <div className={style.cardContainer}>
        <img src={`http://robohash.org/${id}`} alt="" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </>
  );
};

export default Robot   