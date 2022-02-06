import React, { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Router, ScrollToTop } from "@/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

const App = () => {
  return (
    <StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/*" element={<Router />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>
    </StrictMode>
  );
};

export default App;
