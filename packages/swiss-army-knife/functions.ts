import {Application as app} from "@nativescript/core";
import { Color } from "@nativescript/core";
import { isAndroid } from "@nativescript/core";

export function _getStatusBarHeight(): number {
	if (isAndroid) {
		let result = 0;
		const resourceId = _androidContext()
			.getResources()
			.getIdentifier("status_bar_height", "dimen", "android");
		if (resourceId > 0) {
			result = _androidContext()
				.getResources()
				.getDimensionPixelSize(resourceId);
			result =
				result /
				_androidContext()
					.getResources()
					.getDisplayMetrics().density;
		}
		return result;
	} else {
		return 0;
	}
}

export function _getBarColor(color: string | Color): Color {
	let barColor: Color;

	if (color instanceof Color === false) {
		barColor = new Color(<string>color);
	} else {
		barColor = <Color>color;
	}
	return barColor;
}

export function _getNavBarHeight(): number {
	if (isAndroid) {
		let result = 0;
		const resourceId = _androidContext()
			.getResources()
			.getIdentifier("navigation_bar_height", "dimen", "android");
		if (resourceId > 0) {
			result = _androidContext()
				.getResources()
				.getDimensionPixelSize(resourceId);
			result =
				result /
				_androidContext()
					.getResources()
					.getDisplayMetrics().density;
		}
		return result;
	} else {
		return 0;
	}
}

export function _androidContext() {
	return app.android.context;
}

export function _androidActivity() {
	return app.android.foregroundActivity || app.android.startActivity;
}
