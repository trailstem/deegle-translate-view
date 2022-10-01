import { NextPage } from 'next'
import { useState } from 'react';
import GoogleAPI from '../hooks/useGoogleAPI';
import DeepLAPI from '../hooks/useDeepLAPI';
import { Home } from './Home';

export const home: NextPage = () => {

  return (
    <Home />
  );
}
export default home
