const mongooseConnect = require("./db/db");
const app = require("./app");
mongooseConnect();

app.listen(3000, () => {
  console.log(" 🟢 servidor corriendo");
});
