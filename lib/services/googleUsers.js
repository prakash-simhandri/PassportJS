const GoogleUser = require('../models/googleUser');
module.exports = class GoogleUserService {
    async findAll(txn) {
        const user_details = await GoogleUser.query(txn);
        return user_details;
    }

    async findOne(googleId) {
        const user_details = await GoogleUser.query().where(googleId);
        return user_details;
    }

    async Create(userInfo){
        return await GoogleUser.query().insertGraph(userInfo);
    }

    async Update(userInfo){
        return await GoogleUser.query().update(userInfo)
        .where({"google_id":userInfo.google_id});
    }
};