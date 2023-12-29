import "./index.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "slick-carousel/slick/slick.css"
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persister } from "./redux/Store";

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
    <StrictMode>
        <Provider store={store}>
            {/* <PersistGate loading={null} persister={persister}> */}
                <App />
            {/* </PersistGate> */}
        </Provider>
    </StrictMode>
)