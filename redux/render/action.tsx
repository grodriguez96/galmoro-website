import { GET_RENDER, SET_RENDER, RenderActionTypes } from "./type";
import { route } from "../../components/Navbar/routes";

export const getRender = (): RenderActionTypes => {
  return { type: GET_RENDER };
};

export const setRender = (render: route): RenderActionTypes => {
  return { type: SET_RENDER, payload: render };
};
