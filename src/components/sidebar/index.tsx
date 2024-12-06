import { ListChecks, SignOut } from '@phosphor-icons/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import styles from './styles.module.css';
import { useUser } from '../../hooks/use-user';
import { ClockCounterClockwise } from '@phosphor-icons/react/dist/ssr';
import clsx from 'clsx';

export function Sidebar() {
  const { userData, logout } = useUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handlelogout() {
    logout();

    navigate('/enpathnametrar');
  }
  return (
    <div className={styles.container}>
      <img src={userData.avatarUrl} alt={userData.name} />
      <div className={styles.links}>
        <Link to="/">
          <ListChecks className={clsx(pathname ==='/' && styles.active)} />
        </Link>
        <Link to="/foco">
          <ClockCounterClockwise
            className={clsx(pathname === '/foco' && styles.active)}
          />
        </Link>
      </div>
      <SignOut onClick={handlelogout} className={styles.signout} />
    </div>
  );
}
