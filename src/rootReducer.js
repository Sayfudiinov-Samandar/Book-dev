import { combineReducers } from "redux";

import { ThemeReducer } from "./redux/theme/themeReducer";
import { LangReducer } from "./redux/language/langReducer";
import { UserReducer } from "./redux/user/userReducer";
import { TokenReducer } from "./redux/token/tokenReducer";

export const rootReducer=combineReducers({
    theme: ThemeReducer,
    lang: LangReducer,
    user: UserReducer,
    token: TokenReducer
})