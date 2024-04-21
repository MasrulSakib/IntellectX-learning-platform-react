import React from 'react';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto px-4 py-8">
                <h1 className="md:text-3xl text-2xl font-bold mb-4">Exploring Key Questions in Web Development</h1>

                {/* Question and Answer 1 */}
                <div className="mb-6">
                    <h2 className="md:text-xl text-lg font-semibold mb-2">1. What is CORS?</h2>
                    <p className="md:text-lg text-base">CORS, short for Cross-Origin Resource Sharing, is a security feature implemented by web browsers to restrict web pages from making requests to a different origin than the one that served the original page. CORS is essential for ensuring secure communication between different origins on the web.</p>
                </div>

                {/* Question and Answer 2 */}
                <div className="mb-6">
                    <h2 className="md:text-xl text-lg font-semibold mb-2">2. Why are you using Firebase? What other options do you have to implement authentication?</h2>
                    <p className="md:text-lg text-base">Firebase is chosen for authentication due to its simplicity, scalability, and integration with other Firebase services. Other options for implementing authentication include using server-side technologies like Node.js with Passport.js, OAuth providers (e.g., Auth0), or custom authentication solutions using JSON Web Tokens (JWT).</p>
                </div>

                {/* Question and Answer 3 */}
                <div className="mb-6">
                    <h2 className="md:text-xl text-lg font-semibold mb-2">3. How does the private route work?</h2>
                    <p className="md:text-lg text-base">A private route is a React Router pattern used for protecting routes that require authentication. The private route component checks the user's authentication status. If authenticated, it renders the requested component; otherwise, it redirects the user to a login page or displays an unauthorized message. This pattern helps enforce access control and protect sensitive parts of an application from unauthorized access.</p>
                </div>

                {/* Question and Answer 4 */}
                <div className="mb-6">
                    <h2 className="md:text-xl text-lg font-semibold mb-2">4. What is Node? How does Node work?</h2>
                    <p className="md:text-lg text-base">Node.js is a runtime environment that allows developers to run JavaScript code on the server-side. It uses the V8 JavaScript engine from Google Chrome and provides a rich set of libraries and tools for building scalable and performant web applications. Node.js operates on a non-blocking, event-driven architecture, making it suitable for handling asynchronous operations such as file I/O, network requests, and database operations without blocking the execution of other tasks.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;
