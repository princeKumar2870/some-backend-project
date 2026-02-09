const app = require('./src/app')
const connectDB = require('./src/config/db')
require('dotenv').config()
const PORT = process.env.PORT || 3000
connectDB()
app.listen(PORT,()=>{
    console.log("App running on port "+ PORT)
})