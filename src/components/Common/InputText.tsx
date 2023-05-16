import { useState } from 'react';

interface IProps {
  label: string;
  labelStyle?: string;
  type?: string;
  containerStyle?: string;
  defaultValue?: string;
  placeholder?: string;
  updateFormValue: (value: { updateType: string; value: string }) => void;
  updateType: string;
}

const InputText = ({
  label,
  labelStyle = '',
  type = 'text',
  containerStyle = '',
  defaultValue = '',
  placeholder = '',
  updateFormValue,
  updateType,
}: IProps) => {
  const [value, setValue] = useState<string>(defaultValue);
  const updateInputValue = (val: string) => {
    setValue(val);
    updateFormValue({ updateType, value: val });
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={'label-text text-base-content ' + labelStyle}>
          {label}
        </span>
      </label>
      <input
        type={type || 'text'}
        value={value}
        placeholder={placeholder || ''}
        onChange={(e) => updateInputValue(e.target.value)}
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default InputText;
