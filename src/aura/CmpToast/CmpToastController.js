({
    showError : function(component, event, helper) {

        helper.hlpShowToast(component, event, 'error')
    },

    showInfo : function(component, event, helper) {

        helper.hlpShowToast(component, event, 'info')
    },

    showSuccess : function(component, event, helper) {

        helper.hlpShowToast(component, event, 'success')
    },

    showWarning : function(component, event, helper) {

        helper.hlpShowToast(component, event, 'warning')
    },

    close : function(component, event, helper) {
        component.set("v.isVisible", false);
    },

})