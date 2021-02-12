import { Frame } from "@nativescript/core";
/** ActionBar Utilities */
/**
 * Programmatically hide the back button from the ActionBar
 */
export function actionBarHideBackButton() {
	if (Frame.topmost().ios) {
		Frame.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(
			true,
			false
		);
	}
}
