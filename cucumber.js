require('dotenv').config();

module.exports = {
    default: `--publish-quiet --parallel ${process.env.instanceCount}`
}