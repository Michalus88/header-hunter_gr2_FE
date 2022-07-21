import React from 'react';

import './Wrapper.css';

export const Wrapper =({ children }: { children: JSX.Element }) =>{
  return(
    <div className='wrapper'>
      {children}
    </div>
  )
}