import { LANG_TYPE } from "./langType";

export const changeLang = (lang) => {
	return {
		type: LANG_TYPE,
		payload: lang,
	};
};


