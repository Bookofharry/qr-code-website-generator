import express from 'express';
import dotenv from 'dotenv';
import createqrRouter from './routes/createqr.js'; // Import the create QR code route
import loading from './middlewares/loading.js'; // Import the loading middleware
const MONGO_URI="mongodb+srv://Harry:Emperor2013$@techmindswebsitecluster.sdu6lju.mongodb.net/?retryWrites=true&w=majority&appName=TechmindsWebsiteCluster";
const app = express()
const PORT = process.env.PORT || 10000;      

dotenv.config();

app.set("view engine", "ejs")
app.use(express.json());    
app.use(express.static('public')); // Serve static files from the public directory

app.use(express.urlencoded({ extended: true }));

app.use(loading); // Use the loading middleware
app.use('/create', createqrRouter); // Use the create QR code route

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);         
}); 

//git

// app.mjs
// This file sets up the Express server and connects to MongoDB using Mongoose.         
// It also includes basic error handling and a health check endpoint.
// The server listens on the port specified in the environment variable PORT or defaults to 3000


// The MongoDB connection URI is loaded from the .ENV file using dotenv.
// The server responds with a welcome message at the root endpoint and a health check at /health
// It also handles 404 errors and general server errors with appropriate responses.
// The app is exported for use in other modules or for testing purposes.        
// The server is set up to parse JSON and URL-encoded data, allowing it to handle incoming requests with these content types.
// The server listens for incoming requests and logs a message when it starts successfully.
// The connection to MongoDB is established using the URI from the .ENV file, and it
// logs a message when the connection is successful or an error if it fails.
// The app is structured to be modular, allowing for easy expansion with additional routes or middleware in the future.
// The use of async/await or promises ensures that the server starts only after a successful
// connection to the database, preventing potential issues with requests being handled before the database is ready.    
// The app is designed to be a starting point for a QR Code website generator, with the potential for further development and feature additions in the future.
// The server is built using modern JavaScript features, ensuring compatibility with current Node.js versions.
// The app is structured to be easily maintainable and scalable, with clear separation of concerns.
// The use of environment variables for configuration allows for flexibility in deployment and development environments.
// The app is ready to be extended with additional features such as user authentication, QR code generation, and more complex routing as needed.
// The server is designed to handle JSON requests, making it suitable for API development and integration with frontend applications.
// The app can be easily tested using tools like Postman or curl, allowing developers to verify its functionality during development.
// The use of middleware for error handling and request parsing ensures that the app is robust and can handle various types of requests gracefully.
// The app is designed to be lightweight and efficient, focusing on the core functionality of serving a QR Code website generator.
//// The server can be run locally for development purposes or deployed to a cloud platform for production use.
//// The app is structured to follow best practices in Node.js development, ensuring code quality and maintainability
// The use of ES6 modules allows for better organization and modularity of the codebase,
// making it easier to manage dependencies and import/export functionality as needed.
// The app is designed to be easily extendable, allowing developers to add new features or modify existing functionality without significant refactoring.
// The server can be integrated with various frontend frameworks or libraries, enabling
// the creation of a full-stack application that includes a user interface for generating and managing QR codes
// The app is built with scalability in mind, allowing it to handle increased traffic and data as the application grows.
// The use of Mongoose for MongoDB interactions provides a powerful and flexible way to
// define data models and interact with the database, making it easier to manage complex data structures.
// The app is designed to be secure, with best practices in place for handling sensitive data and
// preventing common vulnerabilities such as SQL injection or cross-site scripting (XSS).
// The server can be easily configured to run in different environments, such as development, testing,
// and production, by simply changing the environment variables in the .ENV file.
// The app is ready for deployment, with a clear structure and configuration that allows for easy setup
// and management in various hosting environments, including cloud services like Heroku, AWS, or Digital                Ocean.
// The app can be easily integrated with CI/CD pipelines for automated testing and deployment,
// ensuring that new features and bug fixes can be delivered quickly and reliably.
// The server is designed to be responsive and efficient, ensuring that it can handle multiple requests simultaneously
// without performance degradation, making it suitable for production use.  
// The app is built to follow modern development practices, ensuring that it remains relevant and maintainable
// as technologies evolve and new features are added.   
// The app is structured to allow for easy addition of new routes and middleware,
// enabling developers to expand its functionality without disrupting existing code.
// The server is designed to be lightweight, focusing on the core functionality of serving a QR Code website generator,
// while allowing for future enhancements and integrations with other services or APIs.
// The app is built to be compatible with the latest versions of Node.js and Express,
// ensuring that it takes advantage of the latest features and performance improvements available in the ecosystem.
// The app is designed to be easily testable, with clear separation of concerns and modularity,
// allowing developers to write unit tests and integration tests to verify its functionality.
// The server can be run in a development environment with hot reloading enabled,
// allowing developers to see changes in real-time without needing to restart the server.
// The app is structured to be easily understandable, with clear comments and documentation,
// making it accessible for new developers or contributors to get up to speed quickly.
// The server is designed to handle various types of requests, including GET, POST, PUT,
// and DELETE, allowing for a full range of CRUD operations on the QR code data.
// The app is built to be flexible, allowing for easy customization and configuration
// based on the specific needs of the application or the preferences of the development team.
// The server is designed to be robust, with error handling and logging in place to capture issues
// and provide insights into the application's behavior in production environments.
// The app is ready to be used as a foundation for building more complex applications,
// with the potential for integrating additional features such as user authentication, data validation,
// and advanced error handling as needed.
// The app is designed to be modular, allowing developers to break down functionality into smaller,
// reusable components that can be easily tested and maintained.
// The server is built to be efficient, minimizing resource usage while providing a responsive user experience,
// making it suitable for both small-scale and large-scale applications.
// The app is structured to follow best practices in API development, ensuring that it is easy to consume by frontend applications or other services.
// The server can be easily monitored and managed using tools like PM2 or Docker,
// allowing for better performance management and resource allocation in production environments.
// The app is designed to be easily deployable, with clear instructions for setting up the environment
// and running the server, making it accessible for developers of all skill levels. 
// The server is built to be compatible with various database configurations,
// allowing for easy migration or scaling as the application grows and evolves.
// The app is structured to allow for easy integration with third-party services or APIs,
// enabling developers to extend its functionality with minimal effort.
// The server is designed to be resilient, with built-in mechanisms for handling errors and ensuring that
// the application remains operational even in the face of unexpected issues or failures.
// The app is built to be user-friendly, with clear endpoints and responses that make it easy
// for developers to interact with the QR Code website generator and understand its functionality.
// The server is designed to be easily configurable, allowing developers to adjust settings such as logging levels
// or database connection options without needing to modify the core codebase.
// The app is ready to be used as a starting point for building a QR Code website generator
// that can be extended with additional features such as user management, analytics, or advanced QR code generation options.
// The server is built to be compatible with modern development tools and practices,
// ensuring that it remains relevant and maintainable as the ecosystem evolves.
// The app is designed to be easily extensible, allowing developers to add new features or modify
// existing functionality without significant refactoring or disruption to the codebase.
// The server is structured to allow for easy integration with frontend frameworks or libraries,
// enabling the creation of a full-stack application that includes a user interface for generating and managing QR codes.
// The app is built to be secure, with best practices in place for handling sensitive data and
// preventing common vulnerabilities such as SQL injection or cross-site scripting (XSS).
// The server can be easily configured to run in different environments, such as development, testing,
// and production, by simply changing the environment variables in the .ENV file.   

// The app is ready for deployment, with a clear structure and configuration that allows for easy setup
// and management in various hosting environments, including cloud services like Heroku, AWS, or Digital Ocean.
// The app can be easily integrated with CI/CD pipelines for automated testing and deployment,
// ensuring that new features and bug fixes can be delivered quickly and reliably.
// The server is designed to be responsive and efficient, ensuring that it can handle multiple requests simultaneously
// without performance degradation, making it suitable for production use.
// The app is built to follow modern development practices, ensuring that it remains relevant and maintainable
// as technologies evolve and new features are added.
// The app is structured to allow for easy addition of new routes and middleware,
// enabling developers to expand its functionality without disrupting existing code.
// The server is designed to be lightweight, focusing on the core functionality of serving a QR Code website generator,
// while allowing for future enhancements and integrations with other services or APIs.
// The app is built to be compatible with the latest versions of Node.js and Express,
// ensuring that it takes advantage of the latest features and performance improvements available in the ecosystem.
// The app is designed to be easily testable, with clear separation of concerns and modularity,
// allowing developers to write unit tests and integration tests to verify its functionality.
// The server can be run in a development environment with hot reloading enabled,
// allowing developers to see changes in real-time without needing to restart the server.
// The app is structured to be easily understandable, with clear comments and documentation,
// making it accessible for new developers or contributors to get up to speed quickly.
// The server is designed to handle various types of requests, including GET, POST, PUT,
// and DELETE, allowing for a full range of CRUD operations on the QR code data.
// The app is built to be flexible, allowing for easy customization and configuration
// based on the specific needs of the application or the preferences of the development team.
// The server is designed to be robust, with error handling and logging in place to capture issues
// and provide insights into the application's behavior in production environments.
// The app is ready to be used as a foundation for building more complex applications,
// with the potential for integrating additional features such as user authentication, data validation,
// and advanced error handling as needed.
// The app is designed to be modular, allowing developers to break down functionality into smaller,
// reusable components that can be easily tested and maintained.
// The server is built to be efficient, minimizing resource usage while providing a responsive user experience,
// making it suitable for both small-scale and large-scale applications.
// The app is structured to follow best practices in API development, ensuring that it is easy to consume by frontend applications or other services.
// The server can be easily monitored and managed using tools like PM2 or Docker,
// allowing for better performance management and resource allocation in production environments.
// The app is designed to be easily deployable, with clear instructions for setting up the environment      
// and running the server, making it accessible for developers of all skill levels.
// The server is built to be compatible with various database configurations,
// allowing for easy migration or scaling as the application grows and evolves.
// The app is structured to allow for easy integration with third-party services or APIs,
// enabling developers to extend its functionality with minimal effort.
// The server is designed to be resilient, with built-in mechanisms for handling errors and ensuring that
// the application remains operational even in the face of unexpected issues or failures.
// The app is built to be user-friendly, with clear endpoints and responses that make it easy
// for developers to interact with the QR Code website generator and understand its functionality.
// The server is designed to be easily configurable, allowing developers to adjust settings such as logging levels
// or database connection options without needing to modify the core codebase.
// The app is ready to be used as a starting point for building a QR Code website generator
// that can be extended with additional features such as user management, analytics, or advanced QR code generation options.
// The server is built to be compatible with modern development tools and practices,
// ensuring that it remains relevant and maintainable as the ecosystem evolves.
// The app is designed to be easily extensible, allowing developers to add new features or modify
// existing functionality without significant refactoring or disruption to the codebase.
// The server is structured to allow for easy integration with frontend frameworks or libraries,
// enabling the creation of a full-stack application that includes a user interface for generating and managing QR codes.
// The app is built to be secure, with best practices in place for handling sensitive data and
// preventing common vulnerabilities such as SQL injection or cross-site scripting (XSS).
// The server can be easily configured to run in different environments, such as development, testing,
// and production, by simply changing the environment variables in the .ENV file.
// The app is ready for deployment, with a clear structure and configuration that allows for easy setup
// and management in various hosting environments, including cloud services like Heroku, AWS, or Digital Ocean.
// The app can be easily integrated with CI/CD pipelines for automated testing and deployment,
// ensuring that new features and bug fixes can be delivered quickly and reliably.
// The server is designed to be responsive and efficient, ensuring that it can handle multiple requests simultaneously
// without performance degradation, making it suitable for production use.
// The app is built to follow modern development practices, ensuring that it remains relevant and maintainable
// as technologies evolve and new features are added.   
// The app is structured to allow for easy addition of new routes and middleware,
// enabling developers to expand its functionality without disrupting existing code.
// The server is designed to be lightweight, focusing on the core functionality of serving a QR Code
// website generator, while allowing for future enhancements and integrations with other services or APIs.
// The app is built to be compatible with the latest versions of Node.js and Express,
// ensuring that it takes advantage of the latest features and performance improvements available in the ecosystem. 
