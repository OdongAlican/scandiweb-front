import React from 'react';
import { useNavigate } from 'react-router';
import '../styles/Container.scss';
import Button from './Button';
import { ROUTES } from '../utills/routes';

const AppContainer = ({
  children,
  header,
  btnOne,
  btnTwo,
  btnFunction }) => {
  const navigate = useNavigate();

  const onButtonOneClick = (current) => current === 'ADD' ? navigate(ROUTES?.create) : btnFunction();
  const onButtonTwoClick = (current) => current === 'MASS DELETE' ? btnFunction() : navigate(ROUTES?.products);

  return (
    <div className='main'>
      <div className="header-section">
        <div className="header-text">{header}</div>
        <div className="header-buttons">
          <Button
            clickEvent={() => onButtonOneClick(btnOne)}
            text={btnOne === 'ADD' ? 'ADD' : 'Save'}
            type={btnOne === 'ADD' ? 'add' : 'save'} />
          <Button
            clickEvent={() => onButtonTwoClick(btnTwo)}
            text={btnTwo === 'MASS DELETE' ? 'MASS DELETE' : 'Cancel'}
            type={btnTwo === 'MASS DELETE' ? 'delete' : 'cancel'} />
        </div>
      </div>
      <div className="container">{children}</div>
    </div>
  )
}

export default AppContainer;