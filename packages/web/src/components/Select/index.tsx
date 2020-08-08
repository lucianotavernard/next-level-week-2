import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: SelectOption[];
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>

        {options.map(option => {
          return (
            <option
              key={option.value}
              value={option.value}
              label={option.label}
            />
          );
        })}
      </select>
    </Container>
  );
};

export default Select;
