import React, { useState } from 'react';

function App() {
  var [ firstCheckbox, setFirstCheckbox ]   = useState({firstCheckBox: true});
  var [ secondCheckbox, setSecondCheckbox ] = useState({secondCheckBox: false});
  return (
    <div style={{display:'flex', flexDirection: 'column'}}>
        <label
            htmlFor='first-check-box'
            onClick={() => setFirstCheckbox({firstCheckBox: !firstCheckbox.firstCheckBox})}>
            <input type="checkbox" checked={firstCheckbox.firstCheckBox} readOnly/>
            First Check Box
        </label>
        <label
            htmlFor='second-check-box'
            onClick={() => setSecondCheckbox({secondCheckBox: !secondCheckbox.secondCheckBox})}>
            <input type="checkbox" checked={secondCheckbox.secondCheckBox} readOnly/>
            Second Check Box
        </label>
    </div>
  );
}

export default App;