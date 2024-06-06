import React, { createContext, useState, useEffect, useContext } from "react";

/*import {
  VictoriaData,
  WhiteHorse1Data,
  WhiteHorse2Data,
  SeattleData,
  LA1Data,
  LAXData,
  LA2Data,
} from "../data";
*/

import { InitialCost } from "../components/Itinerary/ItineraryCardData";

//use for costs data
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import db from "../firebase";

const SDataContext = createContext();

function SDataProvider(props) {
  //data from firestore
  const [VictoriaCost, setVictoriaCost] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  const [WhiteHorse1Cost, setWhiteHorse1Cost] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  const [WhiteHorse2Cost, setWhiteHorse2Cost] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  const [SeattleCost, setSeattleCost] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  const [LA1Cost, setLA1Cost] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  const [LA2Cost, setLA2Cost] = useState([
    { name: "Loading...", id: "initial" },
  ]);
  const [LAXCost, setLAXCost] = useState([
    { name: "Loading...", id: "initial" },
  ]);

  const [title, setTitle] = useState("Victoria");
  const [cost, setCost] = useState(InitialCost);
  const [trip, setTrip] = useState("Victoria1Trip");
  const [timetable, setTimeTable] = useState([]);
  // const [timetable, setTimeTable] = useState(VictoriaData);
  //const [timetable, setTimeTable] = useState([]);

  //之後需要優化的部分
  useEffect(() => {
    const collectionRef = collection(db, "Costs", "VictoriaCost", "sub");
    const unsub = onSnapshot(
      query(collectionRef, orderBy("index", "asc")),
      (snapshot) =>
        setVictoriaCost(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
    );

    const collection1Ref = collection(db, "Costs", "WhiteHorse1Cost", "sub");
    const unsub1 = onSnapshot(
      query(collection1Ref, orderBy("index", "asc")),
      (snapshot) =>
        setWhiteHorse1Cost(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
    );

    const collection2Ref = collection(db, "Costs", "WhiteHorse2Cost", "sub");
    const unsub2 = onSnapshot(
      query(collection2Ref, orderBy("index", "asc")),
      (snapshot) =>
        setWhiteHorse2Cost(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
    );

    const collection3Ref = collection(db, "Costs", "SeattleCost", "sub");
    const unsub3 = onSnapshot(
      query(collection3Ref, orderBy("index", "asc")),
      (snapshot) =>
        setSeattleCost(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
    );

    const collection4Ref = collection(db, "Costs", "LA1Cost", "sub");
    const unsub4 = onSnapshot(
      query(collection4Ref, orderBy("index", "asc")),
      (snapshot) =>
        setLA1Cost(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    const collection5Ref = collection(db, "Costs", "LAXCost", "sub");
    const unsub5 = onSnapshot(
      query(collection5Ref, orderBy("index", "asc")),
      (snapshot) =>
        setLAXCost(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    const collection6Ref = collection(db, "Costs", "LA2Cost", "sub");
    const unsub6 = onSnapshot(
      query(collection6Ref, orderBy("index", "asc")),
      (snapshot) =>
        setLA2Cost(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub, unsub1, unsub2, unsub3, unsub4, unsub5, unsub6;
  }, []);

  const toggleTitle = (a) => {
    switch (a) {
      case 1:
        setTitle("Victoria");
        setCost(VictoriaCost);
        setTrip("Victoria1Trip");
        //setTimeTable(VictoriaData);
        break;
      case 2:
        setTitle("Whitehorse");
        setCost(WhiteHorse1Cost);
        setTrip("WhiteHorse1Trip");
        //setTimeTable(WhiteHorse1Data);
        break;
      case 3:
        setTitle("Whitehorse");
        setCost(WhiteHorse2Cost);
        setTrip("WhiteHorse2Trip");
        //setTimeTable(WhiteHorse2Data);
        break;
      case 4:
        setTitle("Seattle");
        setCost(SeattleCost);
        setTrip("SeattleTrip");
        //setTimeTable(SeattleData);
        break;
      case 5:
        setTitle("L.A.");
        setCost(LA1Cost);
        setTrip("LA1Trip");
        //setTimeTable(LA1Data);
        break;
      case 6:
        setTitle("Las Vegas");
        setCost(LAXCost);
        setTrip("LAXTrip");
        //setTimeTable(LAXData);
        break;
      case 7:
        setTitle("L.A.");
        setCost(LA2Cost);
        setTrip("LA2Trip");
        //setTimeTable(LA2Data);
        break;
      default:
        return null;
    }
  };

  return (
    <div>
      <SDataContext.Provider
        value={{
          title,
          toggleTitle,
          cost,
          trip,
          timetable,
        }}
      >
        {props.children}
      </SDataContext.Provider>
    </div>
  );
}
export { SDataContext, SDataProvider };

//hooks
export const useCosts = () => {
  return useContext(SDataContext);
};
