import { TopPanel } from '../TopPanel/TopPanel';
import { ChangeEmail } from './ChangeEmail';
import { ChangePassword } from './ChangePassword';

export const Account = () => {
  return (
    <>
      <TopPanel />
      <ChangeEmail />
      <ChangePassword />
    </>
  );
};
