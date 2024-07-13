import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./reudux/store";
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="font-grotesk">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </Provider>
  </React.StrictMode>
);
