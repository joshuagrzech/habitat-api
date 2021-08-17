const { firestore } = require('../firestore');

const item = {
    user(item) {
        return firestore.doc(`users`).where("items", "arrayIncludes", `${item.id}`).get().then(doc => {
            if (doc.exists) {
                return doc.data();
            } else {
                throw new Error('Item not found');
            }
        });
    },
    house(item) {
        return firestore.doc(`houses`).where("items", "arrayIncludes", `${item.id}`).get().then(doc => {
            if (doc.exists) {
                return doc.data();
            } else {
                throw new Error('Item not found');
            }
        });
    }
}

exports.item = item;