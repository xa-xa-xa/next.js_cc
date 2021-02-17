import { useRouter } from 'next/router';
import Link from 'next/link';

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Back</Link>
    </>
  );
};

// export const getServerSideProps = async (ctx) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
//   );
//   const article = await res.json();
//   console.log('AA:', article);
//   return {
//     props: {
//       article,
//     },
//   };
// };
export const getStaticProps = async (ctx) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
  );
  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
      paths,
      fallback: false
  };
};

export default article;
