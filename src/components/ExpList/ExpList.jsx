import React from "react";
import ExpItem from "../ExpItem/ExpItem";
import styles from "./ExpList.module.css";

const ExpList = ({ items }) => {
  return (
    <ul className={styles.expList} role="list" aria-label="업무 경력 목록">
      {items.map((item, index) => (
        <ExpItem
          key={index}
          date={item.date}
          title={item.title}
          text={item.text}
          delay={0.2}
          isFirst={index === 0}
          isLast={index === items.length - 1}
          isOdd={index % 2 !== 0}
        />
      ))}
    </ul>
  );
};

export default ExpList;
