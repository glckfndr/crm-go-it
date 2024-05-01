import { Status } from './StatusLabel';
import { clsx } from 'clsx';

const baseClass =
  'inline-flex items-center py-1 px-3.5 rounded-3xl font-medium';
const btnColor = {
  active: 'text-green-600 bg-green-200',
  notActive: 'text-red-600 bg-red-200',
  pending: 'text-orange-600 bg-orange-200',
  suspended: 'text-blue-600 bg-blue-200',
};

function getButtonClass(status: Status) {
  return clsx(baseClass, btnColor[status]);
}

export default getButtonClass;
