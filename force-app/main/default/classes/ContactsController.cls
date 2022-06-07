public with sharing class ContactsController {
    
    @AuraEnabled
    public static List<Contact> getContacts(String name){
        try {

            String nameMatch = '%' + name + '%';
            return [Select Id, FirstName, LastName, Birthdate FROM Contact WHERE Name Like :nameMatch];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
