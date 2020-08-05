import React, { useState } from 'react';
import FormAuth from "../FormAuth/FormAuth";
import FormRegistraion from "../FormRegistration/FormRegistraion";
import classnames from 'classnames/bind';
import styles from './RegAuthPage.scss';

const cx = classnames.bind(styles);

export const RegAuthPage = ({
  authError,
  regError,
  onSubmitAuthForm,
  onSubmitRegForm,
  clearAuthError,
  clearRegError,
}) => {
  const [needAuth, setNeedAuth] = useState(true);
  return (
    <div className={cx('wrap')}>
      <div className="p-grid p-nogutter p-justify-center">
        <div className="p-col-10 p-md-7 p-xl-5">
          {needAuth
            ? (
              <>
                <h1 className={cx('title')}>Login with your account</h1>
                <FormAuth error={authError} clearError={clearAuthError} onSubmit={onSubmitAuthForm} />

                <div className="p-grid p-justify-between">
                  <div className={`p-col-12 p-sm-5 ${cx('forgot')}`}>
                    <a href='/forgot'>Forgot password?</a>
                  </div>
                  <div className={`p-col-12 p-sm-7 ${cx('switch-link')}`}>
                    Don't have an account? <a
                    href='#reg'
                    onClick={e => {
                      e.preventDefault();
                      setNeedAuth(false);
                    }}
                  >Sign up!</a>
                  </div>
                </div>
              </>
            )
            : (
              <>
                <h1 className={cx('title')}>Please let us know you by this small registration form</h1>

                <FormRegistraion error={regError} clearError={clearRegError} onSubmit={onSubmitRegForm} />
                <div className="p-grid p-justify-between">
                  <div className={`p-col-12 ${cx('switch-link')}`}>
                    Already have an account? <a
                    href='#auth'
                    onClick={e => {
                      e.preventDefault();
                      setNeedAuth(true);
                    }}
                  >Log in</a>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default RegAuthPage;