import React from 'react';
import { SearchFiltration } from '../SearchFiltration/SearchFiltration';
import { ViewSupport } from '../ViewSupport/ViewSupport';
import { AvailableOneStudent } from '../AvailableOneStudent/AvailableOneStudent';
import { TopPanel } from '../TopPanel/TopPanel';

export const AvailableStudents = () => {
  return (
    <>
      <TopPanel />
      <div className="available-students-wrapper">
        <SearchFiltration />
        <div className="students-list">
          <AvailableOneStudent />
          <AvailableOneStudent />
          <AvailableOneStudent />
          <AvailableOneStudent />
        </div>
        <ViewSupport />
      </div>
    </>
  );
};
