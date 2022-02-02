import { fromJSON } from 'postcss';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

export const Routes = () => {
  return <div className='p-4'>
      <Switch>
          <Route exact path ="/">
              <Redirect to ="/search" />
          </Route>
          <Route path ={['/search', '/image', '/news', '/videos']}></Route>
      </Switch>
  </div>;
}
