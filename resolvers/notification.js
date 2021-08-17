const { firestore } = require('../firestore');

const notification = {
    user(notification) {
        return firestore.collection('notifications').where(`userId`, "==", `${notification.userId}`).get().then(collection => {
            return collection.docs.map(doc => doc.data());
        })
    },
}

exports.notification = notification;