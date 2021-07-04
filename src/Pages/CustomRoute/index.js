import React from 'react'
import { Route } from 'react-router-dom'
import AppLayout from './AppLayout'

const CustomRoute = ({ component: Component, ...rest }) => {

  return (
    <AppLayout>
      <Route {...rest} render={props => <Component {...props} />} />
    </AppLayout>
  )
}

export default CustomRoute