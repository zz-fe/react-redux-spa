switch (process.env.NODE_ENV) {
    case 'production':
        console.log('production-----------------','上线');
        module.exports = require('./config/webpack.prod');
        break;
    case 'development':
        console.log('development----------------','开发');
        module.exports = require('./config/webpack.dev');
        break;
    default:
        throw new Error('You should use correct NODE_ENV');
};
