import React, { useState }  from 'react';
import Merge from './Merge';
import Trim from './Trim';
import Split from './Split';
import '../Styles/Container.css'

const Container = () => {
  const [currentOption, setState] = useState(<Merge />);
  return (
    <div className="Container">
      <div className="options-bar">
        <h2 onClick={() => setState(<Merge />)}>Merge</h2>
        <h2 onClick={() => setState(<Trim />)}>Trim</h2>
        <h2 onClick={() => setState(<Split />)}>Split</h2>
      </div>
      {currentOption}      
    </div>
  )
}

export default Container