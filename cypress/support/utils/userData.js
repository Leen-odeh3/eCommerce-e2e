// userData.js
import { faker } from "@faker-js/faker";

export const generateUserData= () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const fullName = firstName + " " + lastName;
  const confirmationFullName = fullName;
  const randomEmail = faker.internet.email();
  const confirmationEmail = randomEmail;
  const randomPassword = faker.internet.password();
  const loginEmail = "leenodeh287@gmail.com"; 
  const birthDay = faker.helpers.rangeToNumber({ min: 1, max: 30 });
  const birthMonth = faker.date.month();
  const birthYear = "2001";
  const companyName = faker.company.name();
  const address = faker.location.streetAddress();
  const myCountryArray = [
    "India",
    "United States",
    "Canada",
    "Australia",
    "Israel",
    "New Zealand",
    "Singapore",
  ];
  const country =
    myCountryArray[Math.floor(Math.random() * myCountryArray.length)];
  const randomState = faker.location.state();
  const randomCity = faker.location.city();
  const randomZipCode = faker.location.zipCode();
  const randomPhoneNumber = faker.phone.number();
  const invalidEmail = "leenodeh287"; 

  return {
    firstName,
    lastName,
    fullName,
    confirmationFullName,
    randomEmail,
    confirmationEmail,
    randomPassword,
    loginEmail,
    birthDay,
    birthMonth,
    birthYear,
    companyName,
    address,
    country,
    randomState,
    randomCity,
    randomZipCode,
    randomPhoneNumber,
    invalidEmail,
  };
};
