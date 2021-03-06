import React from 'react';
import { ListElement } from './ListElement';

export class Master extends React.Component {
    render() {
        const elements = this.props.entries.map(entry => 
            <ListElement
                changeEntry={this.props.changeEntry} 
                key={entry.entry_number}
                entry={entry}/>
        );

        return (
            <div id={this.props.id} className="master">
                <div className="top-bar">
                    <h1>Pokédex</h1>
                </div>
                <div className="list">
                    {elements}
                </div>
            </div>
        );
    }
}