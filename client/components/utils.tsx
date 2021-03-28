export const passwordValidator = (
  password: string,
  confirm: string
): boolean => {
  let validation = false;
  const regex = new RegExp(
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{8,20}$/
  );
  if (password === confirm && regex.test(password) && regex.test(confirm)) {
    validation = true;
  }
  return validation;
};
