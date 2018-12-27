({
    showToast : function(component, event, helper) {

        var eventParams = event.getParam('arguments');
        if (eventParams)
        {
            if(!$A.util.isEmpty(eventParams.theme)) component.set("v.theme", eventParams.theme);
            if(!$A.util.isEmpty(eventParams.message)) component.set("v.message", eventParams.message);
            if(!$A.util.isEmpty(eventParams.mode)) component.set("v.mode", eventParams.mode);
        }

        component.set("v.isVisible", true);

        var mode = component.get("v.mode");
        if(mode != 'sticky')
        {
            // close after 3 seconds
            window.setTimeout(
                $A.getCallback(function ()
                               {
                                   component.set("v.isVisible", false);
                               }), 3000
            );
        }
    },

    close : function(component, event, helper) {
        component.set("v.isVisible", false);
    },

})