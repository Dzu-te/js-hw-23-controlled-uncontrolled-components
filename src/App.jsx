import ControlledComponent from "./components/ControlledComponent";
import UncontrolledComponent from "./components/UncontrolledComponent";
import ListOfUsers from "./components/ListOfUsers";
import Wrapper from "./components/Wrapper";
import UserInfo from "./components/UserInfo";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const handleUserClick = (id) => {
    setSelectedId(id);
  };

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
        <Wrapper>
          {selectedId ? (
            <UserInfo id={selectedId} onBackClick={() => setSelectedId(null)} />
          ) : (
            <ListOfUsers onUserClick={handleUserClick} />
          )}
        </Wrapper>
      </div>
    </>
  );
}

export default App;
