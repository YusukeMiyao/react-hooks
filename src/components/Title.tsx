import React from "react";

export const Title = React.memo(() => {
  console.log("Title component");
  return (
    <div>
      <h1>useCallback hookによる最適化</h1>
    </div>
  );
});
