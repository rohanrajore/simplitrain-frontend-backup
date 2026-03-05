var faker = require('faker');
describe('Basic flows', () => {
    it('signup use case', () => {
        browser.url('https://localhost:3000/login')
        expect(browser).toHaveTitle('SimpliTrain');

        var firstName = faker.name.firstName();
        console.log(firstName);
        var lastName = faker.name.lastName();
        console.log(lastName);
        var email = faker.internet.email();
        var phone = Math.floor(Math.random() * 9000000000) + 1000000000;


        browser.react$("SignupStep1Form").$("#firstName").setValue(firstName);
        browser.react$("SignupStep1Form").$("#lastName").setValue(lastName);
        browser.react$("SignupStep1Form").$("#email").setValue(email);
        browser.react$("SignupStep1Form").$("#mobile").setValue(phone);
        browser.react$("SignupStep1Form").$("#password").setValue("Abcd1234#");
        browser.react$("SignupStep1Form").$("#confirmPassword").setValue("Abcd1234#");
        browser.react$("SignupStep1Form").$("#signupButton").click();

        browser.waitUntil(() => {
                browser.getUrl().contains("learner") || browser.getUrl().contains("instructor")
            },
            {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            });


    });

    /*    it('Login with credentials', () => {
            browser.url('https://localhost:3000/login')
            expect(browser).toHaveTitle('SimpliTrain');

            let email = $('#email');
            let isExisting = email.isExisting()
            console.log("isExisting: " + isExisting);

            email.setValue("sriavr@gmail.com");
            expect(email.getValue()).toBe("sriavr@gmail.com");

            $("#password").setValue("Abcd1234#");
            $("#loginButton").click();
            browser.waitUntil(
                () => browser.getUrl().contains("learner") || browser.getUrl().contains("instructor"),
                {
                    timeout: 5000,
                    timeoutMsg: 'expected text to be different after 5s'
                }
            );



            // browser.setValue("", "sriavr@gmail.com");
            // browser.setValue("#password", "Abcd1234#");
            //
            // const loginButton = $("#loginButton");
            // loginButton.click();

        })*/
})
