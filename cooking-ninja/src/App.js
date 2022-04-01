import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

//Pages
import Home from "./pages/home/Home"
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

//styles
import './App.css'
import Navbar from './components/Navbar';
import ThemeCollector from './components/ThemeCollector';
function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`} >
      <BrowserRouter>
        <Navbar />
        <ThemeCollector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App
