import Auth from '@/components/Auth';
import Chat from '@/components/Chat';
import { Box } from '@chakra-ui/react';
import { Inter } from '@next/font/google';
import { NextPage, NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { Session } from 'next-auth';

const Home: NextPage = () => {
  const { data } = useSession();

  console.log('Here is Data', data);

  return <Box>{data?.user ? <Chat /> : <Auth />}</Box>;
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
