Debouncing and throttling are two techniques used in React (and JavaScript in general) to optimize the performance of event handlers, especially for events like scrolling, resizing, or typing, where the event can fire rapidly. These techniques help reduce the number of times a function is called, improving performance and avoiding unnecessary computations.

**Debouncing**:

1. **Definition**: Debouncing is a technique where a function is delayed in execution until after a certain amount of time has passed since the last trigger of the event. It ensures that the function is only called once after a series of rapid events.

2. **Use Case**: Debouncing is often used for scenarios like search input fields where you want to make an API call only after the user has stopped typing for a certain duration, preventing multiple API calls for each keystroke.

Here's an example of a debounce function in React using the `lodash` library:

```javascript
import { debounce } from 'lodash';

function SearchInput() {
  const handleSearch = debounce(searchFunction, 300); // Debounce for 300 milliseconds

  function searchFunction(query) {
    // Perform the search operation here (e.g., make an API request)
    console.log(`Searching for: ${query}`);
  }

  function handleChange(event) {
    const query = event.target.value;
    handleSearch(query);
  }

  return <input type="text" onChange={handleChange} />;
}
```

In this example, `handleSearch` is a debounced function that will execute `searchFunction` only if there is a pause of 300 milliseconds between keystrokes.

**Throttling**:

1. **Definition**: Throttling is a technique where a function is executed at a fixed interval, regardless of how many times the event is triggered during that interval. It limits the rate at which a function is called.

2. **Use Case**: Throttling is useful when you want to limit the frequency of a specific event, like scrolling or mouse movement, to avoid excessive updates.

Here's an example of a throttled scroll event handler in React:

```javascript
import { throttle } from 'lodash';

function ScrollComponent() {
  const handleScroll = throttle(scrollHandler, 200); // Throttle to 200 milliseconds

  function scrollHandler() {
    // Perform actions on scroll here
    console.log('Scrolled');
  }

  // Attach the throttled event handler to the window's scroll event
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return <div>Scroll me!</div>;
}
```

In this example, `handleScroll` is a throttled function that limits the scroll event to execute at most every 200 milliseconds.

Debouncing and throttling are essential techniques to optimize the performance of your React applications when dealing with frequently fired events. Libraries like lodash provide convenient debounce and throttle functions, but you can also implement these techniques manually if needed.