import { isIOS } from "@nativescript/core";
import { ListView } from "@nativescript/core";
import { ScrollView } from "@nativescript/core";
/**
 * Hides horizontal scrollbars for scrollViews or ListViews on Android and iOS
 */
export function removeHorizontalScrollBars(view: ScrollView | ListView): void {
	if (isIOS) {
		view.ios.showsHorizontalScrollIndicator = false;
	} else {
		view.android.setHorizontalScrollBarEnabled(false);
	}
}
