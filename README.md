# LightningAlert

Component to display toasts on quick action modal 

When force:showToast or lightning:notificationsLibrary are used to display toasts from a ligthning component that is used as a quick action, the toasts are displayed on the main page behind the quick action modal.

This component can be used to display toasts on quick action modals

## Usage

1. Add the following code to your quick action lightning component at the top

```
<c:CmpToast aura:id="toast" />
```

```
Optional parameters are:
* name 
* mode - pester,sticky,dismissible works just like force:showToast
	dismissible: Remains visble until you press the close button or 3 seconds have elapsed, whichever 
			comes first. (This is the default)
	pester: Remains visible for 3 seconds. No close button is displayed.
	sticky: Remains visible until you press the close buttons.

	If it is set here, it will be applied ao all calls to the methods described below unless it is
	overridden using the method's mode parameter
```

```
The component has the following methods
* showError
* showSuccess
* showInfo
* showWarning

All the methods take 2 parameters
* message - a String that will be displayed on the toast
* mode (sticky, pester, dismissible) - this is optional. default will be dismissible
```

Examples:
* To display an error toast:

```javascript
component.find("toast").showError('Error Message');
```

* To display a success toast:

```javascript
component.find("toast").showSuccess('Success Message');
```

## Install using the button below:

<a href="https://githubsfdeploy.herokuapp.com?owner=veenasundara&repo=LightningToast">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>
