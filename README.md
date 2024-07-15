# useClickOut - Custom Hook

This custom hook is used to handle the click event outside of a referenced component.

## Usage

```javascript
const callbackFunction = () => {
    console.log("clicked outside !!");
};
const ref = useClickOut(callbackFunction);

<div ref={ref}>...children...</div>;
```
