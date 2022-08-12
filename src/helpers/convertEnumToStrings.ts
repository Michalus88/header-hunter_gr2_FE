import { ExpectedContractType, ExpectedTypeWork } from 'types';

export const typeWork = (type: ExpectedTypeWork) => {
  switch (type) {
    case 0:
      return 'Na miejscu';
      break;
    case 1:
      return 'Gotowość do przeprowadzki';
      break;
    case 2:
      return 'Wyłącznie zdalnie';
      break;
    case 3:
      return 'Hybrydowo';
      break;
    case 4:
      return 'Bez znaczenia';
      break;
    default:
      return 'Bez znaczenia';
  }
};

export const contractType = (type: ExpectedContractType) => {
  switch (type) {
    case 0:
      return 'Tylko UoP';
    case 1:
      return 'Możliwe B2B';
    case 2:
      return 'Możliwe UZ/UoD';
    default:
      return 'Brak preferencji ';
  }
};
