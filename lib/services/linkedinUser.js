const LinkedinUser = require('../models/linkedinUser');
module.exports = class LinkedinUserService {
    async findAll(txn) {
        const user_details = await LinkedinUser.query(txn);
        return user_details;
    }

    async findOne(linkedinID) {
        const user_details = await LinkedinUser.query().where(linkedinID);
        return user_details;
    }

    async Create(userInfo){
        return await LinkedinUser.query().insertGraph(userInfo);
    }

    async Update(userInfo){
        return await LinkedinUser.query().update(userInfo)
        .where({"linkedin_id":userInfo.linkedin_id});
    }
};