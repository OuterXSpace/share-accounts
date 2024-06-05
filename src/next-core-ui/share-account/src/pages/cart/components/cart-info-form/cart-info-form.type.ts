import { FieldErrors, UseFormClearErrors, UseFormRegister } from 'react-hook-form';

export interface ICartInfoFormProps {
  register: UseFormRegister<ICartInfoFormModel>;
  errors: FieldErrors<ICartInfoFormModel>;
  clearErrors: UseFormClearErrors<ICartInfoFormModel>;
}

export interface ICartInfoFormModel {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  note?: string;
}
