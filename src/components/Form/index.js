import React,{ Component }  from 'react';
import './style.css'
import Select from 'react-select';
import TimezonePicker from 'react-timezone';

 
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const Categories = [
    { value: 'obc', label: 'OBC' },
    { value: 'open', label: 'OPEN' },
    { value: 'sc/st', label: 'SC/ST' },
  ];

class Form extends React.Component {
    state = {
      selectedOption: null,
    };
    handleChange = selectedOption => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    };
    
    render() {
     
      const { selectedOption } = this.state;
     
      return (
        <div className="form">
            <section className="Add-event"> 
            <span>Add Event in *</span>
            <Select className="select"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            />
            </section>
           
            <section className="upload-image">
                <h2>Upload <br/> Image</h2>
            </section>
            <section className="title">
                <span>title</span><br/>
                <input class="no-outline" inputProps={{maxLength :250}}></input>
            </section>
            <section className="Categories">
                <span>Categories*</span>
                <Select className="select"
                value={selectedOption}
                onChange={this.handleChange}
                options={Categories}
            />
            </section>
            <section className="short">
                <span>Short Summary</span><br/>
                <input class="no-outline" inputProps={{maxLength :500}}></input>
            </section>
            <h4>Type:Public</h4>
            <section className="Registration">
                <span>Registration</span><br/>
                <input class="no-outline" inputProps={{maxLength :500}}></input>
            </section>
            <section className="virtual">
                <h4>Is this a virtual event?      yes </h4>
                <label class="switch">
                    <input type="checkbox" checked/>
                    <span class="slider round"></span>
                </label>
            </section>
            <section>
            <input class="no-outline" placeholder="Online link"></input>
            </section>
            <section className="time-zone">
              <span>Select Timezone</span><br/>
              <TimezonePicker className="timezonePicker"
              value="Asia/Yerevan"
              onChange={timezone => console.log('New Timezone Select', timezone)}
              inputProps={{
              placeholder: 'Select',
              name: 'timezone',
              }}
              />
            </section>
            <seaction className="date-time">
              <div >
                <span>Start Date-Time</span>
                <input className="start" type="datetime-local" id="time" name="time"/>
              </div>
              <div >
                <span>End Date-Time</span>
                <input className="end" type="datetime-local" id="time" name="time"/>  
              </div>
           
            </seaction>
           
           
        </div>
      );
    }
  }


export default Form;