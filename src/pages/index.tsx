import { Inter } from '@next/font/google';
import { NextPage, NextPageContext } from 'next';
import { signIn, signOut, useSession, getSession } from 'next-auth/react';
const inter = Inter({ subsets: ['latin'] });

const Home: NextPage = () => {
  const { data } = useSession();

  console.log('Here is Data', data);

  return (
    <div>
      {data?.user ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn('google')}>Sign In</button>
      )}
      {data?.user?.name}
    </div>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default Home;
