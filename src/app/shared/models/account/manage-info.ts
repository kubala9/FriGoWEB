export interface ManageInfo {
  localLoginProvider?: string;
  email?: string;
  logins?: Login[];
  externalLoginProviders?: ExternalLoginProvider[];
}

export interface Login {
  loginProvider?: string;
  providerKey?: string;
}

export interface ExternalLoginProvider {
  name?: string;
  url?: string;
  state?: string;
}
