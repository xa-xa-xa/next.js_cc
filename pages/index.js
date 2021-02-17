import Head from 'next/head';

export default function Home({ articles }) {
  console.log('HOME');
  console.log('articles:', articles);
  return (
    <div>
      <Head>
        <title>ASK NextJs CC</title>
        <meta
          name='keywords'
          content='description of the content on the your site'
        ></meta>
      </Head>
      <h1>NEXT.JS!!!!!!!!!</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
