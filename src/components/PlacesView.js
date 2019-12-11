import React from "react";
import "../styles/PlacesView.css";
import axios from "axios";

class PlacesView extends React.Component {
    constructor(){
        super();
        this.state = {
        }
        this.addToFavorites = this.addToFavorites.bind(this);
    }

        addToFavorites (place){
            // console.log(place);
            axios.post("/api/favs", place).then(response => {
                // console.log(response);
                this.props.updateFavorites(response.data);
            });
        }
        
        render(){
            return (
                <div>
                {this.props.places.map((element, index) => {
                    // console.log(element);
                    return(
                        <div key={index}>
                            <h1>{element.place}</h1>
                            <h2>{element.country}</h2>
                            <img alt="place__image"
                            className="place__image" 
                            src={element.imgUrl} />
                            <h2>{element.rating}</h2>
                            {this.props.showAddToFavButton === false ? null : (
                            <img
                            onClick = {() => this.addToFavorites(element)} 
                            className="place__heart"
                            alt="like_button"
                            src="https://www.heartfoundation.org.au/images/uploads/main/heart-img.png" />
                            )}
                        </div>
                    );
                })}  
            </div>
        );
    }
}

export default PlacesView;