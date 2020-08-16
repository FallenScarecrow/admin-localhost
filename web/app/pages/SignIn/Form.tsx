import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import * as Yup from 'yup';

import {
  InputAdornment,
  Button,
  Grid,
  Typography,
  TextField,
  Tooltip,
  Zoom,
} from '@material-ui/core';
import { ErrorOutline } from '@material-ui/icons';

import { useAuth } from '../../hooks/Auth';
import getValidationErrors from '../../utils/getValidationErrors';

import useStyle from './style';

const schema = Yup.object().shape({
  username: Yup.string().required('Digite seu Login.'),
  password: Yup.string().required('Digite sua Senha.'),
});

const Form: React.FC = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const [t] = useTranslation();
  const classes = useStyle();

  const history = useHistory();
  const { user, signIn } = useAuth();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await schema.validate(state, { abortEarly: false });
        signIn(state);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors<typeof errors>(err);
          setErrors(error);
        }
      }
    },
    [state, signIn],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [],
  );

  return (
    <Grid
      container
      item
      alignItems="center"
      justify="center"
      direction="column"
      component="form"
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <h1>{t('login:signIn')}</h1>
      <Grid
        item
        container
        justify="center"
        direction="column"
        alignItems="center"
        style={{ width: 300 }}
      >
        <TextField
          name="username"
          type="username"
          size="small"
          label={t('login:login')}
          value={state.username}
          error={!!errors.username}
          variant="outlined"
          onChange={handleInputChange}
          fullWidth
          autoFocus
          autoComplete="username"
          InputProps={{
            endAdornment: !!errors.username && (
              <InputAdornment aria-label="error" position="end">
                <Tooltip
                  placement="top"
                  TransitionComponent={Zoom}
                  title={errors.username}
                  arrow
                >
                  <ErrorOutline fontSize="small" color="error" />
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="password"
          type="password"
          size="small"
          label={t('login:password')}
          value={state.password}
          error={!!errors.password}
          variant="outlined"
          fullWidth
          onChange={handleInputChange}
          autoComplete="current-password"
          InputProps={{
            endAdornment: !!errors.password && (
              <InputAdornment aria-label="error" position="end">
                <Tooltip
                  color="error"
                  placement="top"
                  TransitionComponent={Zoom}
                  title={errors.password}
                  arrow
                >
                  <ErrorOutline fontSize="small" color="error" />
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
        <Typography
          to="/forgot"
          style={{ marginLeft: 'auto' }}
          color="secondary"
          variant="caption"
          component={Link}
        >
          {t('login:forgotPassword')}
        </Typography>
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        {t('button:signIn')}
      </Button>
    </Grid>
  );
};

export default Form;
