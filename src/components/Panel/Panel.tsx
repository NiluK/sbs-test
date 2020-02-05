import React, { useState } from 'react';
import * as Styled from './Panel.styled';

interface Panel {
  expanded: boolean;
  children: React.ReactNode;
  title: string;
  isRoundedTop?: boolean;
  isRoundedBottom?: boolean;
}

const Panel = (props: Panel): JSX.Element => {
  const [expanded, setExpanded] = useState(props.expanded);
  const { title, children, isRoundedBottom, isRoundedTop } = props;
  return (
    <Styled.Container>
      <Styled.Title
        data-testid="title"
        isRoundedTop={isRoundedTop}
        isRoundedBottom={!expanded && isRoundedBottom}
        onClick={(): void => setExpanded(!expanded)}
        expanded={expanded}
      >
        {title}
      </Styled.Title>
      {expanded && <Styled.Content>{children}</Styled.Content>}
    </Styled.Container>
  );
};

export default Panel;
