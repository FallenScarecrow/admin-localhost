import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import {
  CloseOutlined,
  ReportProblemOutlined,
  HelpOutline,
  ErrorOutline,
  CheckCircleOutline,
} from '@material-ui/icons';

import useStyle from './style';

export interface ToastMessage {
  type: 'info' | 'warn' | 'error' | 'success';
  description: string | React.ReactNode;
}

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  info: <HelpOutline />,
  warn: <ReportProblemOutlined />,
  error: <ErrorOutline />,
  success: <CheckCircleOutline />,
};

const Toast: React.FC<ToastProps> = ({ message }: ToastProps) => {
  const classes = useStyle(message);

  return (
    <div className={classes.root}>
      {icons[message.type]}
      <p>{message.description}</p>
      <IconButton>
        <CloseOutlined />
      </IconButton>
    </div>
  );
};

export default Toast;
