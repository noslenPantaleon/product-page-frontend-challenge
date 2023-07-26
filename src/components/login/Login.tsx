import Avatar from '../avatar/Avatar';
import styles from './login.module.scss';

const Login = () => {
  return (
    <>
      <section className={styles.loginContainer}>
        <Avatar pic={'./images/image-avatar.png'} />
      </section>
    </>
  );
};

export default Login;
