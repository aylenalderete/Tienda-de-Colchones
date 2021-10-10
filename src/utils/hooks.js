import { useEffect } from "react";

export const useEffectAsync = (effect, params=[]) => {
    useEffect(() => {
        (async () => {
          // eslint-disable-next-line
          await effect()
        })()
    // eslint-disable-next-line
    }, params);
  };
  