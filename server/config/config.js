
const envVarsSchema = {
NODE_ENV: 'development',
SERVER_POST: 3000,
MONGOOSE_DEBUG: true,
MONGO_HOST: 'mongodb://localhost/search',
MONGO_PORT: 27017,
JWT_SECRET: '0a6b944d-d2fb-46fc-a85e-0295c986cd9f'
};

const config = {
    env: envVarsSchema.NODE_ENV,
    port: envVarsSchema.SERVER_POST,
    mongooseDebug: envVarsSchema.MONGOOSE_DEBUG,
    mongo: {
        host: envVarsSchema.MONGO_HOST,
        port: envVarsSchema.MONGO_PORT
    },
    JWT_SECRET: envVarsSchema.JWT_SECRET
};
module.exports = config;
