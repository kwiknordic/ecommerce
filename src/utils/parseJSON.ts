import { useMemo } from "react";

export function memoizedParsedJSON(JSONstring: string) {
  return useMemo(() => {
    return JSON.parse(JSONstring)
  }, [JSONstring])
}