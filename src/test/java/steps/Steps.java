package steps;

import org.openqa.selenium.support.PageFactory;
import Base.ClickButton;
import Base.Init;
import Base.validateBGcolor;
import Base.validationofButton;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps extends Init {
	
	validationofButton validatebutton;
	validateBGcolor validatebgColor;
	ClickButton click;

	String expected = "Set SkyBlue Background";

	@Before
	public void setup() {

		init();
		validatebutton = PageFactory.initElements(driver, validationofButton.class);
		validatebgColor = PageFactory.initElements(driver, validateBGcolor.class);
		click = PageFactory.initElements(driver, ClickButton.class);

	}

	@Given("^\"([^\"]*)\" button exists$")
	public void button_exists(String expected) {

		validatebutton.buttonvalidation(expected);

	}

	@When("^I click on the \"([^\"]*)\"$")
	public void i_click_on_the(String button) {
		if (button.equalsIgnoreCase("SkyBlue Backgroundbutton")) {
			click.clickblueButton();
		} else if (button.equalsIgnoreCase("Set White Background")) {
			click.clickwhiteButton();

		}

	}

	@Then("^the background color will change to \"([^\"]*)\"$")
	public void the_background_color_will_change_to(String expectedgBGcolor) {

		validatebgColor.validateBackGroundcolor(expectedgBGcolor);

	}
	
	@After
	public void teardwn() {
		tearDown();
		
	}
}