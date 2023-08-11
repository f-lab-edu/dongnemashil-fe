import { Button } from 'components/common';
import React from 'react';
import { StNavBar } from './NavBar.styles';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Search } from 'assets/icons/Search.svg';
import { user } from 'assets/user';

export interface NavBarProps {
  children?: React.ReactNode | null;
  btnLeft?: 'logo' | 'back';
  btnSecondRight?: 'search' | null;
  btnRight?: 'close' | 'mypage' | 'submit' | null;
  onClickSubmit?: () => void;
}

export const NavBar = ({
  btnLeft,
  btnSecondRight,
  btnRight,
  children,
  onClickSubmit,
}: NavBarProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <StNavBar>
      {btnLeft === 'logo' ? (
        <Button type={'icon'} url={'/'}>
          {/* <img src={'/logo.jpg'} /> */}
          🏃🏻‍♀️
        </Button>
      ) : (
        <Button type={'icon'} onClick={goBack}>
          {/* <img src={'/backArrow.jpg'} /> */}
          ⬅️
        </Button>
      )}
      {children ? <div>{children}</div> : null}
      <div>
        {btnSecondRight === 'search' ? (
          <Button type={'icon'} url={'/search'}>
            <Search />
          </Button>
        ) : null}
        {btnRight === 'close' ? (
          <Button type={'icon'} url={'/'}>
            {/* <img src={'/close.jpg'} /> */}
            ✖️
          </Button>
        ) : btnRight === 'mypage' ? (
          <Button type={'icon'} url={'/mypage'}>
            <img src={user} />
          </Button>
        ) : btnRight === 'submit' ? (
          <Button type={'normal'} onClick={onClickSubmit}>
            Submit
          </Button>
        ) : null}
      </div>
    </StNavBar>
  );
};
