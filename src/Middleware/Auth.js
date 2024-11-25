const adminAuth = (req, res, next) => {
    const token = "Rahul";
    const isTokenAuthenticated = token === "Rahul";
    if (!isTokenAuthenticated) {
      res.status(404).send("Authentication failed");
    } else {
      next();
    }
  };
  const userAuth = (req, res, next) => {
    const token = "xyzed";
    const isTokenAuthenticated = token === "xyz";
    if (!isTokenAuthenticated) {
      res.status(404).send("Authentication failed");
    } else {
      next();
    }
  };
  
  module.exports = {adminAuth,userAuth};
  