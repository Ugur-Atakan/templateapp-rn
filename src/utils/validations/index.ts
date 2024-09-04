export const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

export const isEmailValid = (email: string) => {
  return emailRegEx.test(email);
};

export const isCodeValid = (code: string) => {
  return code.trim().length === 6;
};

export const isPasswordValid = (password: string):{status:boolean,response:string} => {
  if (password.length < 8) {
    return {
      status: false,
      response: 'Password must be at least 8 characters long.',
    };
  }
  if (!/[A-Z]/.test(password)) {
    return {
      status: false,
      response: 'Password must contain at least one uppercase letter.',
    };
  }
  if (!/[a-z]/.test(password)) {
    return {
      status: false,
      response: 'Password must contain at least one lowercase letter.',
    };
  }
  if (!/\d/.test(password)) {
    return {
      status: false,
      response: 'Password must contain at least one number.',
    };
  }
  if (!/[^a-zA-Z0-9]/.test(password)) {
    return {
      status: false,
      response: 'Password must contain at least one special character',
    };
  }

  return {
    status: true,
    response: 'Everything is fine',
  };
};

export const loginCheck = (email:string, password:string) => {
  if (!isEmailValid(email)) {
    return 'invalidEmail';
  }
  if (isPasswordValid(password).status !== true) {
    return isPasswordValid(password).response;
  }
  return true;
};

export const registerCheck = (email:string, password:string, confirmPassword:string, terms:boolean) => {
  if (!isEmailValid(email)) {
    return 'Invalid Email';
  }
  if (isPasswordValid(password).status !== true) {
    return isPasswordValid(password).response;
  }
  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }
  if (!terms) {
    return 'Please accept the terms and conditions';
  }
  return true;
};
