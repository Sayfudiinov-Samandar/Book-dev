import { THEME_LIGHT } from "./themeType";

export const changeLightTheme = (theme) => {
	return {
		type: THEME_LIGHT,
		payload: theme,
	};
};


