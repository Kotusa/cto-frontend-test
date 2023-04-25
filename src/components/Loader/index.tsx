import React from "react";
import style from "./Loader.module.scss";
import spinner from "../../assets/images/spinner.gif";

const Loader = () => {
  return (
    <div className={style.container}>
      <img className={style.image} src={spinner} alt="loading" />
    </div>
  );
};

export default Loader;
