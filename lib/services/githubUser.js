const GithubUser = require('../models/githubUser');
module.exports = class GithubUserService {
    async findAll(txn) {
        const user_details = await GithubUser.query(txn);
        return user_details;
    }

    async findOne(githubID) {
        const user_details = await GithubUser.query().where(githubID);
        return user_details;
    }

    async Create(userInfo){
        return await GithubUser.query().insertGraph(userInfo);
    }

    async Update(userInfo){
        return await GithubUser.query().update(userInfo)
        .where({"github_id":userInfo.github_id});
    }
};