import React from 'react'
import spinnerImage from '../../asserts/spinner/loadingImage.gif'

const SpinnerApp = () => {
    return (
        <React.Fragment>
          <div className='spinnerPage centered'>
              <img src={spinnerImage} alt='spinner image'/>
          </div>

        </React.Fragment>
            
     
    )
}

export default SpinnerApp
