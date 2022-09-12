import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ReservedStudentRes, AvailableStudentRes } from 'types';
import group from '../../assets/img/Group 29.png';
import { MegaButton } from '../Elements/MegaButton';
import { setIfErrMsg } from '../../helpers/setIfErrMsg';
import { setNotification } from '../../helpers/setNotification';
import { useApp } from '../../hooks/useApp';

interface Props {
  student: ReservedStudentRes | AvailableStudentRes;
  setStudentsCount: React.Dispatch<React.SetStateAction<number>>;
}

export const StudentElement = (props: Props) => {
  const [details, setDetails] = useState(false);
  const [avatar, setAvatar] = useState(
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E',
  );
  const navigate = useNavigate();
  const { toast } = useApp();

  const handleClick = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };
  const { student, setStudentsCount } = props;
  const {
    id,
    courseCompletion,
    courseEngagement,
    projectDegree,
    teamProjectDegree,
    studentInfo: {
      firstName,
      lastName,
      expectedTypeWork,
      targetWorkCity,
      expectedContractType,
      expectedSalary,
      canTakeApprenticeship,
      workExperience,
      githubUsername,
    },
  } = student;
  let reservationDateTo: null | Date = null;
  if ('bookingDateTo' in student) {
    const { bookingDateTo } = student;
    reservationDateTo = bookingDateTo;
  }

  const toggleStudentStatus = async (method: 'POST' | 'DELETE' | 'PATCH') => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_HR_BOOKED_STUDENTS}/${id}`,
        {
          mode: 'cors',
          credentials: 'include',
          method,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const errMsg = await setIfErrMsg(res);
      if (errMsg) {
        setNotification(toast, errMsg);
        return;
      }
      const resObj = await res.json();
      setNotification(toast, resObj.message, 'success');
      setStudentsCount((prev) => prev - 1);
    } catch (err) {
      setNotification(toast);
    }
  };

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

  const checkGitHubUser = async () => {
    try {
      const data = await fetch(`https://api.github.com/users/${githubUsername}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const response = await data.json();

      // response.message === 'Not Found' ? avatar : setAvatar(githubUsername);

      if (response.message !== 'Not Found') {
        setAvatar(`https://github.com/${githubUsername}.png`);
      }
      // eslint-disable-next-line no-empty
    } catch {}
  };

  useEffect(() => {
    if (reservationDateTo) {
      (async () => {
        try {
          const data = await fetch(`https://api.github.com/users/${githubUsername}`, {
            mode: 'cors',
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });

          const response = await data.json();

          // response.message === 'Not Found' ? avatar : setAvatar(githubUsername);

          if (response.message !== 'Not Found') {
            setAvatar(`https://github.com/${githubUsername}.png`);
          }
          // eslint-disable-next-line no-empty
        } catch {}
      })();
    }
  }, []);

  return (
    <article key={id} className="available-One-student">
      <div className="available-student">
        <div className="BookInterview-student-all">
          {reservationDateTo && (
            <div className="BookInterview-student-reservation">
              <p className="BookInterview-student-reservation-text">Rezerwacja do</p>
              <p className="BookInterview-student-reservation-date">
                {new Date(reservationDateTo).toLocaleDateString()}
              </p>
            </div>
          )}

          <div className="BookInterview-student-information">
            {reservationDateTo && (
              <img
                className="BookInterview-student-information-avatar"
                src={avatar}
                alt="avatar użytkownika"
              />
            )}
            <p className="BookInterview-student-information-name">
              {firstName} {reservationDateTo ? lastName : lastName[0]}
            </p>
          </div>
        </div>
        <div className="available-student-right">
          {reservationDateTo ? (
            <>
              <MegaButton
                classNameAdd="megak-primary filter-star-butons-group-small right-button"
                buttonTitle="Pokaż CV"
                onClick={() => navigate(`/hr/interview-students/${id}`)}
              />
              <MegaButton
                classNameAdd="megak-primary filter-star-butons-group-small right-button"
                buttonTitle="Brak zainteresowania"
                onClick={() => toggleStudentStatus('DELETE')}
              />
              <MegaButton
                classNameAdd="megak-primary filter-star-butons-group-small right-button"
                buttonTitle="Zatrudniony"
                onClick={() => toggleStudentStatus('PATCH')}
              />
            </>
          ) : (
            <MegaButton
              classNameAdd="megak-primary filter-star-butons-group-small right-button"
              buttonTitle="Zarezerwuj rozmowę"
              onClick={() => toggleStudentStatus('POST')}
            />
          )}

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
            <strong>{canTakeApprenticeship ? 'Tak' : 'Nie'}</strong>
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
  );
};

// ------------pifpaf---------------

// import React, { useState } from 'react';
//
// interface Props {
//   firstName: string;
//   lastName: string;
//   courseCompletion: number;
//   courseEngagement: number;
//   projectDegree: number;
//   teamProjectDegree: number;
//   expectedTypeWork: string;
//   targetWorkCity: string | null;
//   expectedContractType: string;
//   expectedSalary: number;
//   canTakeApprenticeship: string;
//   workExperience: number;
// }
//
// export const StudentElement = (props: Props) => {
//   const [details, setDetails] = useState(false);
//
//   const handleClick = () => {
//     if (!details) {
//       setDetails(true);
//     } else {
//       setDetails(false);
//     }
//   };
//   const {
//     firstName,
//     lastName,
//     courseCompletion,
//     courseEngagement,
//     projectDegree,
//     teamProjectDegree,
//     expectedTypeWork,
//     targetWorkCity,
//     expectedContractType,
//     expectedSalary,
//     canTakeApprenticeship,
//     workExperience,
//   } = props;
//   return (
//     <div className="StudentsList">
//       <div className="BookInterview__container">
//         <div className="BookInterview__student">
//           <div className="BookInterview__student--all">
//             <div className="BookInterview__student--reservation">
//               <p className="BookInterview__student--reservation-text">Rezerwacja do</p>
//               <p className="BookInterview__student--reservation-date">10.01.2001</p>
//             </div>
//
//             <div className="BookInterview__student--information">
//               <img
//                 className="BookInterview__student--information-avatar"
//                 src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
//                 alt="avatar użytkownika"
//               />
//               <p className="BookInterview__student--information-name">
//                 {' '}
//                 {firstName} {lastName}
//               </p>
//             </div>
//           </div>
//           <div className="BookInterview__student--buttons">
//             <button
//               className="BookInterview__student--button-show-cv StudentsList-button"
//               type="button"
//             >
//               Pokaż CV
//             </button>
//             <button
//               className="BookInterview__student--button-disinterest StudentsList-button"
//               type="button"
//             >
//               Brak zainteresowania
//             </button>
//             <button
//               className="BookInterview__student--button-hired StudentsList-button"
//               type="button"
//             >
//               Zatrudniony
//             </button>
//
//             <button
//               type="button"
//               onClick={handleClick}
//               className={
//                 details
//                   ? 'StudentsList-button BookInterview__student--button-more-close'
//                   : 'StudentsList-button BookInterview__student--button-more-open'
//               }
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
//                 <g id="Group_29" data-name="Group 29" transform="translate(-268 -345)">
//                   <rect
//                     id="Rectangle_13"
//                     data-name="Rectangle 13"
//                     width="30"
//                     height="30"
//                     transform="translate(268 345)"
//                     fill="#f7f7f7"
//                     opacity="0"
//                   />
//                   <path
//                     id="arrow-65"
//                     d="M0,14.135l2.24,2.24L9.5,8.982l7.257,7.393L19,14.135,9.5,4.5Z"
//                     transform="translate(273 349.563)"
//                     fill="#666"
//                   />
//                 </g>
//               </svg>
//             </button>
//           </div>
//         </div>
//         <div
//           className={
//             details
//               ? 'BookInterview__student--details-container-open'
//               : 'BookInterview__student--details-container-close'
//           }
//         >
//           <div className="BookInterview__student--details">
//             <div className="BookInterview__student--details-name">Ocena przejśćia kursu</div>
//             <div className="BookInterview__student--details-value">
//               <span className="BookInterview__student-details-span">{courseCompletion}</span>
//               /5
//             </div>
//           </div>
//           <div className="BookInterview__student--details">
//             <div className="BookInterview__student--details-name">
//               Ocena aktywności i zaangażowanie na kursie
//             </div>
//             <div className="BookInterview__student--details-value">
//               <span className="BookInterview__student-details-span">{courseEngagement}</span>
//               /5
//             </div>
//           </div>
//           <div className="BookInterview__student--details">
//             <div className="BookInterview__student--details-name">
//               Ocena kodu w projekcie właśnym
//             </div>
//             <div className="BookInterview__student--details-value">
//               <span className="BookInterview__student-details-span">{projectDegree}</span>/5
//             </div>
//           </div>
//           <div className="BookInterview__student--details">
//             <div className="BookInterview__student--details-name">Ocena pracy w zespole scrum</div>
//             <div className="BookInterview__student--details-value">
//               <span className="BookInterview__student-details-span">{teamProjectDegree}</span>
//               /5
//             </div>
//           </div>
//           <div className="BookInterview__student--details">
//             <div className="BookInterview__student--details-name">Preferowane miejsce pracy</div>
//             <div className="BookInterview__student--details-value">
//               <span className="BookInterview__student-details-span">{expectedTypeWork}</span>
//             </div>
//           </div>
//           <div className="BookInterview__student--details">
//             <div className="BookInterview__student--details-name">
//               Docelowe miasto, gdzie chce pracować kandydat
//             </div>
//             <div className="BookInterview__student--details-value">
//               <span className="BookInterview__student-details-span">{targetWorkCity}</span>
//             </div>
//           </div>
//           <div className="BookInterview__student--details">
//             <div className="BookInterview__student--details-name">Oczekiwany typ kontraktu</div>
//             <div className="BookInterview__student--details-value">
//               <span className="BookInterview__student-details-span">{expectedContractType}</span>
//             </div>
//           </div>
//           <div className="BookInterview__student--details">
//             <div className="BookInterview__student--details-name">
//               Oczekiwane wynagrodzenie miesięczne netto
//             </div>
//             <div className="BookInterview__student--details-value">
//               <span className="BookInterview__student-details-span">{expectedSalary}</span>
//             </div>
//           </div>
//           <div className="BookInterview__student--details">
//             <div className="BookInterview__student--details-name">
//               Zgoda na odbycie bezpłatnych praktyk/stażu na początek
//             </div>
//             <div className="BookInterview__student--details-value">
//               <span className="BookInterview__student-details-span">{canTakeApprenticeship}</span>
//             </div>
//           </div>
//           <div className="BookInterview__student--details">
//             <div className="BookInterview__student--details-name">
//               Komercyjne doświadczenie w programowaniu
//             </div>
//             <div className="BookInterview__student--details-value">
//               <span className="BookInterview__student-details-span">{workExperience}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
