import Nav from './Nav';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <>
      <h1 className={headerStyles.title}>
        <span className=''>GitHub</span> News
      </h1>
      <p className={headerStyles.description}>
        Testing building way to build websites.
      </p>
    </>
  );
};

export default Header;
