import { Label, TextInput, Textarea } from 'flowbite-react';
import { ICartInfoFormProps } from './cart-info-form.type';

export const CartInfoForm: React.FC<ICartInfoFormProps> = (props) => {
  const { register, errors, clearErrors } = props;
  return (
    <div className="flex flex-col gap-4 px-[15px] md:px-[30px]">
      <h3 className="font-bold uppercase text-[17px] md:text-[20px]">Thông tin thanh toán</h3>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:col-6">
          <div className="mb-2 block">
            <Label htmlFor="firstName" value="Tên *" />
          </div>
          <TextInput
            id="firstName"
            type="text"
            sizing="md"
            {...register('firstName')}
            color={`${errors.firstName ? 'failure' : 'gray'}`}
            onChange={() => clearErrors('firstName')}
            helperText={
              errors.firstName && <span className="font-medium text-red-500">{errors.firstName?.message}</span>
            }
          />
        </div>
        <div className="md:col-6">
          <div className="mb-2 block">
            <Label htmlFor="lastName" value="Họ *" />
          </div>
          <TextInput
            id="lastName"
            type="text"
            sizing="md"
            {...register('lastName')}
            color={`${errors.lastName ? 'failure' : 'gray'}`}
            onChange={() => clearErrors('lastName')}
            helperText={errors.lastName && <span className="font-medium text-red-500">{errors.lastName?.message}</span>}
          />
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phoneNumber" value="Số điện thoại *" />
        </div>
        <TextInput
          id="phoneNumber"
          type="number"
          sizing="md"
          {...register('phoneNumber')}
          color={`${errors.phoneNumber ? 'failure' : 'gray'}`}
          onChange={() => clearErrors('phoneNumber')}
          helperText={
            errors.phoneNumber && <span className="font-medium text-red-500">{errors.phoneNumber?.message}</span>
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="emailAddress" value="Địa chỉ email *" />
        </div>
        <TextInput
          id="emailAddress"
          type="text"
          sizing="md"
          {...register('emailAddress')}
          color={`${errors.emailAddress ? 'failure' : 'gray'}`}
          onChange={() => clearErrors('emailAddress')}
          helperText={
            errors.emailAddress && <span className="font-medium text-red-500">{errors.emailAddress?.message}</span>
          }
        />
      </div>
      <div>
        <div className="mb-2 block">
          <h3 className="uppecase font-bold text-[20px]">Thông tin bổ sung</h3>
          <Label htmlFor="note" value="Ghi chú đơn hàng (tùy chọn)" className="font-bold" />
        </div>
        <Textarea id="note" className="h-[120px]" {...register('note')} />
      </div>
    </div>
  );
};
