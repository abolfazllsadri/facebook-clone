import { signInWithGoogle } from "@/actions/auth";
import GoogleButton from "@/components/login/GoogleButton";

export default function LoginForm() {
  return (
    <form
      action={signInWithGoogle}
      className="flex items-center justify-center"
    >
      <GoogleButton />
    </form>
  );
}
