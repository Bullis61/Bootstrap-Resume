import React, { PureComponent } from 'react'



const Chirp = (props) => {
    return(
        <div className="container">
        <div className="row text-left">
            <div className="card w-100">
                <div className="card-header">
                    <div className="media">
                        <div className="media-body">
                            <h5 className="d-inline font-weight-bold">{props.name}</h5>
                            <h6 className="text-muted">Terrible Chirp Chirpped:</h6>
                        </div>
                    </div>
                </div>
                <p className="card-text p-1 m-1">{props.text}</p>
                <h6 className="card-subtitle p-1 m-1 text-muted font-weight-light">- </h6>
            </div>
        </div>
    </div>
    )
}

export default Chirp