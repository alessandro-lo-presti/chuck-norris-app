import { useState } from "react";
import FactFinder from "./factFinder/factFinder";

const FactFinderSection = () => {
  const [foundFactList, setFoundFactList] = useState([]);

  return (
    <div>
      <FactFinder
        foundFactList={foundFactList}
        setFoundFactList={setFoundFactList}
      />
      {foundFactList && foundFactList.map((fact) => <p>{fact.value}</p>)}
    </div>
  );
};

export default FactFinderSection;
