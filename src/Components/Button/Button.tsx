import React from "react";
import styles from "./Button.module.scss";
import classNames from "classNames/bind";

const cx = classNames.bind(styles);

interface Iprops {
  icon?: any;
  type: string;
  children?: any;
}

const Button = ({ icon, type, children }: Iprops) => {
  return (
    <div className={cx("wrapper")}>
      <button className={cx(`btn`, type)}>
        {" "}
        {icon && icon} <span>{children && children}</span>
      </button>
    </div>
  );
};

export default Button;
