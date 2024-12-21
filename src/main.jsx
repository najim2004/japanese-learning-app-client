import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux"; // Import Provider
import { store } from "./redux/store";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Toaster } from "./components/ui/toaster";
import { InitialDataFetcher } from "./components/InitialDataFetcher";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap App with Provider and pass the Redux store */}

    <Provider store={store}>
      <InitialDataFetcher>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </InitialDataFetcher>
      <Toaster />
    </Provider>
  </StrictMode>
);
