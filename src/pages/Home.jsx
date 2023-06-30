import { AuthItem } from 'components/AuthNav/AuthNav.styled';
import { Title, Paragraph} from 'components/App.styled';
import { useAuth } from 'hooks/useAuth';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Title>Phonebook application</Title>
      <Paragraph>
        A unified phone book with integrated keyword search is always at hand, making it extremely helpful whenever you need to recall someone's name.
      </Paragraph>
      {!isLoggedIn && (
        <Paragraph>
          To use the application, you need to <AuthItem to={'/register'}>Sign up</AuthItem> or{' '}
          <AuthItem to={'/login'}>Sign in</AuthItem>
        </Paragraph>
      )}
    </>
  );
};
