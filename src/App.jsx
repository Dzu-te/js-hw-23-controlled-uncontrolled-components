import ControlledComponent from "./components/ControlledComponent";
import UncontrolledComponent from "./components/UncontrolledComponent";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <div className="controlled-uncontrolled">
          <Wrapper>
            <UncontrolledComponent />
          </Wrapper>
          <Wrapper>
            <ControlledComponent />
          </Wrapper>
        </div>
      </div>
    </>
  );
}

export default App;
