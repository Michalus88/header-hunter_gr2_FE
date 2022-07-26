import React, { useState } from 'react';
import { FilterDialog } from '../FilterDialog/FilterDialog';
import { MegaButton } from '../Elements/MegaButton';

export const TestBtn = () => {
  const [displayFilterDialog, setSisplayFilterDialog] = useState(false);

  const toggleFilterDialog = () => {
    setSisplayFilterDialog(!displayFilterDialog);
  };

  return (
    <div className="test-btn">
      <MegaButton
        classNameAdd="megak-primary"
        buttonTitle="Test Filters"
        onClick={() => toggleFilterDialog()}
      />
      <FilterDialog visible={displayFilterDialog} toggleFilterDialog={toggleFilterDialog} />
    </div>
  );
};
