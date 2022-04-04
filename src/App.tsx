import React from 'react';
import CatalogList from './components/CatalogList/CatalogList';
import Header from './components/header/Header';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import {catalogSlice} from './redux/reducers/catalogSlice';
import styles from "./styles.module.scss"

function App() {
  const dispatch = useAppDispatch();
  const {} = useAppSelector(state => state.catalogReucer);

  return (
    <div className={styles.App}>
      <Header />
      <CatalogList />
    </div>
  );
}

export default App;
