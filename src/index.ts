import express from "express";
import connection from "./config/config";
import path from "path"
import router from "./routes/routes";
import expressEjsLayouts from "express-ejs-layouts";
import methodOverride from "method-override"
const app = express();

connection();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));






app.use(expressEjsLayouts)
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs');
app.set("layout","./layout")


app.use('/',router)

app.listen(3000,()=>{
    console.log('server running on 3000 :http://localhost:3000')
})