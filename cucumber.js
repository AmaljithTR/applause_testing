require('dotenv').config();

if (process.env.instanceCount) {
    module.exports = {
        default: `--publish-quiet --parallel ${process.env.instanceCount}`
    }
}
else {
    module.exports = {
        default: `--publish-quiet`
    }
}
