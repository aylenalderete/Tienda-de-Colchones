import { useEffect } from "react";

export const useEffectAsync = (effect = async () => {}, params=[]) => {
    useEffect(() => {
        (async () => {
          await effect()
        })()
    }, [params, effect]);
  };
  