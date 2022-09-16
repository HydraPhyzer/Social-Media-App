import "../styles/globals.css";
import { Provider } from "react-redux";
import { Store, persistor } from "../Components/Redux/Store";

import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
