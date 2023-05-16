import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE } from '../../constants';
import { useUserContext } from '../../context/UserContext';
import { useSignUpUserMutation } from '../../graphql/generated/schema';
import ErrorText from '../Common/ErrorText';
import InputText from '../Common/InputText';

export const SignUp = () => {
  const navigate = useNavigate();
  const { signIn } = useUserContext();
  const [signUpUser, { loading }] = useSignUpUserMutation();

  const initialValues = {
    nickName: '',
    email: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const nickName = formValues.nickName.trim();
      const email = formValues.email.trim();
      const result = await signUpUser({ variables: { nickName, email } });
      const { user, accessToken, errors } = result.data?.signUpUser || {};

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
          } else if (gqlError.code === 'DuplicateNickNameError') {
            setErrorMessage('중복된 닉네임 입니다');
          } else if (gqlError.code === 'DuplicateEmailError') {
            setErrorMessage('중복된 이메일 입니다');
          } else {
            setErrorMessage('An unknown error has occurred.');
          }
        }
      }
    },
    [formValues.email, formValues.nickName, navigate, signIn, signUpUser]
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
      <h2 className="text-2xl font-semibold mb-2 text-center">회원으로 시작</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4">
          <InputText
            label="닉네임"
            defaultValue={formValues.nickName}
            updateType="nickName"
            updateFormValue={updateFormValue}
          />
        </div>
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

      <div className="alert alert-info text-sm shadow-lg mt-8">
        <div>
          <span>
            회원으로 가입하면 손님보다 더 많은 권한을 가지게 되며, 닉네임을
            영구적으로 확보 할 수 있습니다. 추후 프로필 설정, 채팅방 개설 등
            다양한 기능을 이용할 수 있습니다.
          </span>
        </div>
      </div>
    </div>
  );
};
