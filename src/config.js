exports.USER_FIELDS = process.env.USER_FIELDS ? process.env.USER_FIELDS.split(',') : [];
exports.GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT || 'https://hasura.your-app.com/v1alpha1/graphql';
exports.HASURA_ACCESS_KEY = process.env.HASURA_ACCESS_KEY || 'hasura-access-key';
exports.JWT_SECRET = process.env.JWT_SECRET || 'jwt-secret'; // same jwt secret as HASURA_GRAPHQL_JWT_SECRET
exports.S3_ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID || 's3-access-key-id';
exports.S3_SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY || 's3-secret-access-key';
exports.S3_ENDPOINT = process.env.S3_ENDPOINT || 's3-endpoint';
exports.S3_BUCKET = process.env.S3_BUCKET || 's3-bucketname';
exports.DOMAIN = process.env.DOMAIN || 'localhost'; // or your backend host. Ex: backend.your-app.com
exports.ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'http://localhost:3000'; // ex: your-app.com