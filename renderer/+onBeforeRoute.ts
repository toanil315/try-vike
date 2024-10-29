import { OnBeforeRouteAsync } from "vike/types";

export { onBeforeRoute };

const onBeforeRoute: OnBeforeRouteAsync = async (pageContext) => {
  // usually fetch or extract i18n data here
  //   console.log("onBeforeRoute", pageContext);
  return {
    pageContext: {},
  };
};
