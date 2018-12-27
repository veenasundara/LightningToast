# LightningAlert

Component to display toasts on quick action modal 

When force:showToast or lightning:notificationsLibrary are used to display toasts from a ligthning component that is used as a quick action, the toasts are displayed on the main page behind the quick action modal.

This component can be used to display toasts on quick action modals

## Usage

1. Add the following code to your quick action lightning component at the top

```
<c:CmpToast aura:id="toast" />
```

Optional parameters are:
* name 
* mode - pester,sticky,dismissible works just like force:showToast
dismissible: Remains visble until you press the close button or 3 seconds have elapsed, whichever 				comes first. (This is the default)
pester: Remains visible for 3 seconds. No close button is displayed.
sticky: Remains visible until you press the close buttons.

2. add the following code display an error toast:

```javascript
component.find("toast").showError('Error Message');
```

3. add the following code to your lightning javascript to display an error toast:

```javascript
component.find("toast").showSuccess('Success Message');
```
