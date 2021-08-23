const { firestore } = require('../firestore');


const house = {
    items(house) {
        return firestore.collection(`items`).where("houseId", "==", `${house.id}`).get().then(collection => {
            return collection.docs.map(doc => doc.data());
        }).then(items => {
            return items.map(item => item.id);
        })
    },
    async users(house) {
        const usersArray = await firestore.collection(`users`).where("houseId", "==", `${house.id}`).get()
        console.log(usersArray)
        const document = await usersArray.docs.map(doc => doc.data());
        return document 
       
    },
    
}

exports.house = house;
