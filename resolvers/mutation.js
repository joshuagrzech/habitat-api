//@collapse
const { firestore } = require('../firestore');

const mutation = {
    createBankAccount(parent, { input: {userId, balance} } ) {
        return firestore.collection('bankAccounts').add({ userId: userId, balance: balance }).then(ref => ref.get());
    },
    updateBankAccount(parent, {id, input: { balance } }) {
        return firestore.doc(`bankAccounts/${id}`).update({balance: balance}).then(ref => ref.get());
    },
    createItem(parent, {input: {userId, houseId, type, name, dueDate, shared}}) {
        return firestore.collection('items').add({
            userId,
            houseId,
            type,
            name,
            dueDate,
            shared
        }).then(ref => ref.get());
    },
    updateItem(parent, {id, input}) {
        return firestore.doc(`items/${id}`).update(input).then(ref => ref.get());
    },
    async createUser (parent, input) {
        console.log(input)
        const user = firestore.doc(`users/${input.input.id}`)
        await user.update({apiConnected: true, username: input.input.username, id: input.input.id});
        await firestore.collection('houses').doc(input.input.id).set({apiConnected: true, id: input.input.id, users: [input.input.id]});
        const update = await user.update({houseId: input.input.id});
       return user.get()
    },
    updateUser(parent, {id, input}) {
        return firestore.doc(`users/${id}`).update(input).then(ref => ref.get());
    },
    updateHouse(parent, {id, input}) {
        return firestore.doc(`houses/${id}`).update(input).then(ref => ref.get());
    },
    createNotification(input) {
        return firestore.collection('notifications').add(input).then(ref => ref.get());
    },
    updateNotification(id, input) {
        return firestore.doc(`notifications/${id}`).update(input).then(ref => ref.get());
    },
}

exports.mutation = mutation;