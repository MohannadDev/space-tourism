import React, { Suspense, lazy } from "react";
import Nav from "./pages/Nav/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import Data from "./pages/data.json";
const App = () => {
  const location = useLocation();
  const RootEl = document.getElementById("root");
  const Home = lazy(() => import("./pages/Home"));
  const Destination = lazy(() => import("./pages/Destination"));
  const Generator = lazy(() =>
    import("./pages/Destination/DestinationGenerator")
  );

  const Crew = lazy(() => import("./pages/Crew"));
  const CrewGenerator = lazy(() => import("./pages/Crew/CrewGenerator"));
  const Technology = lazy(() => import("./pages/Technology"));
  const TechnologyGenerator = lazy(() => import("./pages/Technology/TechnologyGenerator"));

  const rootClass = () => {
    if (location.pathname === "space-tourism") {
      return "root-home";
    } else if (location.pathname.includes("DESTINATION")) {
      return "root-destination";
    } else if (location.pathname.includes("CREW")) {
      return "root-crew";
    } else if (location.pathname.includes("TECHNOLOGY")) {
      return "root-technology";
    }

    return "root-home";
  };
  RootEl.removeAttribute("class");
  RootEl.classList.add(rootClass());

  return (
    <>
      <Nav />
      <Suspense
        fallback={
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl ">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="space-tourism" index element={<Home />} />
          <Route path="/space-tourism/DESTINATION" element={<Destination />}>
            <Route
              index
              path="MOON"
              element={<Generator Destination={Data.destinations[0]} />}
            />
            <Route
              path="MARS"
              element={<Generator Destination={Data.destinations[1]} />}
            />
            <Route
              path="EUROPA"
              element={<Generator Destination={Data.destinations[2]} />}
            />
            <Route
              path="TITAN"
              element={<Generator Destination={Data.destinations[3]} />}
            />
          </Route>
          <Route path="/space-tourism/CREW" element={<Crew />} >
          <Route
              index
              path="DOUGLAS"
              element={<CrewGenerator Crew={Data.crew[0]} />}
            />
            <Route
              path="MARK"
              element={<CrewGenerator Crew={Data.crew[1]} />}
            />
            <Route
              path="VICTOR"
              element={<CrewGenerator Crew={Data.crew[2]} />}
            />
            <Route
              path="ANOUSHEH"
              element={<CrewGenerator Crew={Data.crew[3]} />}
            />
          </Route>
          <Route path="/space-tourism/TECHNOLOGY" element={<Technology />} >
          <Route
              index
              path="VEHICLE"
              element={<TechnologyGenerator Technology={Data.technology[0]} />}
            />
            <Route
              path="SPACEPORT"
              element={<TechnologyGenerator Technology={Data.technology[1]} />}
            />
            <Route
              path="CAPSULE"
              element={<TechnologyGenerator Technology={Data.technology[2]} />}
            />
        
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
