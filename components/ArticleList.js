import articleStyles from '../styles/Articles.module.css';
import Article from './Article';

const ArticleList = ({ articles }) => {
  console.log(articles);
  return (
    <section className={articleStyles.grid}>
      {articles.map((a, idx) => (
        <Article article={a} key={a.title+idx} />
      ))}
    </section>
  );
};

export default ArticleList;
