const indexName = process.env.ALGOLIA_INDEX_NAME;
const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;
const adminKey = process.env.ALGOLIA_ADMIN_KEY;
const appId = process.env.ALGOLIA_APP_ID;
module.exports = (appId, indexName, searchKey, adminKey);
