import React, {Component} from 'react'

class Wolf extends Component{
    constructor(){
        super()

        this.state = {
            isWolfBig: false,
            borderColor: ''
        }
    // WOULD NEED TO BIND THE FUNCTION TO THE RIGHT 
    // CONTEXT IF WE DID NOT USE AN ARROW FUNCTION
    // this.handleClick = this,handleClick.bind(this)
    }


    handleClick = () => {
        this.setState({
            isWolfBig: !this.state.isWolfBig
        })
    }

    handleColorChange = event => {
        this.setState({
            borderColor: event.target.value
        })
    }



    render(){
        let wolfStyle = this.state.isWolfBig ? {height: 900, width: 800} : {height: 300, width: 200}
        let borderStyle = this.state.borderColor ? {border: `10px solid ${this.state.borderColor}`} : null;
        return(
            <div style={{...borderStyle, padding: 40}}>"I'M A WOLF" <br/>
            <input type="text" onChange={this.handleColorChange} placeholder="color"/>
            <img onClick={this.handleClick} style={wolfStyle} src="https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/7/7a/Balto_by_raqoo-d64lsln.png/revision/latest?cb=20150428203504"/>
            </div>
        )
    }
}

  export default Wolf