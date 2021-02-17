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
        consectetur impedit laborum, alias quia cum laudantium hic ipsam
        obcaecati doloremque iusto eaque eum enim sit ut officia velit ullam
        nobis?
      </p>
    </>
  );
};

export default Header;
