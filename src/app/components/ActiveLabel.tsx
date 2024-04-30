import React, { ReactNode } from 'react';
import classes from './ActiveLabel.module.css';

type Props = {
  children: ReactNode;
};

const ActiveLabel = ({ children }: Props) => {
  return <span className={classes.label}>{children}</span>;
};

export default ActiveLabel;
