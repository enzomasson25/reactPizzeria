import React from 'react';
import ReactDOM from 'react-dom';
import Carte from './components/carte';
import Commande from './components/commande';

ReactDOM.render(
  <React.StrictMode>
    <Carte />
  </React.StrictMode>,
  document.getElementById('carteApp')
);

ReactDOM.render(
  <React.StrictMode>
    <Commande />
  </React.StrictMode>,
  document.getElementById('commandeApp')
);