import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}>
        <Layout />
      </RouterProvider>
    </div>
  );
}

export default App;
