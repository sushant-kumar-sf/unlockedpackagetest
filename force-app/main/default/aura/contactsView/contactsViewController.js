({
    doInit: function(component, event, helper) {
        let columns = [
            {label: "First Name", fieldName: "FirstName", type: "text"},
            {label: "Last Name", fieldName: "LastName", type: "text"},
            {label: "Birthdate", fieldName: "Birthdate", type: "date"}
        ]

        component.set("v.columns", columns);
        helper.searchContacts(component);

    },

    handleSearch: function(component, event, helper) {
        helper.searchContacts(component);
    }
})
