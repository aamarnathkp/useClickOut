# useClickOut - Custom Hook

This custom hook is used to handle the click event outside of a referenced component.

## Usage

```javascript
const callbackFunction = () => {
    console.log("clicked outside !!");
};
const ref = useClickOut(callbackFunction);

<Modal ref={ref}>...children...</Modal>;
```
