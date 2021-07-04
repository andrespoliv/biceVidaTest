import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import CustomRoute from './CustomRoute'
import Home from "./Home"

const Pages = () => {
  return (
    <Router>
      <Switch>
        <CustomRoute path="/" exact component={Home}/>
      </Switch>
    </Router>
  )
}

export default Pages