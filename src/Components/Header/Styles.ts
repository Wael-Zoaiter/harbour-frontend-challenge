import { HarbourLogo } from 'Assets/images';
import { Button } from 'Elements';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors['primary']};
  position: relative;
  padding-left: 30px;
  padding-right: 30px;
  height: 74px;

  @media ${({ theme }) => theme.media['small']} {
    padding-left: 18px;
    padding-right: 18px;
    height: 50px;
  }
`;

export const Logo = styled(HarbourLogo)`
  fill: ${({ theme }) => theme.colors['white']};
  height: 15px;
  width: auto;
`;

export const ScholarshipName = styled.h2`
  color: ${({ theme }) => theme.colors['white']};
  font-size: 13px;
  margin: 0;
  margin-left: 12px;
  margin-bottom: auto;
  text-transform: uppercase;

  @media ${({ theme }) => theme.media['small']} {
    font-size: 11px;
  }
`;

export const ApplyNowButton = styled(Button)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors['secondary']};
  position: absolute;
  right: 100px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors['white']};
  display: flex;
  align-items: center;
  justify-content: center;
  word-break: break-all;

  @media ${({ theme }) => theme.media['small']} {
    display: none;
  }
`;
