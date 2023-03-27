---
title: 'Understanding useEffect in React: A Beginner's Guide'
date: 2023-03-27 19:45
modified: 2023-03-27 19:45
category: Blog
summary: UseEffect hook is a powerful and versatile tool in react that allows you to handle side effects in your components.
tags: react, react hooks, useEffect, reactjs, react states, side effect, coding, js, nextjs
authors: Aaditya Chapagain
status: published
---

React is a popular library for building user interfaces, and one of its most powerful features is the ability to manage component state and side effects. Today, we'll explore the useEffect hook, which allows us to handle side effects in functional components. This guide will cover the basics of useEffect, provide code examples to demonstrate its use in various scenarios, and help you understand when and how to use it.

One of the most crucial ideas for knowing React today is how the 'useEffect' Hook functions. Consider that you have been using React for a while. In that instance, it is especially important to comprehend the differences between using useEffect and using the lifecycle methods of class-based components.

In the React Hooks period, it is crucial to comprehend how to call side effects from within functional components with useEffect. At first, dealing with the useEffect Hook's side effects may seem difficult, but gradually everything will make sense.

## Table of contents

## What are side effects?

Before we dive into how to use useEffect, let's discuss what side effects are in React.In simple terms, `side effects` is any action that occurs outside the scope of the component's `render` method. Such as

1. Fetching data from API
2. Setting up or cleaning event listeners
3. updating the DOM directly
4. Subscribing to a data stream

Those side effects can cause issues in your application if they are not handled properly.For example, if you fetch data
from an API inside a component every time it re-renders, you may end up making too many API calls, which can slow down your application and increase the cost of running it.

## Using `useEffect`

he `useEffect` hook is part of React's [Hooks API](https://react.dev/reference/react) and used to manage side effects in functional component of react.It accepts two arguments:

1. A function that represents the side effects to be performed
2. An optional array of dependencies that determines when the effect should be executed.

```js
useEffect(
  () => {
    // Side effect to be performed
  },
  [
    /* dependencies */
  ]
);
```

### simulating `ComponentDidMount`

Consider following example:

```js
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
```

Above , Inside useEffect hook, we use the fetch function to make a GET request to an API. When the response comes back, we parse the JSON data and update the `data` state variable using the `setData` function.

The dependency array in `useEffect` is the array of values that the effect depends on which means if any of these values change, the effect will re-run or it will keep tracks of object in dependencies array and if any of the object in dependency array don't match with it previous version of data it will re-run the side effects written in `useEffect` hook.

But, In above case the dependency array is empty which means the effect will only run once in its lifetime ( when it is mounting the component ). In terms of class based react, it is exact way of setting states on `ComponentDidMount` lifecycle method.

### Simulating `ComponentDidUpdate`

Consider below example:

```js
import { useState, useEffect } from "react";

function App({ userID }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.example.com/data?user_id=${userID}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [userID]);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
```

In above example, dependency array has one item which is also a props to the component. Hence, `useEffect` will track the changes on `userID` props, re-run the side effects present inside the useEffect when value of `userID` changes. Hence, It acts as a `componentDidUpdate` lifecycle method.

### Simulating `componentWillUnmount`

Consider below example:

```js
import { useState, useEffect } from "react";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    console.log("component mounted!");

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  return (
    <div>
      <button onClick={() => setShowComponent(!showComponent)}>
        {" "}
        Toggle Component
      </button>
      {showComponent && <ChildComponent />}
    </div>
  );
}

function ChildComponent() {
  useEffect(() => {
    console.log("Child component mounted");
    return () => {
      console.log("Child component unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
}
```

In this example, we define a state variable called 'showComponent' and a function called 'setShowComponent' that we use to toggle the visibility of a child component.

We use useEffect to log a message to the console when the component mounts and a different message when it unmounts. We also define a similar effect inside the child component.

When we toggle the visibility of the child component using the button, we can see the messages in the console. When the child component is unmounted, the cleanup function is called which is similar functionality to the `componentWillUnmount` lifecycle method.

## Conclusion

the useEffect hook is a powerful tool in React that allows you to handle side effects in your components. By using it correctly, you can make your code more efficient and easier to maintain.

Remember, useEffect takes two arguments: a function and an array of dependencies. The function is the side effect you want to perform, and the dependencies are variables that the effect depends on.

You can use useEffect to fetch data from an API, update the title of the page, or set up timers and intervals. You can also use useEffect to return a cleanup function that cleans up any resources used by the effect.

It's important to pass the correct dependencies to useEffect to avoid unnecessary re-renders and memory leaks.

## Tips and Tricks on using useEffect effectively:

- Use it for handling side effects: useEffects is designed to handle side effects and you should only use it that way.If you need to modify the state of your component, you should use useState instead.

- Seperate concerns: Use multiple useEffect hooks to separate unrelated side effects. This makes your code easier to understand and maintain.

- Optimize performance: Be mindful of the dependencies you pass to useEffect. Provide an array of dependencies that accurately represent when the effect should be executed to avoid unnecessary updates.

- Avoid infinite loops: When using a state variable as a dependency, make sure your effect does not cause an infinite loop by updating that state variable on every render.

- Don't forget the cleanup: Always provide a cleanup function when your side effect requires it to avoid memory leaks and unexpected behavior.
