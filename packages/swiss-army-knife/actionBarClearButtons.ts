import { Frame } from "@nativescript/core";
/**
 * Programmatically remove all buttons from the ActionBar
 */
export function actionBarClearButtons() {
	const actionBar = Frame.topmost().currentPage.actionBar;
	const actionItems = actionBar.actionItems.getItems();
	actionItems.forEach(item => {
		actionBar.actionItems.removeItem(item);
	});
}
