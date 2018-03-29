# WDI-GROUP-PROJECT

MEAN Stack app planned and built in a week by Patrick Kelly, Charlotte Davies and Evelina Kuusinen.

## Description

An app to plan ski holidays focusing particular on After Ski activities

On our app you can:
- Browse popular European ski destinations
- Create a forum to:
    - Discuss and plan your holiday with your friends
    - Discuss après opportunities at your resort
    - Get to know your travel companions

<img width=“1440” alt=“screen shot 2018-03-15 at 09 14 39" src=“https://user-images.githubusercontent.com/13580512/37454021-5ac34022-2831-11e8-8840-13c198fb007c.png”>

## The Process
We started by brainstorming ideas and chose to build a ski and snowboard holiday planning app. We drew our initial wireframes collaboratively on the whiteboard.

- We drew them on the whiteboard first and then as a group made a presentation of them
- We experimented with a few formats but mutually decided on a minimalist design
- Originally our hero image was a ski jumper but in practise we didn’t like how the snowboarder took over from our content, so we changed to a gondola
- We each took an element of styling, background image, font, colour scheme
- We set these up in variables and set up a basic style sheet for headings, paragraphs, buttons and anchor tags


<img width=“1440" src=“https://user-images.githubusercontent.com/13580512/37453738-8bacc88a-2830-11e8-9b6c-793383dd465f.png”>

<img width=“1440” alt=“screen shot on trello day 1 part 1" src=“https://user-images.githubusercontent.com/13580512/37453871-f51fbe4e-2830-11e8-846e-854e0ec0599f.png“>

For planning we used a Trello board which we continued using throughout the process, dividing tasks and informing each other about the process. We wanted to ensure that we didn’t miss anything and all aspects of our project would be covered by someone. Our detailed planning really helped us to prioritise MVP, communicate on what was going on and avoid conflicts on git - it really helped that we had 3 models and 3 people. We had standups every morning and after lunch and we also used Slack to keep each other updated during the weekend and overnight.

Our goal was to divide the back and front end coding so that every team member would have the chance of practicing on both. All three of us wrote tests and did styling as well. In three days we hit MVP.

The biggest struggle was that the main API we planned on using only output in XML and could only be used by one IP address. We decided to build the API from scratch giving us the ski destinations with the information we wanted to display on the app.
After hitting MVP we added the Google Places API and functionality to favourite places, styled menus to drop down menus and added autocomplete to forms.

Our team worked well because we put a lot of effort into communicating and we had a mutual respect of each other’s abilities and value within the team.

## Technologies Used
* JavaScript
* Angular
* Express
* NodeJS
* MongoDB
* HTML5
* CSS
* SCSS
* Mocha
* Chai
* NYC

###Dependencies and other tools:
* Babel
* Bcrypt
* Bluebird
* Body-Parser
* Bower
* Browser-Sync
* Canva
* Event Stream
* Google Maps API
* Google Places API
* Filestack API
* Gulp
* Git
* Istanbul
* JSON Web Token
* Mongoose
* Morgan
* Trello
* Heroku


## Wins and Blockers
####Charlotte's Wins:

1. Practising the google map and google places API -  I’d never really had a chance to experiment with either before so I enjoyed the opportunity and can see lots of scope to use it in the future.
2. Practising testing - this consumed all of my first weekend on the project and I found it complex to get my head around to start with but I am glad I have worked it out now as I can definitely see the value of good testing for future projects.
3. Great teamwork - Patrick and Evelina were so easy to work with. We made decisions quickly and collaboratively and everyone was supportive with bug fixing.

####Charlotte's Blockers:

1. Our schemas got quite complex in referencing each other
2. We couldn’t use our original API - the Google Places API wasn’t so good.


####Patrick’s Wins:

1. I like the site - the styling looks great and I’m pleased with the functionality that we have been able to create.
2. Dropdown menu functionality is a win for me! It took a while to work out but I am really happy we took the time to include it in our app.
3. Date formatting was a pain but it was worth the struggle because it’s an important element of our event planning app.

####Patrick’s Blockers:

1. Testing - it was difficult and time consuming but a good learning opportunity
2. Authentication - I found it complicated to get my head around

####Evelina’s Wins:

1. Great team - we were very decisive, we shared the tasks equally, there was a lot of respect for each other’s work and we communicated well on this. Our project relied on trusting our team.
2. The grid - I got a lot of practise in styling forms. I really had to wrap my head around the individual components of the HTML and SCSS.
3. I think our idea is great and I think I would actually use this app! It fixes the pain point that group holidays often aren’t that well planned because no-one takes responsibility for it.  With our app you can share the load.


####Evelina’s Blockers:
1. It was the first time styling code that others have written. Creating the layout was a bit harder this way, compared if you've written it yourself and would be familiar with the code.
2. Testing was new for me and I the learning curve was quite steep.

## Future Functionality

1. Build a more detailed API
2. Add weather and ski conditions
3. Add a youtube playlist so groups can plan their party music, pre trip
4. Add filters to destination index and favourites on destination and holiday show - we ran out of time for this. We would have filtered by country for the destinations and type of place (bar, restaurant etc) for favourites.


## Links
* Project on [GitHub](https://github.com/P-atrick/WDI-GROUP-PROJECT)
* Project deployed with [Heroku](http://appresski.herokuapp.com/)
