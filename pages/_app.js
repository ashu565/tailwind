import "../styles/globals.css";
import { Provider } from "../Components/Contexts/updateContext";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
