import React from 'react';

import Toast from './Toast';

import useStyle from './style';

const ToastContainer: React.FC = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      {/* <Toast
        message={{
          type: 'info',
          description:
            'Ocorrerá uma atualização às 9:00 horas do dia 05/08/2020.',
        }}
      />
      <Toast
        message={{
          type: 'warn',
          description: (
            <>
              Ocorreu um erro desconhecido.
              <br />
              Tente novamente mais tarde.
            </>
          ),
        }}
      />
      <Toast
        message={{
          type: 'error',
          description: 'Não foi possível realizar o login.',
        }}
      />
      <Toast
        message={{
          type: 'success',
          description: 'Usuário cadastrado com sucesso.',
        }}
      /> */}
    </div>
  );
};

export default ToastContainer;
