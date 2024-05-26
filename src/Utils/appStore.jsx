import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
import liveChatSlice from "./liveChatSlice";

const appStore = configureStore({
    reducer: {
        app: appSlice,
        cache: cacheSlice,
        liveChat: liveChatSlice
    }
})

export default appStore