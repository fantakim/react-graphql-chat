import { useCallback, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PAGE } from '../../constants';
import { useUserContext } from '../../context/UserContext';
import { useJoinUserMutation } from '../../graphql/generated/schema';
import ErrorText from '../Common/ErrorText';
import InputText from '../Common/InputText';

export const JoinUser = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { signIn } = useUserContext();
  const [joinUser, { loading }] = useJoinUserMutation();

  const initialValues = {
    nickName: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const nickName = formValues.nickName.trim();
      const result = await joinUser({ variables: { nickName } });
      const { user, accessToken, errors } = result.data?.joinUser || {};

      if (user && accessToken) {
        signIn(user, accessToken);

        const returnUrl = searchParams.get('returnUrl');
        if (returnUrl) {
          window.location.href = returnUrl;
        } else {
          navigate(PAGE.root, { replace: true });
        }
      }

      if (errors) {
        for (const gqlError of errors) {
          if (gqlError.code === 'ValidationError' && gqlError.errors) {
            for (const fieldError of gqlError.errors) {
              setErrorMessage(fieldError?.errorMessage!);
            }
          } else if (gqlError.code === 'DuplicateNickNameError') {
            setErrorMessage('중복된 닉네임 입니다');
          } else {
            setErrorMessage('An unknown error has occurred.');
          }
        }
      }
    },
    [formValues.nickName, joinUser, navigate, searchParams, signIn]
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
      <h2 className="text-2xl font-semibold mb-2 text-center">손님으로 시작</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-4">
          <InputText
            label="닉네임"
            defaultValue={formValues.nickName}
            updateType="nickName"
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
            손님(Guest)은 로그인 없이 채팅 서비스를 이용하는 사용자를 말합니다.
            일시적으로 서비스를 이용할 수 있고 닉네임만 입력하면 채팅을 시작할
            수 있습니다.
          </span>
        </div>
      </div>
    </div>
  );
};
