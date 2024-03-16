import { useState } from "react";
import { Home } from "./Components/Home";
import { Layout } from "./Components/Layout";

function App() {
  const [searchText, setSeacrhText] = useState('');
  //Я бы использовал redux

  return (
    <Layout setSeacrhText={setSeacrhText}>
      <Home searchText={searchText} />
    </Layout>
  );
}

export default App;
