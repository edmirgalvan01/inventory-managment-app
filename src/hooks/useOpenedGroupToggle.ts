import { useEffect, useState } from "react";

export function useOpenedGroupToggle(itemToCheck: boolean) {
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    setOpened(itemToCheck);
  }, [itemToCheck]);

  return { opened, setOpened };
}
