import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../../constants';
import { useUserContext } from '../../context/UserContext';
import { useJoinAsMemberMutation } from '../../graphql/generated/schema';
import ErrorText from '../Common/ErrorText';
import InputText from '../Common/InputText';

export const JoinAsMember = () => {
  const navigate = useNavigate();
  const { signIn } = useUserContext();
  const [JoinAsMember, { loading }] = useJoinAsMemberMutation();

  const initialValues = {
    email: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const email = formValues.email.trim();
      const result = await JoinAsMember({ variables: { email } });
      const { user, accessToken, errors } = result.data?.joinAsMember || {};

      if (user && accessToken) {
        signIn(user, accessToken);
        navigate(PAGE.root, { replace: true });
      }

      if (errors) {
        for (const gqlError of errors) {
          if (gqlError.code === 'ValidationError' && gqlError.errors) {
            for (const fieldError of gqlError.errors) {
              setErrorMessage(fieldError?.errorMessage!);
            }
          } else if (gqlError.code === 'DuplicateEmailError') {
            setErrorMessage('중복된 이메일 입니다');
          } else if (gqlError.code === 'FailedLoginError') {
            setErrorMessage('손님만 회원이 될 수 있습니다');
          } else if (gqlError.code === 'ResourceNotFoundError') {
            setErrorMessage('삭제된 회원 입니다');
          } else {
            setErrorMessage('An unknown error has occurred.');
          }
        }
      }
    },
    [JoinAsMember, formValues.email, navigate, signIn]
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
        손님에서 회원으로
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
        <button
          type="submit"
          className="btn mt-2 w-full btn-primary"
          disabled={loading}>
          등록
        </button>
      </form>
    </div>
  );
};
