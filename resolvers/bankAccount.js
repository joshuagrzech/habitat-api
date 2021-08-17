const { firestore } = require('../firestore');

const bankAccount = {
    user(bankAccount) {
        return firestore.doc(`users`).where("bankAccount", "arrayIncludes" `${bankAccount.id}`).get().then(doc => {
            if (doc.exists) {
                return doc.data();
            } else {
                throw new Error('Bank account not found');
            }
        });
    },
}

exports.bankAccount = bankAccount;