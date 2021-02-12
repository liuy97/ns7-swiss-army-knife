import { isAndroid, isIOS } from "@nativescript/core";
import { ListView } from "@nativescript/core";
import { ScrollView } from "@nativescript/core";
export function disableScrollBounce(view: ScrollView | ListView): void {
	// no ui bounce. causes problems
	if (isIOS) {
		view.ios.bounces = false;
	} else if (isAndroid && view.android != null) {
		view.android.setOverScrollMode(2);
	}
}
