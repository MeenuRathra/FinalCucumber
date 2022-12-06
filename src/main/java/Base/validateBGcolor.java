package Base;

import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import junit.framework.Assert;

public class validateBGcolor<SoftAssertion> {
	

WebDriver driver;

	@FindBy(how = How.CSS, using = "button[type='button']")
	List<WebElement> BackgroundButton;
	@FindBy(how = How.TAG_NAME, using = "Body")
	WebElement bodycolor;

	public validateBGcolor(WebDriver driver) {

		this.driver = driver;

	}

	public <SoftAssert> void validateBackGroundcolor(String expectedBGcolor) {

		String backgroundcolor = driver.findElement(By.tagName("Body")).getAttribute("style");
		
		try {
			Thread.sleep(5000);
//			Assert.assertEquals(expectedBGcolor, backgroundcolor);
//			System.out.println("Has the color changed: " + backgroundcolor.equals(expectedBGcolor));
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}
		if(expectedBGcolor.equalsIgnoreCase(backgroundcolor)) {
			System.out.println("matches with BGcolor");}
		else{System.out.println("not matching");}

	}

}
