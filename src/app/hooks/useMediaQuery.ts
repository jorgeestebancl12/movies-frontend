import { useState, useEffect } from "react";

type MediaQueries = {
  [key: string]: string;
};

type MediaQueryMatches = {
  [key: string]: boolean;
};

const hasOwnProperty = (obj: object, prop: string): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

const useMediaQueries = (queries: MediaQueries): MediaQueryMatches => {
  const getMatches = (): MediaQueryMatches => {
    const matches: MediaQueryMatches = {};
    for (const key in queries) {
      if (hasOwnProperty(queries, key)) {
        matches[key] = window.matchMedia(queries[key]).matches;
      }
    }
    return matches;
  };

  const [matches, setMatches] = useState<MediaQueryMatches>(getMatches);

  useEffect(() => {
    const mediaQueryLists = Object.keys(queries).map((key) => ({
      key,
      mql: window.matchMedia(queries[key]),
    }));

    const handleChange = () => {
      setMatches(getMatches());
    };

    mediaQueryLists.forEach(({ mql }) =>
      mql.addEventListener("change", handleChange)
    );

    // Cleanup listeners on unmount
    return () => {
      mediaQueryLists.forEach(({ mql }) =>
        mql.removeEventListener("change", handleChange)
      );
    };
  }, [queries]);

  return matches;
};

export default useMediaQueries;
