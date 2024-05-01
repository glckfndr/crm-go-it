import { Status } from './StatusLabel';

function getButtonClass(status: Status) {
  switch (status) {
    case Status.Active:
      return 'inline-flex items-center py-1 px-3.5 rounded-3xl font-medium text-green-600 bg-green-200';
    case Status.NotActive:
      return 'inline-flex items-center py-1 px-3.5 rounded-3xl font-medium text-red-600 bg-red-200';
    case Status.Pending:
      return 'inline-flex items-center py-1 px-3.5 rounded-3xl font-medium text-orange-600 bg-orange-200';
    case Status.Suspended:
      return 'inline-flex items-center py-1 px-3.5 rounded-3xl font-medium text-blue-600 bg-blue-200';
    default:
      return '';
  }
}

export default getButtonClass;
