// errors that's not can handle
process.on('uncaughtException', (error) => {
    console.log(`the error is: ${error.name} with message:${error.message} and error is ${JSON.stringify(error)}`)
    process.exit(1)
})
const dotenv = require("dotenv");
dotenv.config({path: "./.env"});
const app = require("./index");
const port = process.env.PORT || 1111;
const server = app.listen(port, () => {
    console.log(`server running in port ${port}`);
});
// errors rejections like databases not responding
process.on('unhandledRejection', error => {
    console.log(`error happens '${error.name}' with message '${error.message}'`)
    server.close(() => {
        console.log('stopped server...')
        process.exit(1)
    })
})