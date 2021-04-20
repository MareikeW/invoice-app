import React, {Component} from "react";
import { Link } from "react-router-dom";
import GoBackButton from "../components/buttons/GoBackButton";

class CreateInvoice extends Component {
    constructor() {
        super()
        this.state = {
                    clientName: "",
                    clientEmail: ""
                };

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
                <div>
                    <Link to="/"><GoBackButton /></Link>
                    <h1>New Invoice</h1>
                    <form>
                        <label>Client's Name</label>
                        <input type="text" name="clientName" value={this.state.clientName} onChange={this.handleChange}/>

                        <label>Client's Email</label>
                        <input type="email" name="clientEmail" value={this.state.clientEmail} onChange={this.handleChange}/>

                        <input type="submit" value="+ add new item" />
                        <h1>{this.state.clientName}</h1>
                        <h1>{this.state.clientEmail}</h1>
                    </form>
                 </div>
        )
    }
    
}

export default CreateInvoice;