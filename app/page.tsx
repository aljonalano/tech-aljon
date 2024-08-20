'use client';
import React from 'react';
import { Provider } from 'react-redux';
import ItemList from '../components/ItemList';
import { store } from '../redux/store';

export default function Home() {
  return (
    <Provider store={store}>
      <ItemList />
    </Provider>
  );
}
