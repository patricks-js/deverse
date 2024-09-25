"use server";

import { signIn } from "@/lib/auth";

type Credentials = {
  username: string;
  password: string;
};

type OAuthProvider = {
  provider: "github";
  redirectTo: string;
};

type CredentialsProvider = {
  provider: "credentials";
  redirectTo: string;
  credentials: Credentials;
};

type Props = OAuthProvider | CredentialsProvider;

export async function signInAction(props: Props) {
  if (props.provider === "credentials") {
    // TODO: implement credentials sign in
    // return signIn("credentials", {
    //   redirectTo: props.redirectTo,
    //   values: props.credentials,
    // });
  }

  await signIn(props.provider, { redirectTo: props.redirectTo });
}
