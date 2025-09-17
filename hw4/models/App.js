import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const User = sequelize.define('App',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    size:{
        type: DataTypes.STRING,
        allowNull:false,
    },
},
{
    tableName:"Apps",
    timestamps:false,
}
)
export default App;