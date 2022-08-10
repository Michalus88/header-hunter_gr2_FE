import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { EmailChange, PasswordChange } from 'types';
import { useAuth } from '../../hooks/useAuth';
import { ChangeEmail } from './ChangeEmail';
import { ChangePassword } from './ChangePassword';
import { ValidateMsg } from './ValidateMsg';

export const Account = () => {
  return (
    <>
      <ChangeEmail />
      <ChangePassword />
    </>
  );
};
