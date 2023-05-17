import Head from 'next/head';
import Main from '@pages/main';
import axios from 'axios';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="qna blog for developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main />
    </>
  );
}
