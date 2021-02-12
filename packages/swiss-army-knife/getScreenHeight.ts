import { Screen } from "@nativescript/core";
import { IScreenHeight } from "./nativescript-swiss-army-knife";
import { _getNavBarHeight, _getStatusBarHeight } from "./functions";
/**
 * returns an IScreenHeight ojecjt with the protrait demension, landscape deminsions, and android status bar height
 */
export function getScreenHeight(): IScreenHeight {
	const height1 = Screen.mainScreen.heightDIPs;
	const height2 = Screen.mainScreen.widthDIPs;
	const statusbar = _getStatusBarHeight();
	const navbar = _getNavBarHeight();
	return {
		portrait: height1,
		landscape: height2,
		androidStatusBar: statusbar,
		androidNavBar: navbar
	};
}
