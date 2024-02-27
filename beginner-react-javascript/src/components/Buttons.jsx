const Buttons = ({ children, clickHandler }) => {
  return <button onClick={clickHandler}>{children}</button>;
};

export default Buttons;
