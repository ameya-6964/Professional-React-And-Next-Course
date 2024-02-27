const Practice = () => {
  const value = 3;
  /* Tempelate Literals */
  const text = `The Current Value Is ${value}`;

  /* Early Return */
  if (value > 5) {
    return <h1>Number To Big</h1>;
  }

  return <h1>{text}</h1>;
};

export default Practice;
