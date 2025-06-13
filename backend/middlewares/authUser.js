import jwt from 'jsonwebtoken';

// User authentication middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers

    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized. Login again" })
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach user ID to request object
    req.body.userId = token_decode.id

    // Check if the user is an admin
    const isAdmin = token_decode.email === process.env.ADMIN_EMAIL && token_decode.password === process.env.ADMIN_PASS
    
    if (!isAdmin) {
      return res.status(403).json({ success: false, message: "Not Authorized. Login again" })
    }

    // If everything is fine, proceed to the next middleware
    next();
  } catch (error) {
    console.log(error);
    if (!res.headersSent) {
      return res.status(401).json({ success: false, message: "Invalid Token" })
    }
  }
};

export default authUser
