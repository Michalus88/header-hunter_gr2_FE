import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { FilterDialog } from './FilterDialog';

export const TestBtn = () => {
  const [displayFilterDialog, setSisplayFilterDialog] = useState(false);

  const toggleFilterDialog = () => {
    setSisplayFilterDialog(!displayFilterDialog);
  };

  return;
  <Button
    className="register-new-acc-button"
    label="Zaloguj się"
    onClick={() => toggleFilterDialog()}
  />;
  <FilterDialog visible={displayFilterDialog} toggleFilterDialog={toggleFilterDialog} />;
};
