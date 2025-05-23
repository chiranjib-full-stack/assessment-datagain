Front-End Interview Assignment – Next.js + Redux + ShadCN UI
  Project Overview:-
-This project demonstrates my ability to implement a complex front-end solution using Next.js, Redux Toolkit, ShadCN, and Axios for API handling. The goal of the assignment was to create a CRUD table with SSR (Server-Side Rendering), a collapsible sidebar, and interactive calendar events, following a clean architecture and modern React practices.
## Project Preview

![App Screenshot](./public/screenshot(147).png)
![App Screenshot](./public/screenshot(149).png)
 Key Features & Implementation Details:-
-Clean Folder Structure:

-Organized the project into clearly defined folders, maintaining a scalable structure for components, services, slices, and utilities.

-API Handling with Axios:

-Created a centralized HTTP client in the httpClient.js file for all API requests using Axios.

-Defined a CRUD service to handle the creation, reading, updating, and deleting of data across different components.

-Redux Toolkit with Thunks:

-Used Redux Toolkit with Thunk middleware to manage asynchronous API calls.

-Sliced the state logically for different features and ensured that data was synced with the store efficiently.

-Custom Redux Provider:

-Developed a custom Redux provider to wrap the layout, preventing unnecessary Client-Side Rendering (CSR) across the entire app, optimizing performance.

-Hybrid SSR + Client-side Rendering:

-Implemented a hybrid structure, where the main route page is SSR-based, while interactive components (like CRUD tables) are wrapped with the Redux provider to handle client-side interactions.

-CRUD Table with Initial Data Fetch:

-Implemented a dynamic CRUD table that loads data initially via SSR and performs real-time updates with Redux state.

-Used Redux actions to handle the create, read, update, and delete operations on the table data.

UI with ShadCN:

-Used ShadCN UI components to create a consistent and visually appealing interface, making use of its ready-made components for a faster development process.

Separation of Concerns:

-Ensured that logic for slice management and async thunks are separated for better maintainability and clarity in the codebase.

⚙️ Tools & Technologies Used
Next.js for server-side rendering (SSR) and routing.

-Redux Toolkit and Thunk for state management and async actions.

-ShadCN UI for clean, modern UI components.

-Axios for API handling.

-Tailwind CSS for utility-first styling.


Future Enhancements:-
-Testing: Add unit and integration tests for components and services.

-Performance Optimization: Further optimize the loading time of SSR pages.

-User Authentication: Integrate role-based authentication for an enhanced user experience.#   a s s e s s m e n t - d a t a g a i n  
 