import styled from 'styled-components';
import { StInput } from 'components/common/Input/Input.styles';
import { StHeaderTextH1 } from 'components/common/HeaderText/HeaderText.styles';

export const StSearchHeader = styled.div`
  border-bottom: 1px solid #e3e3e3;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
`;

export const StSearchInput = styled(StInput)`
  width: 166px;
  border-radius: 25px;
  margin: 12px 0;
  text-align: center;

  &::placeholder {
    color: #616161;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const StSearchHeaderText = styled(StHeaderTextH1)`
  margin-left: 7px;
`;