export const checkValidData = (name, email, password) => {
  const isNameValid = /^([a-zA-Z ]){2,30}$/.test(name);

  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordvalid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Enter a valid Name";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordvalid) return "Password is not valid";

  return null;
};
