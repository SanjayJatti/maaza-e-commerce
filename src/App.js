import { PageRoutes } from "./Routes/PageRoutes";
import { Toaster } from "react-hot-toast";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <PageRoutes />
      <Toaster
        toastOptions={{
          style: {
            fontSize: "2.5rem",
          },
        }}
      />
    </div>
  );
};

export default App;
