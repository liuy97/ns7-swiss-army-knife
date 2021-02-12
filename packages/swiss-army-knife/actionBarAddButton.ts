import { ActionItem } from "@nativescript/core";
import { Frame } from "@nativescript/core";
/**
 * Programmatically add button to the ActionBar
 * NOTE: This MUST be called BEFORE actionBarSetTitle on start
 */
export function actionBarAddButton(button: ActionItem) {
	Frame.topmost().currentPage.actionBar.actionItems.addItem(button);
}
