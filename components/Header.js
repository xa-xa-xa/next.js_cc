import Nav from './Nav';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <>
      <h1 className={headerStyles.title}>
        <span className=''>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
        consectetur impedit laborum.
      </p>
    </>
  );
};

export default Header;
