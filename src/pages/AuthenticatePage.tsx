import { useParams } from 'react-router-dom';
import { Authenticate } from '../components/Authenticate';
import { Layout } from '../components/Layout';

export const AuthenticatePage = () => {
  const { email } = useParams() as { email: string };
  const { code } = useParams() as { code: string };

  return (
    <Layout>
      <Authenticate email={email} code={code} />
    </Layout>
  );
};
