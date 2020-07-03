import React, { useState, useEffect } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";

function FormRegistraion ({ onSubmit, error, clearError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    setButtonDisabled(false);
  }, [error]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setButtonDisabled(true);
        onSubmit(email, password, password2);
      }}
    >
      <div className="p-fluid">
        <div className="p-field">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
            </span>
            <InputText
              placeholder="Email"
              name={email}
              onChange={e=>setEmail(e.target.value)}
              onFocus={e => clearError()}
            />
          </div>
        </div>

        <div className="p-field">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
            </span>
            <Password
              placeholder="Password"
              name={password}
              onChange={e=>setPassword(e.target.value)}
              onFocus={e => clearError()}
            />
          </div>
        </div>

        <div className="p-field">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
            </span>
            <Password
              placeholder="Repeat password"
              feedback={false}
              name={password2}
              onChange={e=>setPassword2(e.target.value)}
              onFocus={e => clearError()}
            />
          </div>
        </div>

        <div className="p-field">
          <Button
            type="submit"
            label={error ? error : 'Sign up'}
            className={error && 'p-button-danger'}
            disabled={buttonDisabled}
          />
        </div>
      </div>
    </form>
  );
}

export default FormRegistraion;
