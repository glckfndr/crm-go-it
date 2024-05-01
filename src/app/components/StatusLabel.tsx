import React, { ReactNode } from 'react';
import getButtonClass from './getButtonClass';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

type Props = {
  children: ReactNode;
  status: Status;
};

const StatusLabel = ({ children, status }: Props) => {
  return (
    <div className={getButtonClass(status)}>
      <div className="w-1 h-1 mr-2 bg-current rounded-full" />
      {children}
    </div>
  );
};

export default StatusLabel;
