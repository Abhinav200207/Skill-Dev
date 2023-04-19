const app = require("./app.js");
const { connectDatabase } = require("./config/db");
connectDatabase();

const PORT = process.env.PORT | 4000


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
