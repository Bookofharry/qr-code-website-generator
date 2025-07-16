function loading(req, res, next) {
    console.log('Loading middleware activated');
    console.log('Request URL:', req.originalUrl);
    console.log('Request Method:', req.method);
    console.log('Request Headers:', req.headers);
    // Log the current time for debugging purposes
    console.log('Reqest Path:', req.path);
    console.log('Request Time:', new Date().toISOString());
    // You can add more logging or processing here if needed
    res.locals.loading = true; // Set a local variable to indicate loading state
    // Continue to the next middleware or route handler     
  next();
}
export default loading;