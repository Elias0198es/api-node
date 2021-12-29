import { config } from "dotenv"
import app from "./app"
import { addSujeito } from "./endpoints/addSujeito"
import { deleteSujeito } from "./endpoints/deleteSujeito"
import {updateSujeito} from "./endpoints/updateSujeito"
import {getSujeitos} from "./endpoints/getSujeitos"


config()

app.post('/new/sujeito', addSujeito)
app.get('/sujeitos', getSujeitos)

app.delete("/remove/sujeito/:id", deleteSujeito);
app.put('/update/sujeito/:id', updateSujeito)



