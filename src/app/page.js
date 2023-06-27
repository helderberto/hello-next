import React from 'react';

import MainWrapper from '../components/MainWrapper';
import Censored from '../components/Censored';
import HitCounter from '../components/HitCounter';

function Home() {
  return (
    <MainWrapper>
      <h1>
        Exploring the trade-offs with half-gauge
        vs. full-gauge wire in laminated
        woodworking
      </h1>
      <h2>By Saanvi Agarwal and Vera Chauhan</h2>
      <p>You are visitor number <Censored><HitCounter /></Censored>.</p>
    </MainWrapper>
  );
}

export default Home;
