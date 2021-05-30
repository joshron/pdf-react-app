import React, { useState }  from 'react';
import MergeSection from './MergeSection';
import Trim from './Trim';
import Split from './Split';
import '../Styles/Container.css'

const Container = () => {
  const [currentOption, setState] = useState(<MergeSection />);
  return (
    <div className="Container">
      <div className="options-bar">
        <div>
          <h2 onClick={() => setState(<MergeSection />)}>Merge</h2>
        </div>
        <div>
          <h2 onClick={() => setState(<Trim />)}>Trim</h2>
        </div>
        <div>
          <h2 onClick={() => setState(<Split />)}>Split</h2>
        </div>
      </div>
      {currentOption}      
    </div>
  )
}

export default Container