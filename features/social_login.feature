Feature: Social login
  Everybody should be able to sign in to our App with GitHub, Google and Facebook

  Scenario Outline: Sign in to our App with GitHub
    Given the login method preferred by the me is GitHub
    When I click the Sign in with GitHub button and sign in
    Then the App should tell me that I'm signed in as my GitHub username

  Scenario Outline: Sign in to our App with Google
    Given the login method preferred by the me is Google
    When I click the Sign in with Google button and sign in
    Then the App should tell me that I'm signed in as my Google username

  Scenario Outline: Sign in to our App with Facebook
    Given the login method preferred by the me is Facebook
    When I click the Sign in with Facebook button and sign in
    Then the App should tell me that I'm signed in as my Facebook username