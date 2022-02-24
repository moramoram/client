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
    "\n\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⠟⠉⢀⡔⠋⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠉⣿⣿⠛⠁⣸⣿\n⣿⣿⠃⠀⠀⡞⠀⠀⠀⢻⣿⣿⣿⣿⡿⠛⠛⠻⣿⡿⠛⠛⠛⢿⣿⠿⠛⠛⠿⠛⢻⠃⠀⠚⣿⠿⠒⠛⠻⣿⣿\n⣿⠇⠀⠀⢀⡇⠀⠀⠀⣼⣿⣿⣿⣿⠀⠰⢶⣀⣸⡇⠀⢶⣄⣈⡏⠀⣠⣶⡄⠀⢸⡆⠀⣶⡏⠀⣴⣶⡄⠈⣿⡇\n⣿⠀⠀⠀⢸⠁⠀⠀⢀⣿⣿⣿⣿⣿⠷⢤⣄⠀⢹⠷⢦⣄⡀⠙⡇⠀⢿⣿⡟⠀⢸⡇⠀⣿⡇⠀⣤⣤⠤⠤⣿⡇\n⣿⠀⠀⠀⡾⠀⠀⢀⣾⣿⣿⣿⣿⣿⣄⠈⠉⢀⣼⣧⡀⠉⠁⣠⣷⣄⠀⠁⣠⠀⢸⡇⠀⣿⣷⣄⠈⠉⢀⣼⣿\n⣿⣧⡠⠞⠁⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n\n\n▼ 만든 사람\n\nBackend\n- 진형준 (https://github.com/jhj0602)\n- 왕수련 (https://github.com/wangsuuu)\n\nFrontend\n- 채연희 (https://github.com/devpla)\n- 손상준 (https://github.com/SonSangjoon)\n- 이예원 (https://github.com/yewonniii)\n"
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
