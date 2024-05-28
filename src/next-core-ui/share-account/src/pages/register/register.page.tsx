import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IRegisterPageProps } from './register.type';
import * as yup from 'yup';
import Link from 'next/link';
import { IRegisterFormData, useRegister } from '../../../../../hooks';
import { SnowComponent } from '../../../../../components';
import Head from 'next/head';

export const RegisterPage: React.FC<IRegisterPageProps> = () => {
  const { handleRegister } = useRegister();

  const loginSchema = yup.object().shape({
    email: yup.string().required('Email không được để trống'),
    username: yup.string().required('Tên không được để trống'),
    fullName: yup.string().required('Họ không được để trống'),
    password: yup.string().required('Mật khẩu không được để trống').min(6, 'Mật khẩu ít nhất 6 ký tự'),
    confirmPassword: yup
      .string()
      .min(6, 'Mật khẩu ít nhất 6 ký tự')
      .required('Xác nhận mật khẩu không được để trống')
      .oneOf([yup.ref('password'), ''], 'Mật khẩu không khớp'),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm<IRegisterFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldUnregister: false,
    resolver: yupResolver(loginSchema),
    defaultValues: {},
  });

  return (
    <>
      <Head>
        <meta property="og:title" content="Đăng ký" />
        <meta property="og:url" content="/register" />
        <meta property="og:image" />
        <title>Đăng ký</title>
      </Head>
      <SnowComponent className="toto-register">
        <div className="w-screen min-h-screen justify-center p-2 absolute inset-0 flex flex-col items-center bg-cover bg-center bg-no-repeat">
          <div className="w-full max-w-[450px] px-2 lg:px-0 mx-auto">
            <div className="rounded-2xl bg-gray-5 lg:w-[500px] mx-auto p-8">
              <div className="flex justify-end" data-svelte-h="svelte-w8q1sk">
                <Link href="/" className="transition duration-200 hover:text-primary-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Link>
              </div>
              <div className="text-2xl font-bold mb-8 text-center text-dark-3">Đăng kí tài khoản</div>
              <form className="mb-4" onSubmit={handleSubmit(handleRegister)}>
                <div className="mb-4">
                  <label className="block font-medium text-sm mb-2 " htmlFor="email">
                    Email{' '}
                  </label>
                  <input
                    className="rounded-md block w-full bg-[#ffffff66] border border-gray-4 text-sm px-4 py-2 "
                    id="email"
                    type="text"
                    {...register('email')}
                    placeholder="Email"
                    onChange={(e) => {
                      if (!e.target.value) {
                        clearErrors('email');
                      }
                    }}
                  />
                  {errors.email && (
                    <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="email">
                      {errors.email?.message?.toString()}
                    </label>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-sm mb-2 text-dark-3" htmlFor="fullName">
                    Tên của bạn
                  </label>
                  <input
                    className="rounded-md block w-full bg-[#ffffff66] border border-gray-4 text-sm px-4 py-2 "
                    id="fullName"
                    type="text"
                    {...register('fullName')}
                    placeholder="Họ"
                    onChange={(e) => {
                      if (!e.target.value) {
                        clearErrors('fullName');
                      }
                    }}
                  />
                  {errors.fullName && (
                    <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="fullName">
                      {errors.fullName?.message?.toString()}
                    </label>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-sm mb-2 text-dark-3" htmlFor="username">
                    Tên tài khoản
                  </label>
                  <input
                    className="rounded-md block w-full bg-[#ffffff66] border border-gray-4 text-sm px-4 py-2 "
                    id="username"
                    type="text"
                    {...register('username')}
                    placeholder="Tên tài khoản"
                    onChange={(e) => {
                      if (!e.target.value) {
                        clearErrors('username');
                      }
                    }}
                  />
                  {errors.username && (
                    <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="username">
                      {errors.username?.message?.toString()}
                    </label>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-sm mb-2 text-dark-3" htmlFor="password">
                    Mật khẩu
                  </label>
                  <input
                    className="rounded-md block w-full bg-[#ffffff66] border border-gray-4 text-sm px-4 py-2 "
                    id="password"
                    type="password"
                    {...register('password')}
                    placeholder="********"
                    onChange={(e) => {
                      if (!e.target.value) {
                        clearErrors('password');
                      }
                    }}
                  />
                  {errors.password && (
                    <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="password">
                      {errors.password?.message?.toString()}
                    </label>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block font-medium text-sm mb-2 text-dark-3" htmlFor="confirmPassword">
                    Xác nhận mật khẩu{' '}
                  </label>
                  <input
                    className="rounded-md block w-full bg-[#ffffff66] border border-gray-4 text-sm px-4 py-2 "
                    id="confirmPassword"
                    type="password"
                    {...register('confirmPassword')}
                    placeholder="Xác nhận mật khẩu"
                    onChange={(e) => {
                      if (!e.target.value) {
                        clearErrors('confirmPassword');
                      }
                    }}
                  />
                  {errors.confirmPassword && (
                    <label className="block font-medium text-sm mb-2 mt-3 text-red-600" htmlFor="confirmPassword">
                      {errors.confirmPassword?.message?.toString()}
                    </label>
                  )}
                </div>

                <button
                  type="submit"
                  className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-primary  text-white hover:bg-primary-lighter break-words transition duration-200 w-full"
                >
                  <div className="line-clamp-1">Đăng ký</div>
                </button>
              </form>
              <div className="mb-8">
                <Link
                  href="/login"
                  target="_self"
                  className="rounded-md flex justify-center items-center gap-2 h-10 text-sm px-4 py-2 bg-light-1  text-dark hover:bg-gray-4 break-words transition duration-200 w-full"
                  role="button"
                >
                  <div className="line-clamp-1 text-dark-3">Tôi đã có tài khoản</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SnowComponent>
    </>
  );
};
