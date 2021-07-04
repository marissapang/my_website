import './App.css';
import Routes from './Routes';

import { BreakpointProvider, Breakpoint } from 'react-socks';

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
// general
import { faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function App() {
  library.add(
    faEnvelope, faArrowLeft
  );

  return (
    <BreakpointProvider>
      <div className="App">
        <Breakpoint medium up>
          <div className="Medium">
            <Routes/>
          </div>
        </Breakpoint>
        <Breakpoint small down>
          <div className="Small">
            <Routes/>
          </div>
        </Breakpoint>
      </div>
    </BreakpointProvider>
  );
}

export default App;
