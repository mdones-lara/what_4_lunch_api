export const getPlaces = () => fetch('/api/places');
export const getDecisions = () => fetch('/api/decisions');

export const addPlace = (place) => {
    const newPlace = {
        name: place.name,
        imageUrl: place.imageUrl,
        addresses: [{
            address: place.street,
            city: place.city,
            state: place.state,
            zipCode: place.zipCode
        }]
    };
    return fetch('/api/places', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlace)
    })
}

export const deletePlace = (name) => {
    return fetch(`/api/places/${name}`, {
        method: "DELETE",
    });
}
