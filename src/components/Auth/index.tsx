import { useMutation } from '@apollo/client';
import { Button, Center, Stack, Text, Image, Input } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { CreateUsernameData, CreateUsernameVariable } from '../../util/types';
import UserOperations from '../../graphql/operations/user';

export interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FunctionComponent<IAuthProps> = ({
  session,
  reloadSession,
}) => {
  const [username, setUsername] = useState('');

  const [createUsername, { data, loading, error }] = useMutation<
    CreateUsernameData,
    CreateUsernameVariable
  >(UserOperations.Mutations.createUsername);

  console.log('HERE IS DATA', data, loading, error);

  const onSubmit = async () => {
    if (!username) return;
    try {
      await createUsername({ variables: { username } });
    } catch (error) {
      console.log('onSubmit error', error);
    }
  };

  return (
    <div>
      <Center height="100vh">
        <Stack spacing={8} align="center">
          {session ? (
            <>
              <Text fontSize="3xl">Create a username</Text>
              <Input
                placeholder="Enter a username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <Button width="100%" onClick={onSubmit}>
                Save username
              </Button>
            </>
          ) : (
            <>
              <Text fontSize="3xl">Chat App</Text>
              <Button
                onClick={() => signIn('google')}
                leftIcon={<Image height="20px" src="/images/googlelogo.png" />}
              >
                Continue with Google
              </Button>
            </>
          )}
        </Stack>
      </Center>
    </div>
  );
};

export default Auth;
