({
    hlpShowToast: function (component, event, theme)
    {
        var eventParams = event.getParam('arguments');
        if (eventParams)
        {
            component.set("v.theme", theme);
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
})