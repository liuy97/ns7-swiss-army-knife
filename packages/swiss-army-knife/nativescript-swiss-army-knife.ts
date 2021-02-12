import {Application as app} from "@nativescript/core";
import { Color } from "@nativescript/core";
import { isAndroid } from "@nativescript/core";
import { ActionItem } from "@nativescript/core";
import { View } from "@nativescript/core";
import { LayoutBase } from "@nativescript/core";
import { ListView } from "@nativescript/core";
import { ScrollView } from "@nativescript/core";
import {
	getListViewVerticalOffset,
	disableScrollBounce,
	removeHorizontalScrollBars,
	removeVerticalScrollBars,
	pluckChildViewsFromLayout,
	getScreenHeight,
	actionBarSetTitle,
	actionBarAddButton,
	actionBarClearButtons,
	setAndroidStatusBarTranslucentFlag,
	resetAndroidStatusBarTranslucentFlag,
	setAndroidNavBarTranslucentFlag,
	resetAndroidNavBarTranslucentFlag,
	setAndroidStatusBarColor,
	setAndroidNavBarColor,
	actionBarHideBackButton,
	actionBarSetStatusBarStyle,
	dismissSoftKeyboard
} from "./index";

export interface IScreenHeight {
	portrait: number;
	landscape: number;
	androidStatusBar: number;
	androidNavBar: number;
}

export class SwissArmyKnife {
	get android(): any {
		return;
	}

	get ios(): any {
		return;
	}

	/**
	 * Returns the scroll position/vertical offset relative to the visibile contenten of the listView on Android and iOS
	 */
	static getListViewVerticalOffset(view: ListView): number {
		return getListViewVerticalOffset(view);
	}

	/**
	 * Disables bounce/overscroll for scrollViews or ListViews on Android and iOS
	 */
	static disableScrollBounce(view: ScrollView | ListView): void {
		disableScrollBounce(view);
	}

	/**
	 * Hides horizontal scrollbars for scrollViews or ListViews on Android and iOS
	 */
	static removeHorizontalScrollBars(view: ScrollView | ListView): void {
		removeHorizontalScrollBars(view);
	}

	/**
	 * Hides vertical scrollbars for scrollViews or ListViews on Android and iOS
	 */
	static removeVerticalScrollBars(view: ScrollView | ListView): void {
		removeVerticalScrollBars(view);
	}

	/**
	 * Takes a layout and removes all the child Views and returns them in an Array<View>
	 */
	static pluckChildViewsFromLayout(parent: LayoutBase): Array<View> {
		return pluckChildViewsFromLayout(parent);
	}

	/**
	 * returns an IScreenHeight ojecjt with the protrait demension, landscape deminsions, and android status bar height
	 */
	static getScreenHeight(): IScreenHeight {
		return getScreenHeight();
	}

	/** ActionBar Utilities */
	/**
	 * Programmatically set title
	 */
	static actionBarSetTitle(title: string) {
		actionBarSetTitle(title);
	}

	/**
	 * Programmatically add button to the ActionBar
	 * NOTE: This MUST be called BEFORE actionBarSetTitle on start
	 */
	static actionBarAddButton(button: ActionItem) {
		actionBarAddButton(button);
	}

	/**
	 * Programmatically remove all buttons from the ActionBar
	 */
	static actionBarClearButtons() {
		actionBarClearButtons();
	}
	/**
	 * Sets the Android statusbar to translucent
	 * Android API >= 19 only
	 */
	static setAndroidStatusBarTranslucentFlag(): void {
		setAndroidStatusBarTranslucentFlag();
	}

	/**
	 * Clears the Android Translucent StatusBar flag
	 */
	static resetAndroidStatusBarTranslucentFlag(): void {
		resetAndroidStatusBarTranslucentFlag();
	}

	/**
	 * Sets the Android navigation bar to translucent
	 * Android API >= 19 only
	 */
	static setAndroidNavBarTranslucentFlag(): void {
		setAndroidNavBarTranslucentFlag();
	}

	/**
	 * Clears the Android Translucent NavigationBar flag
	 */
	static resetAndroidNavBarTranslucentFlag(): void {
		resetAndroidNavBarTranslucentFlag();
	}

	/**
	 * Sets the Android statusbar color, accepts either a string color or a Color object
	 * Android API >= 21 only
	 */
	static setAndroidStatusBarColor(color: string | Color): void {
		setAndroidStatusBarColor(color);
	}

	/**
	 * Sets the Android NavigationBar color, accepts either a string color or a Color object
	 * Android API >= 21 only
	 */
	static setAndroidNavBarColor(color: string | Color): void {
		setAndroidNavBarColor(color);
	}

	/** ActionBar Utilities */
	/**
	 * Programmatically hide the back button from the ActionBar
	 */
	static actionBarHideBackButton() {
		actionBarHideBackButton();
	}

	/**
	 * Programmatically remove all buttons from the ActionBar
	 */
	static actionBarSetStatusBarStyle(style: number) {
		actionBarSetStatusBarStyle(style);
	}

	static dismissSoftKeyboard() {
		dismissSoftKeyboard();
	}

	private static _getStatusBarHeight(): number {
		if (isAndroid) {
			let result = 0;
			const resourceId = this._androidContext
				.getResources()
				.getIdentifier("status_bar_height", "dimen", "android");
			if (resourceId > 0) {
				result = this._androidContext
					.getResources()
					.getDimensionPixelSize(resourceId);
				result =
					result /
					this._androidContext.getResources().getDisplayMetrics().density;
			}
			return result;
		} else {
			return 0;
		}
	}

	private static _getBarColor(color: string | Color): Color {
		let barColor: Color;

		if (color instanceof Color === false) {
			barColor = new Color(<string>color);
		} else {
			barColor = <Color>color;
		}
		return barColor;
	}

	private static _getNavBarHeight(): number {
		if (isAndroid) {
			let result = 0;
			const resourceId = this._androidContext
				.getResources()
				.getIdentifier("navigation_bar_height", "dimen", "android");
			if (resourceId > 0) {
				result = this._androidContext
					.getResources()
					.getDimensionPixelSize(resourceId);
				result =
					result /
					this._androidContext.getResources().getDisplayMetrics().density;
			}
			return result;
		} else {
			return 0;
		}
	}

	private static get _androidContext() {
		return app.android.context;
	}

	private static get _androidActivity() {
		return app.android.foregroundActivity || app.android.startActivity;
	}
}
