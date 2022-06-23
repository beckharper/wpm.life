import { useAssReducer, AssContextProvider } from "./assState";
import { usePvpReducer, PvpContextProvider } from "./pvpState";
import { useAuthReducer, AuthContextProvider } from "./authState";

import AssContainer from "./AssContainer";
import Auth from "./Auth";
import Pvp from "./Pvp";

function App() {
  const [assState, assDispatch] = useAssReducer();
  const [authState, authDispatch] = useAuthReducer();
  const [pvpState, pvpDispatch] = usePvpReducer();

  return (
    <AuthContextProvider value={[authState, authDispatch]}>
      <AssContextProvider value={[assState, assDispatch]}>
        <PvpContextProvider value={[pvpState, pvpDispatch]}>
          <div id="app">
            <Auth />
            <Pvp />
            <AssContainer />
          </div>
        </PvpContextProvider>
      </AssContextProvider>
    </AuthContextProvider>
  );
}

export default App;
