import React, { Children } from "react";

export const Button = React.memo(({ handleClick, children }: any) => {
  console.log("Button component -", children);
  return <button onClick={handleClick}>{children}</button>;
});
