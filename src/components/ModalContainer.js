import React, { useState } from 'react';
import Preview from './Preview';

const ModalContainer = ({PreviewData}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='Modal_mainContainer'>
      <button className='Modal_Trailer' onClick={() => setIsOpen(!isOpen)}>Watch Trailer</button>

        {!isOpen ? "" : <Preview isOpen={isOpen} setIsOpen={setIsOpen} PreviewData={PreviewData && PreviewData}/>}
    </div>
  );
};

export default ModalContainer;