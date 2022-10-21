import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/practice-react-blog/">
                <Home />
              </Route>
              <Route path="/practice-react-blog/create">
                <Create />
              </Route>
              <Route path="/practice-react-blog/blogs/:id">
                <BlogDetails />
              </Route> 
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
