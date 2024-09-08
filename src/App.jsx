import CustomSlider from "./components/custom.slider";
import Header from "./components/header";
import imagesHeader from "./components/imagesHeader";
import OverlayContent from "./components/OverlayContent";

function App() {
  return (
    <>
      <Header />
      <CustomSlider>
        {imagesHeader.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      <OverlayContent />
    </>
  );
}

export default App;
