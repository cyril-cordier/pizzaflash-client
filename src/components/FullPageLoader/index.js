import React from 'react'


const FullPageLoader = () => {
    return (
        <div className="fp-container">
            <img src={window.location.origin+'/images/loading.gif'} alt="chargement" className="fp-loader"/>
        </div>
    )
}

export default FullPageLoader;
