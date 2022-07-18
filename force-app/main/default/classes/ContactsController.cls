public with sharing class ContactsController {
    
    @AuraEnabled
    public static List<Contact> getContacts(String name){
        System.debug('Hello World Sushant');
    	String nameMatch = '%' + name + '%';
        return [Select Id, FirstName, LastName, Birthdate FROM Contact WHERE Name Like :nameMatch];   
       
    }
}