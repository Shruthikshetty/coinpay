import styles from './index.styles';
import HeaderLayout from '~/components/layouts/HeaderLayout';
import TitleSubtitle from '~/components/text-display/TitleSubtitle';

const Login = () => {
  return (
    <HeaderLayout containerStyles={styles.root}>
      <TitleSubtitle
        title={'Login to coinpay'}
        subTitle="login using your customer id"
      />
    </HeaderLayout>
  );
};

export default Login;
