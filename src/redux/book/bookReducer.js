import { THEME_LIGHT } from "./themeType";

const initialState = {
	user: (localStorage.getItem("theme")) || true,
};


export const ThemeReducer = (state = initialState, action) => {
	switch (action.type) {
		case THEME_LIGHT:
			return {
				...state,
				theme: action.payload,
			};
		default:
			return state;
	}
};
