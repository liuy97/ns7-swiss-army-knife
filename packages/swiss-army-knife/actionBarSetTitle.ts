import { Frame } from "@nativescript/core";
/** ActionBar Utilities */
/**
 * Programmatically set title
 */
export function actionBarSetTitle(title: string) {
	const actionBar = Frame.topmost().currentPage.actionBar;
	actionBar.title = title;
}
