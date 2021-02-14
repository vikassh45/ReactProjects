import React, { Component } from 'react'
import '../Stylesheet/mystyle.css'
import sr from '../Stylesheet/office.jpg'
class Home extends Component {
    render() {

        const element = "Office Space"
        const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />
        const itemName = { Name: "DBS", Rent: 50000, Address: "Chennai" }
        let colors = [];
        if (itemName.Rent <= 60000) {
            colors.push("textRed");
        }
        else {
            colors.push("textGreen");
        }

        return (
            <div className="home">
                <h1>{element}, at Affordable Range</h1>
                {jsxatt}
                <h3>Name: {itemName.Name}</h3>
                <h3 className={colors}>Rent: Rs. {itemName.Rent}</h3>
                <h3>Address: {itemName.Address}</h3>
            </div>
        )
    }
}

export default Home
