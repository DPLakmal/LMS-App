import LoginForm from "../_ui/login-form";

import { signIn, useSession } from "next-auth/client";


const studentLoginPage = () => {
  return (<div>
    <LoginForm />


    <button onClick={() => signIn("google")}>
      Sign in with Google
    </button>

  </div>);
}

export default studentLoginPage;