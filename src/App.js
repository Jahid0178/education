import { useEffect, useState } from "react";
import PopUpForm from "./components/PopUpForm/PopUpForm";
import Home from "./pages/home/Home";

function App() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  useEffect(() => {
    const popupInterval = setTimeout(() => {
      setIsOpenPopUp(true);
    }, 2000);

    return () => clearInterval(popupInterval);
  }, []);

  return (
    <div className="App">
      <Home />
      {/* Pop Up Form */}
      {isOpenPopUp && (
        <div className="popup-form">
          <PopUpForm
            heading="Avail 10% OFF Early Bird Discount"
            title="Dubai's No1 SAT Tutorial Centre"
            setIsOpenPopUp={setIsOpenPopUp}
          />
        </div>
      )}
    </div>
  );
}

export default App;
