import { SET_RENDER, GET_RENDER, RenderActionTypes } from "./type";
import { route } from "../../components/Navbar/routes";

const initialState: route = { id: "", href: "", name: "" };

const renderReducer = (state = initialState, action: RenderActionTypes) => {
  switch (action.type) {
    case SET_RENDER:
      return { ...state, state: action.payload };
    case GET_RENDER:
      return { ...state };
    default:
      return { ...state };
  }
};

export default renderReducer;
