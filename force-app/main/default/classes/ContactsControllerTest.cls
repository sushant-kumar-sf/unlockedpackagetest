@IsTest
private class ContactsControllerTest {
   
    @IsTest 
    private static void getContacts() {
        // Setup
        INSERT new Contact(FirstName = 'Test', LastName = 'Test');

        // Exercise
        List<Contact> contacts = ContactsController.getContacts('Test');

        // Verify
        System.assertEquals(contacts.size(), 1);
    }
}
