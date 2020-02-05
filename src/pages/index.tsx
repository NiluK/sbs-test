import React from 'react';
import Panel from '../components/Panel';
import data from '../data';

const Home = (): React.ReactNode => {
  return data.map((val, idx) => (
    <Panel
      key={val.title}
      title={val.title}
      expanded={idx == 0}
      isRoundedTop={idx == 0}
      isRoundedBottom={idx == data.length - 1}
    >
      {val.content}
    </Panel>
  ));
};

export default Home;
