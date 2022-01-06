import { ContainerDiv, Item, Column } from "./styled";
import React, { useEffect, useState } from "react";
import useMediaQuery from "./useMediaQuery";

const BREAKPOINTS = {
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
};

const Container = ({ breakpoints, children, ...args }) => {
  const [columns, setColumns] = useState([]);
  const [columnsCount, setColumnsCount] = useState(3);
  const widthPerColumn = (100 / columnsCount).toFixed(2);
  const { xl = 3, lg = 3, md = 2, sm = 1 } = breakpoints || {};

  const isSM = useMediaQuery(`(min-width:${BREAKPOINTS.SM}px)`);
  const isMD = useMediaQuery(`(min-width:${BREAKPOINTS.MD}px)`);
  const isLG = useMediaQuery(`(min-width:${BREAKPOINTS.LG}px)`);
  const isXL = useMediaQuery(`(min-width:${BREAKPOINTS.XL}px)`);

  useEffect(() => {
    let indexColumn = 0;
    const columns = [];

    for (let i = 0; i < columnsCount; i++) {
      columns.push([]);
    }

    children.forEach((child) => {
      columns[indexColumn].push(child);

      if (indexColumn < columnsCount) indexColumn++;
      if (indexColumn >= columnsCount) indexColumn = 0;
    });

    setColumns(columns);
  }, [children, columnsCount]);

  useEffect(() => {
    if (isXL) {
      setColumnsCount(xl);
    } else if (isLG) {
      setColumnsCount(lg);
    } else if (isMD) {
      setColumnsCount(md);
    } else if (isSM) {
      setColumnsCount(sm);
    } else {
      setColumnsCount(1);
    }
  }, [isSM, isMD, isLG, isXL, xl, lg, md, sm]);

  return (
    <ContainerDiv {...args}>
      {columns.map((column, index) => (
        <Column key={index} width={widthPerColumn}>
          {column.map((child, index) => (
            <Item key={index}>{child}</Item>
          ))}
        </Column>
      ))}
    </ContainerDiv>
  );
};

Container.Column = Column;

export default Container;
