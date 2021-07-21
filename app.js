const Express = require('express');
const app = Express();

const controllers = require("./controllers");

app.use("/journal", controllers.journalcontroller);
app.use("/user", controllers.usercontroller);

app.listen(3002, () => {
    console.log('[Server]: App is on port 3002. ');
});