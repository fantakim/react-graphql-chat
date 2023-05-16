import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../../constants';
import { useSignInUserMutation } from '../../graphql/generated/schema';
import ErrorText from '../Common/ErrorText';
import InputText from '../Common/InputText';

export const SignIn = () => {
  const navigate = useNavigate();
  const [signInUser, { loading }] = useSignInUserMutation();

  const initialValues = {
    email: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const email = formValues.email.trim();
      const result = await signInUser({ variables: { email } });
      const { email: emailSent, errors } = result.data?.signInUser || {};

      if (emailSent) {
        navigate(`${PAGE.authenticate}/${emailSent}`);
      }

      if (errors) {
        for (const gqlError of errors) {
          if (gqlError.code === 'ValidationError' && gqlError.errors) {
            for (const fieldError of gqlError.errors) {
              setErrorMessage(fieldError?.errorMessage!);
            }
          } else if (gqlError.code === 'ResourceNotFoundError') {
            setErrorMessage('삭제된 회원 입니다');
          } else {
            setErrorMessage('An unknown error has occurred.');
          }
        }
      }
    },
    [formValues.email, navigate, signInUser]
  );

  const updateFormValue = ({
    updateType,
    value,
  }: {
    updateType: string;
    value: string;
  }) => {
    setErrorMessage('');
    setFormValues({ ...formValues, [updateType]: value });
  };

  return (
    <div className="py-24 px-10">
      <h2 className="text-2xl font-semibold mb-2 text-center">
        이메일로 로그인
      </h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4">
          <InputText
            label="이메일"
            defaultValue={formValues.email}
            updateType="email"
            updateFormValue={updateFormValue}
          />
        </div>
        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
        {loading ? (
          <button className="btn btn-primary mt-2 w-full loading disabled">
            loading
          </button>
        ) : (
          <button type="submit" className="btn btn-primary mt-2 w-full">
            계속
          </button>
        )}
      </form>
    </div>
  );
};
