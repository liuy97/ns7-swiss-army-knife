import { Frame } from "@nativescript/core";
/**
 * Programmatically remove all buttons from the ActionBar
 */
export function actionBarSetStatusBarStyle(style: number) {
	if (Frame.topmost().ios) {
		const navigationBar = Frame.topmost().ios.controller.navigationBar;
		// 0: default
		// 1: light
		navigationBar.barStyle = style;
	}
}
