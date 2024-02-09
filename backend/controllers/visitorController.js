import connectDB from "../config/db.js";

/*
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
*/
const createInquiry = async (req, res) => {
  const values = [
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.phone,
  ]; //javascript array
  let sql =
    "INSERT INTO inquiries (firstname, lastname, email, phone) VALUES (?)";
  connectDB.query(sql, [values], (error, result) => {
    if (error) throw error;
    res.status(201).json(result);
  });
};

export { createInquiry };
