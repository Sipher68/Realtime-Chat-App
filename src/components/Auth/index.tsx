import { Button } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';

interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <div>
      Auth
      <Button onClick={() => signIn('google')}>Sign in</Button>
    </div>
  );
};

export default Auth;
