import { isIOS } from "@nativescript/core";
import { ListView } from "@nativescript/core";
import { ScrollView } from "@nativescript/core";
/**
 * Hides vertical scrollbars for scrollViews or ListViews on Android and iOS
 */
export function removeVerticalScrollBars(view: ScrollView | ListView): void {
	if (isIOS) {
		view.ios.showsVerticalScrollIndicator = false;
	} else {
		view.android.setVerticalScrollBarEnabled(false);
	}
}
