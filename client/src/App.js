import { BrowserRouter, Route, Switch } from 'react-router-dom'

// route pages
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import BlogDetail from './pages/BlogDetail'

// shared components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/blog/:id"><BlogDetail /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
