import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  white-space: pre-line;
`;

export const Content = styled.div`
  padding: 10px;
  background: ${(props): string => props?.theme?.colors?.background};
`;

interface Title {
  expanded?: boolean;
  isRoundedTop?: boolean;
  isRoundedBottom?: boolean;
}

export const Title = styled.div<Title>`
  background: ${(props): string =>
    props.expanded
      ? props?.theme?.colors?.primary
      : props?.theme?.colors?.secondary};
  &:hover {
    background: ${(props): string => props?.theme?.colors?.highlight};
  }
  padding: 15px;
  font-size: 20px;
  border: 1px solid ${(props): string => props?.theme?.colors?.background};
  color: ${(props): string => props?.theme?.colors?.background};
  font-weight: bold;
  ${(props): string =>
    props?.isRoundedTop
      ? `border-top-left-radius: 10px; 
         border-top-right-radius: 10px;`
      : ''}
  ${(props): string =>
    props?.isRoundedBottom
      ? `border-bottom-left-radius: 10px; 
         border-bottom-right-radius: 10px;`
      : ''}
`;
