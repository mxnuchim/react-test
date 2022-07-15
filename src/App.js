import './App.css';
import Header from './components/header/Header'
import Percentage from './components/percentages/Percentage';
import ColoredLine from './components/coloredline/ColoredLine.js'
import BottomComponent from './components/bottomComponent/BottomComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <Percentage />
      <ColoredLine />
      <BottomComponent
        name1="Searches"
        name2="Mobile Traffic: 100%"
        name3="Web Traffic 100%"
        name4="29 380 yesterday"
        name5="27 985 Last Friday"
        name6="You get 100% traffic on mobile and desktop devices"
      />
      <BottomComponent
        name1="Clicks"
        name2="CTR: 0.04%"
        name4="243 yesterday"
        name5="280 Last Friday"
        name6="Conversion from searches to clicks on all devices"
      />
      <BottomComponent
        name1="Sales"
        name2="STR: 6.2%"
        name3="Average Check: 8.903"
        name4="24 yesterday"
        name5="24 Last Friday"
        name6="Conversion from clicks to bookings on all devices"
      />
    </div>
  );
}

export default App;
