export class ManageInfo {
  localLoginProvider?: string;
  email?: string;
  logins?: Login[];
  externalLoginProviders?: ExternalLoginProvider[];
}

export class Login {
  loginProvider?: string;
  providerKey?: string;
}

export class ExternalLoginProvider {
  name?: string;
  url?: string;
  state?: string;
}
