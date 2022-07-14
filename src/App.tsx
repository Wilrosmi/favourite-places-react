import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import placeArray from "./placeData";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <MainContent arr={placeArray} />
      <Footer />
    </>
  );
}

export default App;
