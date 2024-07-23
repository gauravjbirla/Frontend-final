import React from 'react';

function Headers(props) {
    return (
        <div className='ui fixed menu'>
          <div className='ui container center'>
            <h2>E-SHOP</h2>
            
          </div>
          <div className='ui button' tabIndex='0'>
                <div className='visible content'>
                   <i className='shop icon'></i>
                </div>
          </div>
        </div>
    );
}

export default Headers;