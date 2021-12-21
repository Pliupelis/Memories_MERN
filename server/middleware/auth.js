import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const auth = async (req, res, next) => {
  const secretKey = process.env.SECRET_KEY;
  try {
    const token = req.headers["authorization"];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secretKey);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
