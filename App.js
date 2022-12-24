import * as React from 'react';
import AppProvider from './store/context';
import Navigation from './src/navigation'
export default function App(){
  return(
    <AppProvider>
      <Navigation/>
    </AppProvider>
    
  )
}