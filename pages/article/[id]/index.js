// import { useRouter } from 'next/router';
import Link from 'next/link';
import { server } from '../../../config';
import Meta from '../../../components/Meta';
import articleStyle from '../../../styles/Articles.module.css';

const article = ({
  article: {
    flag,
    nativeName,
    name,
    capital,
    languages,
    demonym,
    population,
    currencies,
    region,
    subregion,
    timezones,
    topLevelDomain,
    callingCodes,
  },
}) => {
  // const router = useRouter();
  // const { id } = router.query;

  if (!article) return <Link href='/'>Back</Link>;

  return (
    <div className={(articleStyle.grid, articleStyle.container)}>
      <Meta title={name} description={name} />
      <span>
        <img className={articleStyle.flag} src={flag} />
      </span>
      <h1 className={articleStyle.textCenter}>
        {name}
        {name !== nativeName && (
          <p className={articleStyle.subheader}>Native name: {nativeName}</p>
        )}
      </h1>

      <ul className={articleStyle.list}>
        <li>Capital: {capital}</li>
        <li>Region: {region}</li>
        {subregion && <li>Subregion: {subregion}</li>}
        <li>Population: {population.toLocaleString()}</li>
        <li>Demonym: {demonym}</li>
        <li>
          Language{languages.length > 1 ? 's' : ''}:{' '}
          {languages.map((lang, idx) => (
            <span key={lang.name + idx}>
              {lang.name} ({lang.nativeName})
              {idx !== languages.length - 1 ? ',' : ''}
            </span>
          ))}
        </li>
        <li>
          Currenc{currencies.length > 1 ? 'ies' : 'y'}:{' '}
          {currencies.map((cur, idx) => (
            <span key={cur.name + idx}>
              {cur.name} ({cur.code}, {cur.symbol})
              {idx !== currencies.length - 1 ? ',' : ''}
            </span>
          ))}
        </li>
        <li>
          Time Zone{timezones.length > 1 ? 's' : ''}:{' '}
          {timezones.map((tz, idx) => (
            <span key={tz + idx}>
              {tz}
              {idx !== timezones.length - 1 ? ', ' : ''}
            </span>
          ))}
        </li>
        <li>
          Phone Code{callingCodes.length > 1 ? 's' : ''}:{' '}
          {callingCodes.map((cc, idx) => (
            <span key={cc + idx}>
              +{cc}
              {idx !== callingCodes.length - 1 ? ',' : ''}
            </span>
          ))}
        </li>
        <li>
          Top level domain name{topLevelDomain.length > 1 ? 's' : ''}:{' '}
          {topLevelDomain.map((name, idx) => (
            <span key={name + idx}>
              {name}
              {idx !== topLevelDomain.length - 1 ? ',' : ''}
            </span>
          ))}
        </li>
      </ul>
      <br />
      <Link href='/'>
        <button className={articleStyle.backBtn}>Back</button>
      </Link>
    </div>
  );
};

//! Fetching data from internal API
// Fetching data from internal API
// export const getStaticProps = async (ctx) => {
//   const res = await fetch(`${server}/api/articles/${ctx.params.id}`);
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();
//   const ids = articles.map((article) => id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

//! Fetching data from external API and SSR
// export const getServerSideProps = async (ctx) => {
//   const res = await fetch(
//     `https://restcountries.eu/rest/v2/${ctx.params.alpha3Code}`
//   );
//   const article = await res.json();
//   return {
//     props: {
//       article,
//     },
//   };
// };

//
export const getStaticProps = async (ctx) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${ctx.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`);
  const articles = await res.json();
  const ids = articles.map((article) => article.alpha3Code);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
