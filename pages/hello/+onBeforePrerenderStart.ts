// https://vike.dev/onBeforePrerenderStart
export { onBeforePrerenderStart };

import type { OnBeforePrerenderStartAsync } from "vike/types";
import { names } from "./names";

const onBeforePrerenderStart: OnBeforePrerenderStartAsync =
  async (): ReturnType<OnBeforePrerenderStartAsync> => {
    // use like getStaticPath in Nextjs
    return ["/hello", ...names.map((name) => `/hello/${name}`)];
  };
