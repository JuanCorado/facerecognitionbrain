import React from 'react'
import BorderBox from './BorderBox'

const FaceRecognition = ({ imageUrl, boxAll }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputImage' src={imageUrl} 
            alt="" width='500px' height='auto'/>
        {
          boxAll.map((box, i) => {
            return (
              <BorderBox 
                key={boxAll[i].topRow}
                top={boxAll[i].topRow}
                right={boxAll[i].rightCol}
                bottom={boxAll[i].bottomRow}
                left={boxAll[i].leftCol}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default FaceRecognition
