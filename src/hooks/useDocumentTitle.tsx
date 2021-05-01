import { useEffect } from "react";

export const useDocumentTitle = (count: any) => {
  useEffect(() => {
    document.title = `カウント${count}`;
  }, [count]);
};
