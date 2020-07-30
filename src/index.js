import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';

import Home              from './pages/Home';
import CadastroVideo     from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';
import ErroAbestado      from './components/ErroAbestado';

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/"               component={Home} exact />
      <Route path="/home"           component={Home} />
      <Route path="/video/novo"     component={CadastroVideo} />
      <Route path="/categoria/novo" component={CadastroCategoria} />
      <Route component={ErroAbestado} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
