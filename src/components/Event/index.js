
import React from 'react';

import "./event.css";

const Event = props => {
    return (
        <div className="body">
      
                <section className="create-event">
                    <h2>Create Event</h2>
                    <button className="btn" id="btn">Create</button>
                    <button className="btn">Cancel</button>
                </section>
            
        </div>
    );
};



export default Event;