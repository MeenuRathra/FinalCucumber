package Base;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class validationofButton {

	WebDriver driver;
	// List<WebElement>
	// validationbutton=driver.findElements(By.cssSelector("button[type='button']"));
	@FindBy(how = How.CSS, using = "button[type='button']")
	List<WebElement> validationbutton;

	public validationofButton(WebDriver driver) {

		this.driver = driver;
	}

	public void buttonvalidation(String expected) {
		for (WebElement myButton : validationbutton) {
			if (myButton.getText().equals(expected)) {
				System.out.println("Button with text :" + expected + "exists");

			}
		}
	}

}
