import { useEffect } from "react";

export const useEffectAsync = (effect, params) => {
    useEffect(() => {
        (async () => {
          await effect()
        })()
    }, params);
  };
  