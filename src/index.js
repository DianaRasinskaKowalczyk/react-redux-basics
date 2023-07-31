import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from "redux";
import { reducers } from "./reducers";
import { Provider } from "react-redux";

import App from "./App";

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = createRoot(document.querySelector("#root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
