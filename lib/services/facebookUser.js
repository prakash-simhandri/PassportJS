const FacebookUser = require('../models/facebookUser');
module.exports = class FacebookUserService {
    async findAll(txn) {
        const user_details = await FacebookUser.query(txn);
        return user_details;
    }

    async findOne(facebookID) {
        const user_details = await FacebookUser.query().where(facebookID);
        return user_details;
    }

    async Create(userInfo){
        return await FacebookUser.query().insertGraph(userInfo);
    }

    async Update(userInfo){
        return await FacebookUser.query().update(userInfo)
        .where({"facebook_id":userInfo.facebook_id});
    }
};