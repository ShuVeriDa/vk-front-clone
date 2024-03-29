import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <App/>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


