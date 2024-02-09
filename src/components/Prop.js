// Button component with props
function Button(props) {
    return <button style={{ backgroundColor: props.color }}>{props.text}</button>;
  }
  
  // Usage
  function Props() {
    return <Button color="blue" text="Click me" />;
  }
  
  export default Props;
  