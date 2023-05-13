import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Overview } from './Overview';
import { Layouts } from './Layouts';

export const Url = {
  dashboard: '/dashboard',
  layouts: '/layouts',
  accountSettings: '/account-settings',
  authentications: '/authentications',
  misc: '/misc',
  cards: '/cards',
  userInterface: '/user-interface',
  extendedUi: '/extended-ui',
  boxicons: '/boxicons',
  formElements: '/form-elements',
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: Url.dashboard,
    element: <Overview />,
  },
  {
    path: Url.layouts,
    element: <Layouts />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
