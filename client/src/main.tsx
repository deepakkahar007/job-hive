import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import MaxWidthWrapper from "./components/MaxWidthWrapper.tsx";
import { router } from "./pages/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}>
      <MaxWidthWrapper>
        <App />
      </MaxWidthWrapper>
    </RouterProvider>
  </StrictMode>,
);
