import Images from "./components/Images";
import Nav from "./components/Nav";
import Header from "./components/Header";
import images from './assets/imagesArray'

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Images images={images} />
    </div>
  );
}

export default App;
