import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Panel from './Panel';

describe('Carousel Structure', () => {
  it('renders title', () => {
    const container = render(
      <Panel
        key={'title'}
        title={'title'}
        expanded={false}
        isRoundedTop={true}
        isRoundedBottom={true}
      >
        this is a paragraph
      </Panel>,
    );
    expect(container.getByText('title')).toBeInTheDocument();
  });
  it('renders content', () => {
    const container = render(
      <Panel
        key={'title'}
        title={'title'}
        expanded={true}
        isRoundedTop={true}
        isRoundedBottom={true}
      >
        this is a paragraph
      </Panel>,
    );
    expect(container.getByText('this is a paragraph')).toBeInTheDocument();
  });

  it('renders content when title clicked', () => {
    const container = render(
      <Panel
        key={'title'}
        title={'title'}
        expanded={false}
        isRoundedTop={true}
        isRoundedBottom={true}
      >
        this is a paragraph
      </Panel>,
    );
    expect(container.queryByText('this is a paragraph')).toBeFalsy();
    const node = container.getByTestId('title');
    fireEvent.click(node);
    expect(container.getByText('this is a paragraph')).toBeInTheDocument();
  });
});

// ran out of time here, ideally I would like to test the stying.
