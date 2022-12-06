package Base;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ClickButton {

	WebDriver driver;
	@FindBy(how = How.CSS, using = "button:nth-of-type(1)")
	WebElement clickbluebutton;
	@FindBy(how = How.CSS, using = "button:nth-of-type(2)")
	WebElement clickwhitebutton;

	public ClickButton(WebDriver driver) {
		this.driver = driver;

	}

	public void clickblueButton() {

		clickbluebutton.click();

	}

	public void clickwhiteButton() {

		clickwhitebutton.click();

	}

}
