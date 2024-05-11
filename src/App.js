
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { addRoute } from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            addRoute.map((item, index) => {
              const Layout = item.element;
              return (
                <Route path={item.path} element={<Layout />} />
              )
            })
          }
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
