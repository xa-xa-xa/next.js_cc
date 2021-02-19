import ArticleList from '../components/ArticleList';
import { server } from '../config';

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

//! Uncomment this for use with external API
export const getStaticProps = async () => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/all`
  );
  const articles = await res.json();
  console.log("🚀 ~ file: index.js ~ line 18 ~ getStaticProps ~ articles", articles)

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
