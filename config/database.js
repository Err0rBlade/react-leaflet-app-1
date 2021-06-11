const { DB_USERNAME, DB_PASSWORD, DB_CLUSTER } = require("./config");

module.exports = {
  MongoURI: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`,
};

// module.exports = {
//   MongoURI: `mongodb+srv://akshay654321:akshay654321@cluster0.bdrhk.mongodb.net/merntest?retryWrites=true`,
// };
