import app from "../src/app.js"
import { conectDB } from "../src/db.js"


conectDB();
app.listen(3000);
console.log('Servidor en el puerto ', 3000)