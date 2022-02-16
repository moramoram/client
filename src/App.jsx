import React, { StrictMode } from "react";
import { RecoilRoot } from "recoil";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Router } from "@/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      suspense: true,
    },
  },
});

const App = () => {
  console.log(
    "\n\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⠟⠉⢀⡔⠋⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠉⣿⣿⠛⠁⣸⣿\n⣿⣿⠃⠀⠀⡞⠀⠀⠀⢻⣿⣿⣿⣿⡿⠛⠛⠻⣿⡿⠛⠛⠛⢿⣿⠿⠛⠛⠿⠛⢻⠃⠀⠚⣿⠿⠒⠛⠻⣿⣿\n⣿⠇⠀⠀⢀⡇⠀⠀⠀⣼⣿⣿⣿⣿⠀⠰⢶⣀⣸⡇⠀⢶⣄⣈⡏⠀⣠⣶⡄⠀⢸⡆⠀⣶⡏⠀⣴⣶⡄⠈⣿⡇\n⣿⠀⠀⠀⢸⠁⠀⠀⢀⣿⣿⣿⣿⣿⠷⢤⣄⠀⢹⠷⢦⣄⡀⠙⡇⠀⢿⣿⡟⠀⢸⡇⠀⣿⡇⠀⣤⣤⠤⠤⣿⡇\n⣿⠀⠀⠀⡾⠀⠀⢀⣾⣿⣿⣿⣿⣿⣄⠈⠉⢀⣼⣧⡀⠉⠁⣠⣷⣄⠀⠁⣠⠀⢸⡇⠀⣿⣷⣄⠈⠉⢀⣼⣿\n⣿⣧⡠⠞⠁⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n\n\n"
  );
  return (
    <StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
          <BrowserRouter>
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
