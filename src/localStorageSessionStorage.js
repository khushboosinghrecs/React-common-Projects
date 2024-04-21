
// `localStorage` and `sessionStorage` are two web storage options provided by modern web browsers to store data locally on the user's device. Both options allow developers to store key-value pairs in a simple way, but they have some differences in terms of scope and lifetime.

// 1. **localStorage:**
//    - **Scope:** Data stored in `localStorage` has a broader scope and persists even when the browser is closed and reopened.
//    - **Lifetime:** The data in `localStorage` remains until explicitly cleared by the user or by the web application.

//    // Store data in localStorage
   localStorage.setItem('key', 'value');

   // Retrieve data from localStorage
   const value1 = localStorage.getItem('key');

   // Remove data from localStorage
   localStorage.removeItem('key');~

   // Clear all data from localStorage
   localStorage.clear();

// 2. **sessionStorage:**
//    - **Scope:** Data stored in `sessionStorage` is limited to the duration of the page session. It is available as long as the page is open, and it is cleared when the page is closed.
//    - **Lifetime:** Unlike `localStorage`, the data in `sessionStorage` is temporary and does not persist across browser sessions.

//    ```javascript
//    // Store data in sessionStorage
   sessionStorage.setItem('key', 'value');

   // Retrieve data from sessionStorage
   const value = sessionStorage.getItem('key');

   // Remove data from sessionStorage
   sessionStorage.removeItem('key');

   // Clear all data from sessionStorage
   sessionStorage.clear();

// It's important to note that both `localStorage` and `sessionStorage` store data as strings. If you need to store complex data structures, you can use `JSON.stringify` to convert objects to strings before storing and `JSON.parse` to convert them back to objects when retrieving.

// Storing an object in localStorage
const data = { key: 'value' };
localStorage.setItem('myObject', JSON.stringify(data));

// Retrieving the object from localStorage
const retrievedData = JSON.parse(localStorage.getItem('myObject'));

// Keep in mind that storing sensitive information in local storage is not recommended, as it is accessible through JavaScript and could be vulnerable to certain types of attacks. For sensitive data, it's better to use server-side storage and authentication mechanisms.
