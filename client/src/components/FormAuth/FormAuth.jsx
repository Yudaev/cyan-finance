import React, { useState, useEffect } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function FormAuth ({ onSubmit, error, clearError }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    setButtonDisabled(false);
  }, [error]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setButtonDisabled(true);
        onSubmit(email, password);
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
            <InputText
              placeholder="Password"
              name={password}
              type='password'
              onChange={e=>setPassword(e.target.value)}
              onFocus={e => clearError()}
            />
          </div>
        </div>

        <div className="p-field">
          <Button
            type="submit"
            label={error ? error : 'Log in'}
            className={error && 'p-button-danger'}
            disabled={buttonDisabled}
          />
        </div>
      </div>
    </form>
  );
}

export default FormAuth;
