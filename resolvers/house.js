const { firestore } = require('../firestore');


const house = {
    items(house) {
        return firestore.collection(`items`).where("houseId", "==", `${house.id}`).get().then(collection => {
            return collection.docs.map(doc => doc.data());
        }).then(items => {
            return items.map(item => item.id);
        })
    },
    users(house) {
        return firestore.collection(`users`).where("houseId", "==", `${house.id}`).get().then(collection => {
            return collection.docs.map(doc => doc.data());
        }).then(users => {
            return users.map(user => user.id);
        })
    },
    
}

exports.house = house;
