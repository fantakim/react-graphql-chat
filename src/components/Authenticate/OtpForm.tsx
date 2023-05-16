import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../../constants';
import { useUserContext } from '../../context/UserContext';
import { useAuthenticateUserMutation } from '../../graphql/generated/schema';
import ErrorText from '../Common/ErrorText';
import OtpInput from './OtpInput';

type OtpFormProps = {
  email: string;
  code: string;
};

export const OtpForm = ({ email, code }: OtpFormProps) => {
  const navigate = useNavigate();
  const { signIn } = useUserContext();
  const [otp, setOtp] = useState(code ?? '');
  const [errorMessage, setErrorMessage] = useState('');
  const [authenticateUser, { loading }] = useAuthenticateUserMutation();

  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if ('OTPCredential' in window) {
      const form = ref.current!;
      const ac = new AbortController();
      const handler = () => {
        ac.abort();
      };
      form.addEventListener('submit', handler);
      navigator.credentials
        .get({
          // @ts-ignore
          otp: { transport: ['sms'] },
          signal: ac.signal,
        })
        .then((otp: any) => {
          setOtp(otp.code);
          form.submit();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await authenticateUser({ variables: { email, code: otp } });
    const { user, accessToken, errors } = result.data?.authenticateUser || {};

    if (user && accessToken) {
      signIn(user, accessToken);
      navigate(PAGE.root, { replace: true });
    }

    if (errors) {
      for (const gqlError of errors) {
        if (gqlError.code === 'ValidationError' && gqlError.errors) {
          setErrorMessage('인증코드는 6자리 입니다');
        } else if (gqlError.code === 'FailedLoginError') {
          setErrorMessage('입력한 인증코드가 올바르지 않습니다');
        } else {
          setErrorMessage('An unknown error has occurred.');
        }
      }
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit} ref={ref}>
      <div className="card-body items-stretch text-center">
        <div className="my-2">
          <h2 className="text-xl">One-Time Password</h2>
          <p className="text-sm text-base-content/80">
            메일에 전달된 인증코드를 입력해주세요
          </p>
        </div>
        <OtpInput
          value={otp}
          onChange={(val) => {
            setOtp(val);
          }}
        />
        {errorMessage ? (
          <>
            <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
            <button
              className="btn btn-primary"
              onClick={() => {
                setErrorMessage('');
                setOtp('');
              }}>
              다시 시도
            </button>
          </>
        ) : (
          <>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}>
              인증코드 확인
            </button>
          </>
        )}
      </div>
    </form>
  );
};
