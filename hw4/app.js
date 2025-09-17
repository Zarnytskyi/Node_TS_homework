import express from 'express';
import dotenv from 'dotenv';
import sequelize from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT

const app = express();
app.use(express.json());

app.post("/apps", async (req, res, next) => {
  try {
    const { name, size } = req.body;
    if (!name || !size) {
      return res.status(400).json({ success: false, message: "name и size обязательны" });
    }
    const appCreated = await App.create({ name, size });
    res.json({ success: true, data: appCreated });
  } catch (err) {
    next(err);
  }
});

app.get("/apps", async (_req, res, next) => {
  try {
    const apps = await App.findAll();
    res.json({ success: true, data: apps });
  } catch (err) {
    next(err);
  }
});

app.use((err,_req,res, _next)=>{
    console.error(err.message);
    res.status(500).send({success:false, message:err.message});
});
app.listen(PORT, async()=>{
    try{
        await sequelize.authenticate();
        console.log('Connection to database was successfully');
        console.log(`Server is running on http://localhost:${PORT}`);
    }catch(e){
        console.error('Error don`t correct connection to basa date:', e.message)
    }
});