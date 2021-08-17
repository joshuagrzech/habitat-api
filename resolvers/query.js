const { firestore } = require('../firestore');

const query = {
    async user(root, { id }) {
        const user = await firestore.doc(`users/${id}`).get()
        return user
    },
    house(root, { id }) {
        return firestore.doc(`houses/${id}`).where("id", "==", `${id}`).get().then(doc => {
            if (doc.exists) {
                return doc.data();
            } else {
                throw new Error('House not found');
            }
        });
    },
    item(root, { id }) {
        return firestore.doc(`items/${id}`).get().then(doc => {
            if (doc.exists) {
                return doc.data();
            } else {
                throw new Error('Item not found');
            }
        });
    },
}

exports.query = query;