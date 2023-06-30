import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { authSelectors } from '../../redux/auth';
import css from './AppBar.module.css';

export const Appbar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}