import { useEffect } from "react";

const Count = ({ count, value }) => {
  useEffect(() => {
    document.title = `You Cliked ${value} Times`;
    return () => {
      document.title = `Simple React Application`;
    };
  }, [value]);

  return <h1>{count}</h1>;
};

export default Count;
