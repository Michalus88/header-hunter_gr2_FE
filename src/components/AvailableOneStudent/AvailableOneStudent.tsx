import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react';
import { ExpectedContractType, ExpectedTypeWork } from 'types';
import group from '../../assets/img/Group 29.png';
import { MegaButton } from '../Elements/MegaButton';

interface Props {
  id: string;
  firstName: string;
  lastName: string;
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: ExpectedTypeWork;
  targetWorkCity: string | undefined;
  expectedContractType: ExpectedContractType;
  expectedSalary: string | undefined;
  canTakeApprenticeship: boolean;
  workExperience: string | undefined;
}

export const AvailableOneStudent = (props: Props) => {
  const [details, setDetails] = useState(false);

  const toast = useRef<any>(null);

  const {
    id,
    firstName,
    lastName,
    courseCompletion, // Ocena przejścia kursu
    courseEngagement, // Ocena aktywności zaangażowania na kursie
    projectDegree, // Ocena kodu w projekcie własnym
    teamProjectDegree, // Ocena pracy w zespole Scrum
    expectedTypeWork, // Preferowane miejsce pracy
    targetWorkCity, // Docelowe miejsce gdzie chce pracować kandydat
    expectedContractType, // Oczekiwany typ kontraktu
    expectedSalary, // Oczekiwane wynagrodzenie miesięczne netto
    canTakeApprenticeship, // Zgoda na odbycie bezpłatnych praktyk/stażu na początek
    workExperience, // Komercyjne doświadczenie w programowaniu
  } = props;

  const contractT = (): string => {
    switch (expectedContractType) {
      case 0:
        return 'Tylko UoP';
        break;
      case 1:
        return 'Możliwe B2B';
        break;
      case 2:
        return 'Możliwe UZ/UoD';
        break;
      default:
        return 'Brak preferencji';
    }
  };

  const workT = (): string => {
    switch (expectedTypeWork) {
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
      default:
        return 'Brak preferencji';
    }
  };

  const handleClick = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };
  const handleBookingStudent = async () => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_HR_BOOKING_STUDENT}/${id}`,
        {
          mode: 'cors',
          credentials: 'include',
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const response = await data.json();
      if (data.status === 400) {
        toast.current.show({
          severity: 'error',
          summary: 'Błąd',
          detail: `${response.message}`,
          life: 4000,
        });
        return;
      }
      toast.current.show({
        severity: 'success',
        summary: 'OK',
        detail: `Zarezerwowałeś studenta o ID: ${id}`,
        life: 4000,
      });
    } catch (e: any) {
      toast.current.show({
        severity: 'error',
        summary: 'Błąd',
        detail: `${e.message}`,
        life: 4000,
      });
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <article className="available-One-student">
        <div className="available-student">
          <p>
            {firstName} {lastName}
          </p>
          <div className="available-student-right">
            <MegaButton
              classNameAdd="megak-primary filter-star-butons-group-small right-button"
              buttonTitle="Zarezerwuj rozmowę"
              onClick={handleBookingStudent}
            />
            <button className="expand" type="button" onClick={handleClick}>
              <img className={details ? 'image-off' : 'image-on'} src={group} alt="." />
            </button>
          </div>
        </div>
        <div className={details ? 'student-details-on' : 'student-details-off'}>
          <div className="detail">
            <span className="title">Ocena przejścia kursu</span>
            <span className="description">
              <strong>{courseCompletion}</strong> / 5
            </span>
          </div>
          <div className="detail">
            <span className="title">Ocena aktywności zaangażowania na kursie</span>
            <span className="description">
              <strong>{courseEngagement}</strong> / 5
            </span>
          </div>
          <div className="detail">
            <span className="title">Ocena kodu w projekcie własnym</span>
            <span className="description">
              <strong>{projectDegree}</strong> / 5
            </span>
          </div>
          <div className="detail">
            <span className="title">Ocena pracy w zespole Scrum</span>
            <span className="description">
              <strong>{teamProjectDegree}</strong> / 5
            </span>
          </div>
          <div className="detail">
            <span className="title">Preferowane miejsce pracy</span>
            <span className="description-text">
              <strong>{workT()}</strong>
            </span>
          </div>
          <div className="detail">
            <span className="title">Docelowe miejsce gdzie chce pracować kandydat</span>
            <span className="description-text">
              <strong>{!targetWorkCity ? `brak` : `${targetWorkCity}`}</strong>
            </span>
          </div>
          <div className="detail">
            <span className="title">Oczekiwany typ kontraktu</span>
            <span className="description-text">
              <strong>{contractT()}</strong>
            </span>
          </div>
          <div className="detail">
            <span className="title">Oczekiwane wynagrodzenie miesięczne netto</span>
            <span className="description-text">
              <strong>{!expectedSalary ? `brak` : `${expectedSalary}zł`}</strong>
            </span>
          </div>
          <div className="detail">
            <span className="title">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</span>
            <span className="description-text">
              <strong>{canTakeApprenticeship}</strong>
            </span>
          </div>
          <div className="detail">
            <span className="title">Komercyjne doświadczenie w programowaniu</span>
            <span className="description-text">
              <strong>{!workExperience ? 'brak' : `${workExperience}mies`}</strong>
            </span>
          </div>
        </div>
      </article>
    </>
  );
};
