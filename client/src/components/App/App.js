// import { observer } from 'mobx-react-lite'
// import { useEffect, useState } from 'react';
// import { RootStoreProvider, RootStore } from '../../store/rootstore';
// import { Routes, Route, Navigate, useNavigate} from "react-router-dom";
// import { history } from '../../history/history';
import Menu from '../Menu/Menu';
import Team from '../Team/Team';
import './App.css';

function App() {
  return (
    <div className=''>
      <Menu />
      <div className="App">
          <Team />
      </div>
    </div>
    
  );
}

export default App;
