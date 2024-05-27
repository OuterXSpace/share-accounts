export interface ILoginPageContent {
  logo?: string;
  title?: string;
  description?: string;
  remember_login?: string;
  forgot_password?: string;
  forgot_password_link?: string;
  newMember?: string;
  registerLink?: string;
  bannerImageUrl?: string;
  trialLabel?: string;

  errorEmail?: string;
  errorNotBlank?: string;
  errorLoginFailed?: string;

  labelEmail?: string;
  labelPassword?: string;
  labelButton_login?: string;
  labelRegister?: string;
  labelBackToHome?: string;

  defaultEmail?: string;
  defaultPassword?: string;

  placeholderEmail?: string;
  placeholderPassword?: string;
}
