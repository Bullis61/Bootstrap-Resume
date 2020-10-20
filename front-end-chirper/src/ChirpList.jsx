import React, { Component } from 'react';
import Chirp from './Chirp';

class ChirpList extends React.Component {
    constructor(props){
        super (props)
        this.createChirps = this.createChirps.bind(this)
    }

    createChirps(item){
        return <li key={item.key} className="list-group-item" style={{ border: `none`, backgroundColor: `#DCDCDC` }}><Chirp text={item.text} name='Hunter' time={item.key} /></li>
    }

    render() {
        let chirpEntries = this.props.chirpEntries
        let listItems = chirpEntries.map(this.createChirps)

        return (
            <React.Fragment>
              <ul className="list-group">
                    {listItems}
                </ul>
            </React.Fragment>  
        )
    }
}

export default ChirpList