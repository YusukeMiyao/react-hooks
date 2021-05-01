import React from "react";

export const Count = React.memo(({ text, count }: any) => {
  console.log("Count component -", text);
  return (
    <div>
      {text}:{count}
    </div>
  );
});
