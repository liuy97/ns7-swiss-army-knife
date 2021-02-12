# @nativescript/swiss-army-knife

support Nativescript 7

```javascript
ns plugin add @nativescript/swiss-army-knife
```

## Usage
### Common Functions
getListViewVerticalOffset Returns the scroll position/vertical offset relative to the visibile contenten of the listView on Android and iOS

disableScrollBounce Disables bounce/overscroll for a ScrollView or ListView on Android and iOS.

removeHorizontalScrollBars Hides horizontal scrollbars for scrollViews or ListViews on Android and iOS

removeVerticalScrollBars Hides vertical scrollbars for scrollViews or ListViews on Android and iOS

pluckChildViewsFromLayout accepts any layout and removes all it's child views and returns them in an array.

getScreenHeight returns an object of type IScreenHeight with the properties portrait and landscape dimensions. IScreenHeight also has the properties androidStatusBar and androidNavBar which are android specific properties that will return the Nav bar and Status bar heights as well. if accessed on iOS they will have a value of 0. These can come in handy since the portrait and landscape dimensions do not take these into account.

dismissSoftKeyboard Dismiss the soft keyboard.

ActionBar Utilities
actionBarSetTitle Programmatically set title on ActionBar

actionBarAddButton Programmatically add button to the ActionBar

actionBarClearButtons Programmatically remove all buttons from the ActionBar

Contributor
https://github.com/JoshDSommer/nativescript-swiss-army-knife

## License

Apache License Version 2.0
