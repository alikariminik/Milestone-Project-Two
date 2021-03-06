# FlyMeTo README
Here is a link to the website [FlyMeTo](https://8000-alikarimini-milestonepr-wq06ezr4i1m.ws-eu46.gitpod.io/index.html)

## What is this ReadME for?
This is the ReadMe for the website for the fictional web application called FlyMeTo. FlyMeTo is a web-based app built using HTML, CSS and JavaScript. Its target audience are those who are looking for a potential holiday destination. Through the asking of some questions, the application will suggest a potential holiday location based off of the answers users give. 

![Mockup](assets/markup/mockup-flymeto.PNG) 

## Table of Contents
* [User Experience Design (UX)](#UX)
    * [The Strategy Plane](#The-Strategy-Plane)
        * [Site Goals](#Site-Goals)
        * [User Stories](#User-Stories)
    * [The Scope Plane](#The-Scope-Plane)
    * [The Structure Plane](#The-Structure-Plane)
    * [The Skeleton Plane](#The-Skeleton-Plane)
        * [Wireframes](#Wireframe-mockups)
    * [The Surface Plane](#The-Surface-Plane)
        * [Design](#design)
            * [Colour-Scheme](#colour-scheme)
            * [Imagery](#imagery)
            * [Typography](#typography)
    * [Features](#features)
        * [UnsplashAPI](#unsplash-api)
        * [TomTomAPI](#tomtom-api)
        * [Planned / Scrapped Features](#planned--scrapped-features)
    * [Testing](#testing)
      * [Validator Testing](#validator-testing)
      * [Responsiveness](#responsiveness)
      * [Known Bugs](#known-bugs)
    * [Deployment](#deployment)
    * [Credits](#credits)
        * [Resources](#resources)
        * [Code](#code)
        * [Media](#media)

## UX

### The Strategy Plane
* FlyMeTo is a creative way of helping users find their next potential holiday destination. By asking the user questions, with the aid of emotion-provoking images, the app suggests a holiday location bespoke to the user’s answers.

#### Site Goals
* To provide users with a fun and creative way of identifying their next holiday destination.
* To ensure that the app is easy to use and quick in suggesting potential locations.
* To provide users with an option to easily restart the site.
* To ensure that the site is fully accessible on desktop and touch screen devices.
* To ensure that the app is fully compliant with keyboard commands and screen readers.

#### User Stories
* As a user, I want a fun and creative way of finding my next holiday destination.
* As a user, I want to be able to easily utilise the site and get a holiday destination suggestion fast.
* As a user I want to be able to use this site with my keyboard
* As a user I want to be able to use a screen reader to help use this site.

### The Scope Plane
Features Planned
* A single page which includes all the sites features. 
* Responsive Design allowing the user to correctly operate the site across a range of devices the user could potentially use such as Desktop, Laptop, Tablet and Mobile's.
* The option to run the questions again from the start.
* The option to re-use the user’s selected answers to avoid time wasted in the instance the user wants a different location suggested but would not want to answer the questions differently.
* The site should be fully accessible for keyboard users
* The site should be fully accessible for screen reader users

### The Structure Plane
User Story:

> As a user, I want a fun and creative way of finding my next holiday destination.

Acceptance Criteria:
* It should be clear that it is a site designed to identify a holiday destination.

Implementation:
* The website name, colour scheme font choice and introductory text all convey to the user that this is a different and fun way of identifying the user's next holiday destination. The introductory text explains the purpose of the site in a clear and concise way and the focal point of the initial page is the "Find my dream holiday!" button.

User Story:

> As a user, I want to be able to easily utilise the site and get a holiday destination suggestion fast.

Acceptance Criteria:
* The start to the end of the application should be easily achieved in just a few clicks. 

Implementation:
* The end screen which displays a potential holiday destination can be achieved through just 5 clicks. The site is responsive to give visual feedback when an option can be clicked - either through the use of the cursor icon changing to a pointer for the buttons and clickable images as well as the buttons changing colours on hover. Home button allows for an easy restart of the application.

User Story:

> As a user I want to be able to use this site with my keyboard

Acceptance Criteria:
* It should be entirely possible for an individual utilising a keyboard only to be able to click "Find my dream holiday!" button, home button and select on option a or option b image.

Implementation:
* The user will be able to navigate the site using only a keyboard. All buttons and images can be selected utilising both mouse clicks and "keydown" enter.

User Story:

> As a user I want to be able to use a screen reader to help use this site.

Acceptance Criteria:
* It should be entirely possible for an individual utilising a screen reader to easily utilise the site.

Implementation:
* The user will be able to navigate the site utilising a screen reader. 


### The Skeleton Plane
#### Wireframe Mock-ups 
I utilised Balsamiq to produce my wireframes of how the app would appear across different devices. The app was intended to be contained within one page, however as the app required different content to be loaded at different times, the wireframes display a combination of different views of the site, with the introductory view and images seen in one and then the final page view adjacent to it.

Mobile Device Wireframes 
 
 ![Mobile Device Wireframes](assets/wireframes/wireframe-mobile.PNG)

Tablet Device Wireframes

 ![Tablet Device Wireframes](assets/wireframes/wireframe-tablet.PNG)

Desktop Device Wireframes
 ![Desktop Device Wireframes](assets/wireframes/wireframe-desktop.PNG)

### The Surface Plane

#### Design 
##### Colour Scheme
I used a colour scheme which conveyed the feelings of 'Summer' (Yellow = Sun, Orange = Sand, Blue = Ocean), which is arguably the most the popular time of year to go on holiday. I used the site Coolors to devise this colour palette. The exact colour palette can be viewed via the link below which directs to the site Coolors - 

[Coolors](https://coolors.co/ffe285-f7703b-355070-59a5b1-d9ebec)

##### Typography
I used the  'Lobstr' font for the Logo with 'Cursive' as the fallback font in case for any reason the font isn't being imported into the site correctly. I found 'Lobstr' through Google Fonts and I felt as though this font; when displaying the name of the website "Fly Me To... provided a clear and attractive looking logo instead of spending time designing a genuine logo.

For the introductory text, I used the 'Merriweather Sans' font in italics with 'Sans-Serif' as the fallback font. I found that 'Merriweather Sans' was a quite subtle font which was very legible and easy to read multiple lines of clearly without being distracting. 'Merriweather Sans' was used again for the "Home" button for this same reason and I found that it makes sense for this font to represent the navigational link to the home page which had the introductory text in 'Merriweather Sans'.  

To ensure my app is consistent in appearance, 'Lobstr' is used again for the style of the questions asked. This in conjunction with the ever-present 'Merriweather Sans' Fly Me To logo allows the user to connect the logo and the subsequent questions together so that the page reads as follows: "Fly Me to 'Beaches or Mountains'?, "Fly Me to 'Adventures or Relaxation'?" etc. 

Finally, for the exact same reasoning as before, 'Lobstr' was used again for the style of the suggested destination location e.g. "Fly Me to Paris, France". 

[Google Fonts](https://fonts.google.com/)

##### Imagery
The use of images is fundamental to the design of this site. I envisioned early on during in the development process that I wanted the questions asked to the user to be supported by a relevant image so it was very useful of my CodeInstitute tutor to recommend me to use the Unsplash API. After reading the documentation and registering with the site to obtain my own secret key, I got to work with implementing the API into my application. 

Originally, I had set it so that a random image was requested each time the application is utilised. This is so that users were provided with a new image of "Beaches" or "Mountains" each time they answered the questions. However, during development I found that utilising the random image request was too unreliable, as sometimes the images fetched were completely irrelevant to the context of the app' questions. For example, I found that when the beaches image was requested, sometimes an image of an Eagle would be fetched. This same issue was present for all the answer options and in order to rectify this, I changed my code so that the API was always requesting the same image on each run through. Whilst this was not ideal, as I wanted the application to feel fresh with each use, I felt as though using the same image achieved better results than running the risk of getting a completely irrelevant image. 

## Features
### Unsplash API
As mentioned previously, the Unsplash API was suggested to me by my CodeInstitute tutor after I outlined what I had envisioned for this project. I looked into the documentation of the Unsplash API and it seemed to be exactly what I was needing for my planned projects. As previously mentioned, when using the get random image request, inconsistent results were achieved and even after tweaking the search query to be more specific, unrelated images were still returned which I viewed to be too problematic to retain in this application so I opted for the requesting the same image for each answer option. 

Perhaps in the future, if I had more time, I would explore other similar APIs (such as Pexels API) and test to see whether a random image request could have achieved what I was hoping for originally with the Unsplash API.

[UnsplashAPI](https://unsplash.com/documentation)

### TomTom API
After searching the web for travel and tourism APIs which had the functionality to return a place in the world based of certain factors, I came across the TomTom API which, after reading the documentation, seemed like a very good fit for what I wanted the API to achieve. My goal for this API was for the user to answer the questions with their preference i.e. Beaches or Mountains and then a request would be sent to the TomTom API which would fetch a result in way of a place in the world which met most if not all the chosen preferences. 

However, after some initial tests, it was made clear to me that there were indeed some drawbacks to this API which would mean that getting the exact use out of it that I wanted would not be so simple. 

Firstly, given that I wanted the API to return a destination based of certain preferences meant I needed to read through the API's assigned ID categories. This very long list of different points of interests can be viewed in Assets/TomTomAPI/TomTomIDCategories. I read through all of these categories and took a note of the relevant ID for those which seemed like they fitted the answer option categories. For example, for the option "Beaches", I noted the IDs "9357" and "9937002" which correspond to Beach and Beach Clubs, respectively, around the world. Therefore, if a user selects Beach as an option, these two IDs will be included in the request to the API to return a location in the world. Full details of the categories and their IDs can be viewed within the Object named OPTIONS on rows 7 - 59 in Options.JS.

An issue I came across during initial testing was that, when sending off the request to the Tom Tom API, you could only include 10 IDs within each request. This was disappointing as I had hoped for each preference to be considered in each request. However, as a work around to this and in order to keep this project idea alive, I opted to randomly select 10 IDs, that would be logged to the Answers Array after each User's option was selected, and send those off to the API. The downside to this was that some of the user's preferences would not have been considered as they won't have been selected. 

Additionally, another downside to the API was that there was no way that I could find for the API to return a destination / location which met all of the IDs requested. As far as I am aware, the API returns a destination which matches at least one of the IDs. This, again, was disappointing. However, I felt as though, for the purpose of this project, this was acceptable as long as the API requests were returning a different destination which at least met some of the individual's holiday criteria. 

An additional problem I came across when testing this API was that the results were always returned in alphabetical order of the country name and further to this, only 100 results can be returned on each request. This meant that during initial testing, I would often find that my application was suggesting I go to Andora or United Arab Emirates due to the two countries Country Codes beginning with "A". This was problematic but my solution to ensuring that the application returned a different country and place was to add country code parameters to the request. In order to not discriminate against any country, I programmed the request to utilise 10 random country codes on each request. A full list of the country codes can be found in [data.js]scripts/javascript/data.js. Although this was not ideal, I did think it was an appropriate work around and it meant that a user was always bound to be suggested a holiday destination based of at least one of their preferences. 

All in all, the Tom Tom API was great to work with despite its limitations and called on me to be creative and adaptive with my design in order to get the most out of it.

[TomTomAPI](https://developer.tomtom.com/search-api/documentation/product-information/introduction)

[TomTomAPI|PlacebyID](https://developer.tomtom.com/search-api/documentation/place-by-id-service/place-by-id#request-parameters)

### Planned / Scrapped Features
I had further ideas for additional features for this application but, due to different reasons, these were either not pursued or scrapped during implementation and testing.

The first of which was my plans to implement an additional API which was capable of displaying current average flight prices to the suggested destination. This would have shown on the page alongside where the suggested location is displayed. I looked at several travel APIs which appeared to support this feature. The first of which was the SkyScanner API. Unfortunately, this was not free and you need to be an affiliate of Skyscanner to utilise the API. The next was Google Flights, but unfortunately this was shut down in 2018. I also looked into Kayak, TripAdvisor and Expedia APIs but again these were either very complicated or locked behind paywalls. After spending a significant period of time on this research, I abandoned this feature. 

In addition to an additional API, I also wanted to incorporate a "Previous Question Button" which would take the user back to the previous question asked and also remove the user's answer for that question from the Answers array. However, after initial set up, the answers were not being removed from the Answers array and there was an issue which would result in the "Previous Question Button" disappearing and not re-appearing if the user went back to the initial question and then moved to the second question. After consultation with my CodeInstitute Tutor, it was agreed that due to time constraints, this feature would be scrapped as it was not essential to the overall functionality of the project. 

Finally, it would have been nice to have included a button which immediately returned another random destination after one had already been suggested in order to avoid the user having to re-complete the questionnaire. If I were to expand on this project in the future, this and the other removed / scrapped features alluded to above would be on my list of additions. 

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Testing 
During testing of my site, I incorporated both a Behaviour Driven Development (BDD) and Test Driven Development (TDD). Through my continuous BDD testing, I was able to identify issues with my site such as the UnsplashAPI "get random photo" problem as well as the problem with the planned "Previous Question" button that I have already alluded to above in this README. A further issue I have encountered through BDD testing, is that sometimes if the User clicks through the options at very quick pace, the request to the TomTomAPI fails to execute correctly which results in an infinite loading screen icon. Details of this are covered below under Known Bugs.

Evidence of TDD can be found [here.](scripts/tests/). The majority of my tests involved DOM manipulation and these actions are tested and evidenced in these files. Any errors identified by the tests were amended and then the tests repeated to achieve passing results.


### Validator Testing
* HTML
  * No errors were returned when passing through the official W3C Validator. [W3C Validator](https://validator.w3.org/nu/)

* CSS
  * No errors were returned when passing through the official Jigsaw Validator. [Jigsaw Validator](https://jigsaw.w3.org/css-validator/validator)

* JSlint
  * No major errors were returned when passing through the official JSlint Validator. [JSlint Validator](https://www.jslint.com/)

### Responsiveness

Vigorous testing was conducted throughout the development process to ensure that the site maintained responsiveness as more elements were added on. Using developer tools and adjusting screen dimensions, I have checked to ensure that all content displays clearly over a variety  of screen sizes - primarily on the Mobile, Tablet and Monitors.


### Known Bugs
- There is one bug which I have not been able to resolve and this occurs usually when a user clicks through the options at a very quick pace. The bug results in the request for a holiday location not being fulfilled and the loading animation icon remaining on the page spinning indefinitely. I am not sure what causes this to occur but a possible solution to fixing this would be to utilise to a setTimeout() method to slow down the speed at which users can click on icons. As a way to keep the user informed of this and alert them off the error, I have implemented an error message which will display whilst the request is loading and then disappear once the request has successfully been made and the destination is displayed. 

- Due to the issue with using Unsplash API get random image request as mentioned earlier in my README, the final image can sometimes display images which do not seem fitting to the resulting destination. This is not exactly a bug but more a drawback of utilising this API feature. 

- The final image displayed sometimes extends outside of the box it is meant to sit in. 

## Deployment

* The site was deployed to GitHub pages. The steps to deploy the site are as follows:
  * In the GitHub repository, navigate to the "settings" tab
  * Select the pages link from the setting menu on the left hand side 
  * Under the GitHub Pages from the source section drop-down menu, select the master branch 
  * Once the master branch has been selected, click on "save".

### Forking and Cloning
Forking 
* On GitHub.com navigate to https://github.com/alikariminik/Milestone-Project-Two repository.
* In the top-right corner of the page, click "fork"

Cloning
* On GitHub.com, navigate to your fork of the Milestone-Project-Two repository.
* Above the list of files, click  Code.
* Copy the URL for the repository.
* Open Git Bash.
* Change the current working directory to the location where you want the cloned directory.
* Type git clone, and then paste the URL you copied earlier. 
* Press Enter. Your local clone will be created.

## Credits

#### Resources 
- Code Institute course material
- Code Institute Mentor
- [CodeInstitute-ReadME](https://github.com/Code-Institute-Solutions/SampleREADME)
- Code Institute Tutor Support on Testing with JEST (Sean)

#### Code
- https://webdesign.tutsplus.com/articles/keyboard-accessibility-tips-using-html-and-css--cms-31966
- https://stackoverflow.com/questions/27327765/how-to-get-a-img-tag-the-focus  
- https://stackoverflow.com/questions/42034359/trigger-click-event-on-keypress-for-any-focused-element
- https://stackoverflow.com/questions/14542062/eventlistener-enter-key

The above sites were all really useful in helping make my website accessible and fully functional for keyboard only users.

#### Media 
- [Beaches] https://unsplash.com/photos/nYwfKdzB_Ds Edwards Lee
- [Mountains] https://unsplash.com/photos/u5yopQOsFqg Guido de Sacco
- [Adventures] https://unsplash.com/photos/kQu71SCrwns Edgar Laureano
- [Relaxation] https://unsplash.com/photos/LmF4eBYs08c Jakayla Toney
- [History] https://unsplash.com/photos/jNQK0RnwCSo Dries Augustyns
- [Party] https://unsplash.com/photos/MxfcoxycH_Y Michael Discenza
- [Culture] https://unsplash.com/photos/7k91OUDYAQ0 Ian Macharia
- [Nature] https://unsplash.com/photos/dIMJcgCYZJw Eugene Deshko
