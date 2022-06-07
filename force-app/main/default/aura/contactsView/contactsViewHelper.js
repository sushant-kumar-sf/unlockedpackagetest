({
    searchContacts : function(component) {
        let action = component.get("c.getContacts");
        let name = component.get("v.searchText");
        
        action.setParams({name});

        action.setCallback(this, (response) => {
            if(response.getState() === "SUCCESS") {
                
                let returnValue = response.getReturnValue();
                component.set("v.data", returnValue);

            }
            else {
                console.log("Some error occured");
            }
        });

        $A.enqueueAction(action);
    }
})
