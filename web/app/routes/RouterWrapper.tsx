import React from 'react';
import { Route as Router, Redirect, RouteProps } from 'react-router-dom';

import { LayoutType, DefaultLayout } from '../components/layouts';

export interface RouterWrapperProps extends RouteProps {
  path: string;
  layout?: LayoutType;
  isPrivate?: boolean;
}

const RouterWrapper: React.FC<RouterWrapperProps> = ({
  isPrivate,
  layout: Layout,
  component: Component,
  ...rest
}: RouterWrapperProps) => {
  const signed = rest.path !== '/login';
  console.log(rest);
  /**
   * Redirect user to SignIn page if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !signed) {
    return (
      <Router
        {...rest}
        render={(props) =>
          signed === true ? (
            <Layout location={props.location} history={props.history}>
              <Component
                match={props.match}
                history={props.history}
                location={props.location}
              />
            </Layout>
          ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }
      />
    );
  }

  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */
  if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />;
  }

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return (
    <Router
      exact
      path={rest.path}
      render={(props) => (
        <Layout location={props.location} history={props.history}>
          <Component
            match={props.match}
            history={props.history}
            location={props.location}
          />
        </Layout>
      )}
    />
  );
};

RouterWrapper.defaultProps = {
  exact: true,
  layout: DefaultLayout,
  isPrivate: false,
};

export default RouterWrapper;
