import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Blog from './components/Blog'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
