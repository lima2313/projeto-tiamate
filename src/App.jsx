import { QueryClientProvider } from "@tanstack/react-query";
import Paths from "./routes/Paths";
import { queryClient } from "./services";
import 'boxicons'


const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Paths />
      </QueryClientProvider>
    </>
  );
}

export default App;