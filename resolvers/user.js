const { firestore } = require('../firestore');

const user = {
    items(user) {
        return firestore.collection('items').where('userId', "==", `${user.id}`).get().then(collection => {
            return collection.docs.map(doc => doc.data());
        });
    },
    notifications(user) {
        return firestore.collection(`notifications`).where("userId", "==", `${user.id}`).get().then(collection => {
            return collection.docs.map(doc => doc.data());
        });
    },
    bankAccount(user) {
        return firestore.collection('bankAccounts').where('userId', "==", `${user.id}`).get().then(collection => {
            return collection.docs.map(doc => doc.data());
        });
    },
    async house(user) {
        const houses = await firestore.collection('houses').where('users', "array-contains", `${user.id}`).get().then(collection => {
            return collection.docs.map(doc => doc.data())
        });
        console.log(houses);
        return houses[0]
    }
}

exports.user = user;
