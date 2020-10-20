import { render } from '@testing-library/react'
import React, { PureComponent } from 'react'


class AddChirp extends React.component {
    constructor(props) {
        super(props)
        this.state = {
            chirps: []
        }
        this.addChirps = this.addChirps.bind(this)
    }
    addChirps(event) {
        let chirpArray = this.state.chirps
        event.preventDefault()
    }
}

render(); {
    return (
        <React.Fragment>
            <div className="container border rounded mt-2" style={{ backgroundColor: `#FFFFFF` }}>
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.addChirps}>
                            <div className="form-group p-1 m-1">
                                <label htmlFor="chirp-text">What're your stupid thoughts telling you today?</label>
                                <input type="text" className="form-control p-1 m-1 bg-light" id="chirp-text" ref={(a) => this._inputElement = a} placeholder="Type your Stupidest take here!" />
                                <button type="submit" className="btn btn-primary w-100 p-1 m-1">Chirp it!</button>
                                <small id="branding" className="form-text text-muted">listen to the dumbest takes on the dumbest website since twitter or reddit!</small>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default AddChirp