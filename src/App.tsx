import "./styles.css";
import React, { useCallback, useState } from "react";

/**
 * This is a React 17 & TypeScript 4.4.2 project using react-scripts 4.0.3.
 *
 * Let's work through the exercises below using just these dependencies.
 *
 * Styles are defined in `styles.css` and the class names used in that file
 * can be referenced exactly as named in JSX `className` attributes.
 * e.g. `.App { ... }` can be referenced as `className="App"`
 *
 * Exercise Part 1:
 * Make a todo list where...
 * - there is a list of todos with checkboxes that indicate whether the todo item is complete
 * - there is a text input of some kind to write the content for new items
 * - there is a button to click that adds the new drafted item
 * - the UX is decomposed into at least two supporting components
 * - TypeScript types are declared for all props and state
 *
 * Exercise Part 2:
 * Add any or all of the following features/changes...
 * - there is a button to click that clears/removes todo items that are complete
 * - refactor the whole component to support being used as a shared component, including multiple lists on a single page
 * - apply aesthetic styles such as strikethrough styled text for completed todos
 * - todo items, inputs, and buttons have appropriate accessibility attributes
 * - add basic validation to any text inputs
 * - define a custom hook for all state tracked
 * - add a concept of nested or hierarchical todo items, at least one level deep
 * - store todo state in browser storage so that it persists across refreshes
 * - write mock functions to persist and retrieve todo state from an API
 */

export default function App() {
  const [number, setNumber] = useState(0);
  const incNumber = useCallback(() => {
    setNumber(1 + number);
  }, [number]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox {number}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incNumber}>Increment The Number</button>
    </div>
  );
}
