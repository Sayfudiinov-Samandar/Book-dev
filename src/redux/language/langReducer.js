import { LANG_TYPE } from "./langType";

const initialState = {
	lang: (localStorage.getItem("lang")) || "",
};


export const LangReducer = (state = initialState, action) => {
	switch (action.type) {
		case LANG_TYPE:
			return {
				...state,
				lang: action.payload,
			};
		default:
			return state;
	}
};
