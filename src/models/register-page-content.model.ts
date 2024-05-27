export interface IRegisterPageContent {
  title: string;

  btnRegister: string;
  checkBoxHasAccount: string;
  infoRegister: string;

  labelEmail: string;
  labelFullName: string;
  labelUsername: string;
  labelPassword: string;
  labelConfirmPassword: string;
  labelCodeRef: string;

  errorRequiredEmail: string;
  errorRequiredFullName: string;
  errorRequiredUsername: string;
  errorRequirePassword: string;
  errorRequirePasswordMinLength: string;
  errorRequireConfirmPassword: string;
  errorRequireConfirmPasswordMinLength: string;
  errorRequireConfirmPasswordNotMatchValidation: string;
  errorRequireCodeRef: string;

  placeholderEmail: string;
  placeholderFullName: string;
  placeholderUsername: string;
  placeholderPassword: string;
  placeholderConfirmPassword: string;
  placeholderCodeRef: string;

  defaultValueEmail: string;
  defaultValueFullName: string;
  defaultValueUsername: string;
  defaultValuePassword: string;
  defaultValueConfirmPassword: string;
  defaultValueCodeRef: string;
}
