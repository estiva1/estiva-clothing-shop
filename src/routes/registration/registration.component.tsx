import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { AuthContainer } from "../authentication/authentication.styles";

const Registration = () => {
  return (
    <AuthContainer>
      <SignUpForm />
    </AuthContainer>
  );
};

export default Registration;
