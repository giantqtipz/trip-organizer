export interface UserAttributes {
  user: {
    email?: string;
    loggedIn?: boolean;
  };
}

export interface RegistrationAttributes {
  newUser: {
    email?: string;
    password?: string;
  };
}
