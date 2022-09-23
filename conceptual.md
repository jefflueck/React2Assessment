### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  React Router is a library that allows us to navigate between different pages without a full page refresh unless we have a component have a state change.

- What is a single page application?

  A single page application is an application that only loads one web documents and only refreshes when a request from the server is needed or an update to the state of a component is needed.

- What are some differences between client side and server side routing?

  Client side routing is when the routing is handled by the client and the server only sends the initial document. Server side routing is when the routing is handled by the server and the client only sends requests to the server.

- What are two ways of handling redirects with React Router? When would you use each?

  We can use the Redirect from react router to send a user to a different page after an event occurs. We can also use the history API to send them back to a previous page using the stored cached history in the browser session.

- What are two different ways to handle page-not-found user experiences using React Router?

  We can make a component that handles the 404 error and send the user to that page if the route they are trying to access does not exist. We can also use the Switch component from react router to only render the first route that matches the path.

- How do you grab URL parameters from within a component using React Router?

  <!-- ? Check this answer with mentor -->

  useParams hook from react router will give us a key value pair of the parameters in the URL.

- What is context in React? When would you use it?

  Context is a way to pass data through the component tree without having to pass props down manually at every level. We can use it to pass data to components that are not direct children of the component that has the data.

- Describe some differences between class-based components and function
  components in React.

  <!-- ? Check this answer with mentor -->

  Class based components have a render method that returns the JSX that will be rendered. Function components are just functions that return JSX.

- What are some of the problems that hooks were designed to solve?

  <!-- ? Check this answer with mentor -->

  Hooks were designed to solve the problem of having to use class based components to use state and lifecycle methods. They also solve the problem of having to use higher order components to share state between components.
