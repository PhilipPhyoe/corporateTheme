import mysql from "mysql";

/*
const connectDB = async () => {
  try {
    var dataBase = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "hector",
    });
    console.log("Database is connected.");
  } catch (error) {
    console.error(`Error message: ${error.message}`);
    process.exit(1);
  }
};
*/
const connectDB = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "hectornew",
});

export default connectDB;
