import { route } from "../../components/Navbar/routes";

export const GET_RENDER = "GET_RENDER";
export const SET_RENDER = "SET_RENDER";

interface getRender {
  type: typeof GET_RENDER;
}

interface setRender {
  type: typeof SET_RENDER;
  payload: route;
}

export type RenderActionTypes = getRender | setRender;
