let places = [{
    place: "Tokyo",
    country: "Japan",
    rating: 7,
    imgUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    } 
];
let favorites = [
    {
        place: "Glasgow",
        country: "Scotland",
        rating: 10,
        imgUrl: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/04/16/glasgow-main.jpg?w968h681"
    }
];

function addPlace(req,res){
    // console.log(req.body);
    places.push(req.body);
    res.status(200).json(places);
}

function getPlaces(req, res) {
    res.status(200).json(places);
}

function addToFavorites(req,res) {
    favorites.push(req.body)
    res.status(200).json(favorites);
}

function getFavorites(req, res) {
    res.status(200).json(favorites);
}

module.exports = {
    addPlace,
    getPlaces,
    addToFavorites,
    getFavorites
};