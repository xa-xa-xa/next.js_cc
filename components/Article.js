import Link from 'next/link';
import articleStyles from '../styles/Articles.module.css';

const Article = ({
  article: { alpha3Code, flag, population, nativeName, region, subregion, name },
}) => {
  return (
    <Link href='/article/[alpha3Code]' as={`/article/${alpha3Code}`}>
      <a className={articleStyles.card}>
        <h3>
          {`${name} (${alpha3Code})`}
          <span>
            <img
              className={articleStyles.flag}
              src={flag}
              style={{
                position: 'relative',
                width: 28 * 1.33,
                height: 28,
                top: '.3rem',
                marginLeft: 8,
              }}
            />
          </span>
        </h3>
        {name !== nativeName && <p className='native-name'>(Native name: {nativeName})</p>}
        <p>Population: {population.toLocaleString()}</p>
        <p>Region: {region}</p>
        {subregion && <p>Subregion: {subregion}</p>}
      </a>
    </Link>
  );
};

export default Article;
