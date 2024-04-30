import React, { ReactNode } from 'react';
import classes from './NotActiveLabel.module.css';

type Props = {
  children: ReactNode;
};

const NotActiveLabel = ({ children }: Props) => {
  return <span className={classes.label}>{children}</span>;
};

export default NotActiveLabel;
