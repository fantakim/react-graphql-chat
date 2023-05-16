import { OtpForm } from './OtpForm';

type AuthenticateProps = {
  email: string;
  code: string;
};

export const Authenticate = ({ email, code }: AuthenticateProps) => {
  return (
    <div className="grid place-content-center">
      <OtpForm email={email} code={code} />
    </div>
  );
};
