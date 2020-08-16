import { ValidationError } from 'yup';

interface Errors {
  [x: string]: string;
}

export default function getValidationErrors<F>(errors: ValidationError): F {
  const err: F = {} as F;

  errors.inner.forEach((error) => {
    err[error.path] = error.message;
  });

  return err;
}
