ATX Small Business App Project Work

1. Initializing

Once your app is set up, navigate to the folder and npm install the following dependencies:

    @material-ui/core
    @material-ui/icons
    cookie
    google-map-react (optional)
    react-redux
    react-router
    react-router-dom
    redux
    redux-thunk

2. Description of Parts

The app will consist of two parts. Parts that are accessible to the public and parts that require a login.

Accessible to the Public

This will include the Listing component and the Details component. Note that you can call these whatever you like. These correspond to examples 1 and 2.

Require a Login

Certain functionality on the website should require the user to log in. A login screen is shown in example 3. You'll also want to use some conditional rendering to change the navbar so that if a user is logged in it no longer shows the "login" link and instead shows "logout". Other things a user can do when logged in are delete a listing and navigate to the "/add" page which should be protected by a private route. 3. Parts Breakdown

Listing Screen - Example 1

The listing screen should show a table of the small businesses you selected. Please list 4 or 5. Try to take some data from real businesses in town or from another town of your choice. At minimum, the data that is required are:

    business name
    description
    address
    operating hours

It is not a requirement that this table is paginated. You may do so if you like if you intend to add numerous businesses and you think it will degrade the user experience.

Details Screen - Example 2

This screen should rearrange the data that is presented in the listing table. It should present it in a user-friendly way and incorporate an outside API to go along with it. We will incorporate the Google Maps API for this. Reference the Google Maps API documentation for this but you will need a Google Cloud account. You should already have this from the JS311 course. I will provide more details about the Google Maps API below.

Login Screen - Example 3

This is a simple login form with two fields, a username and a password. Make sure that you use a type of password on the "password" input so that we cannot see which characters we are typing.

On submit, the form should set a user cookie and possibly store the user in the Redux state. That's up to you. Once logged in, add a small bar below the navbar (it should exist on every page) that notifies the user they are logged in and shows their username.

Logged In Listing - Example 4

Conditionally render a "delete" column on the table with an icon so that the user can delete a given row.

Add Listing Page - Example 5

Provide a form with which the logged-in user can enter data about a new small business and save it. Once saved, it should be added to the Redux store and should automatically be populated in the Listing table when you navigate back to that page. This "Add" page should be protected by a private route which means a user can't navigate to it if they are not logged in.

Also, it would be cool if you update the Google Map as you fill out the address field so that the user gets a preview regarding the address. You would do something like that using the componentDidUpdate functionality of a class component.

Logout

When a user clicks the logout button, remove the cookie and reset the "user" state in Redux.

4. More Technical

   **Redux State**

You will probably want at least three properties in your Redux state:

    user
    listings
    map

NOTE: You do not have to name these the same way.

**Redux Actions**

You'll want actions that delete a listing, add a listing, login/logout, and fetch coordinates for your map given a certain address. You may have more or less depending on how you structure your app.

**React Router**

As far as React Router goes, find an example on the web of using private routes. You can search "Private Routes React" in Google or look at your previous homework assignments.

Your "isAuthenticated" function that complements the private route may use the "cookie" npm package to parse the cookie. Remember you can set a cookie by writing document.cookie = "user=<USERNAME>;max-age=60*1000*5;

_Google Maps_

Make sure to reference the Google Maps Documentation.

You will need to get an API key. Here's a URL example that will retrieve the coordinates for your map given a certain address: **https://maps.google.com/maps/api/geocode/json?key=<API_KEY>&address=1600+Amphitheatre+Parkway,+Mountain+View,+CA**. You will want to follow the instructions closely on setting up credentials for your API key.

Finally on Google Maps, you can use the sample code they provided or use an NPM package that helps incorporate Maps into React. An example of such an NPM package can be found at google-map-react.

    Login

On the login page, you do not actually have to validate the login. Using any username and password combination is fine for this project.

    Add Listing

If you use componentDidUpdate you'll know when certain properties of state have changed. You'll probably be changing these properties as you type in the Text field. If the address has changed, you can use this to call your "getCoordinates" action (or whatever you named it) and get the lat/lng for your map. This will allow you to update your map in real time.

//might be useful (maybe not)
// google maps javascript

let map;

function initMap() {
map = new google.maps.Map(document.getElementById("map"), {
center: { lat: -34.397, lng: 150.644 },
zoom: 8,
});
}

// google maps API format

<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
  type="text/javascript"></script>
