
@Scenario 
Feature: skyblue Background Change
Scenario: User should be able to change the backgroundcolour
 Given "Set SkyWhite Background" button exists
 When  I click on the "Set White Backgroundbutton"
 Then the background color will change to "background-color: white;"