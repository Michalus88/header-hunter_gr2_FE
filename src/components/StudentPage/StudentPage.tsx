import React, { useEffect, useState } from 'react';
import { DetailedStudentDataRes } from 'types';
import { TopPanel } from '../TopPanel/TopPanel';
import { MainStudentWrapper } from './MainStudentWrapper';
import { CvContent } from '../CvPage/CvContent';
import { StudentInfo } from '../CvPage/StudentInfo';
import { MainWrapper } from '../CvPage/MainWrapper';
import { Spinner } from '../Spinner/Spinner';
import { CvPage } from '../CvPage/CvPage';

// import '../../assets/css/spinner.css';

export const StudentPage = () => {
  // const [studentData, getStudentData] = useState<DetailedStudentDataRes | null>(null);
  // const getStudentDetails = async () => {
  //   getStudentData(null);
  //   // try {
  //   //   const res = await fetch(`http://localhost:3001${path}`)
  //   //
  //   //   if (res.status === 404) {
  //   //     throw new Error("Nie można połączyć się z serwerem")
  //   //   }
  //   //
  //   //   if ([400, 500].includes(res.status)) {
  //   //
  //   //     const error = await res.json();
  //   //     setError(error.message);
  //   //     throw new Error(error.message);
  //   //
  //   //   }
  //   //   const data = await res.json();
  //   //   setState(data);
  //   //
  //   // } catch (error: any) {
  //   //   setError(error.message);
  //   // }
  //   const res = await fetch(`http://localhost:3001/api/student/detailed`, {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   console.log(res);
  //   const data = await res.json();
  //   getStudentData(data);
  //   console.log(data);
  // };
  //
  // useEffect(() => {
  //   getStudentDetails();
  // }, []);
  //
  // if (studentData === null) return <Spinner />;

  return (
    <>
      <TopPanel />
      <MainStudentWrapper>
        {/* <h2>CV</h2> */}
        {/* <MainWrapper> */}
        {/*  <StudentInfo /> */}
        {/*  <CvContent /> */}
        <CvPage />
        {/* </MainWrapper> */}
        {/* <EditStudentForm /> */}
      </MainStudentWrapper>
    </>
  );
};
