import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthContainer>
      <SignInForm />
    </AuthContainer>
  );
};

export default Authentication;
