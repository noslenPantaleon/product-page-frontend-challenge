import { FC } from 'react';
import styles from './avatar.module.scss';

interface Props {
  pic: string;
}

const Avatar: FC<Props> = ({ pic }) => {
  return (
    <>
      <img className={styles.avatar} src={pic} />
    </>
  );
};

export default Avatar;
