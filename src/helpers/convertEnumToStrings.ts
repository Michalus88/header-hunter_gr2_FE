import { ExpectedContractType, ExpectedTypeWork } from 'types';

export const typeWork = (type: ExpectedTypeWork | null | undefined) => {
  switch (type) {
    case ExpectedTypeWork.AT_LOCATION:
      return 'Na miejscu';
    case ExpectedTypeWork.READY_TO_MOVE:
      return 'Gotowość do przeprowadzki';
    case ExpectedTypeWork.REMOTE:
      return 'Wyłącznie zdalnie';
    case ExpectedTypeWork.HYBRID:
      return 'Hybrydowo';
    case null:
      return 'Bez znaczenia';
    default:
      return 'Bez znaczenia';
  }
};

export const contractType = (type: ExpectedContractType | null | undefined) => {
  switch (type) {
    case ExpectedContractType.EMPLOYMENT_CONTRACT:
      return 'Tylko UoP';
    case ExpectedContractType.B_TO_B:
      return 'Możliwe B2B';
    case ExpectedContractType.COMMISSION_CONTRACT_OR_SPECIFIC_TASK_CONTRACT:
      return 'Możliwe UZ/UoD';
    case null:
      return 'Brak preferencji';
    default:
      return 'Brak preferencji';
  }
};
