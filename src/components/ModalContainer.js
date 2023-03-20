import React, { useState } from 'react';
import Preview from './Preview';

const ModalContainer = ({PreviewData}) => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(PreviewData, "스텝백")
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Watch Trailer</button>

        {!isOpen ? "" : <Preview isOpen={isOpen} setIsOpen={setIsOpen} PreviewData={PreviewData && PreviewData}/>}
    </div>
  );
};

export default ModalContainer;