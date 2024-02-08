import connectDB from "../config/db.js";

const getAllVisitors = async (req, res) => {
  let sql = "SELECT * FROM inquiries";
  try {
    connectDB.query(sql, (error, result) => {
      if (error) throw error;
      res.send(result);
    });
  } catch (error) {
    console.error(`Error message: ${error.message}`);
  }
};

export { getAllVisitors };
