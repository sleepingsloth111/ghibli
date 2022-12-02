# Development

### Link to Deployed Website
https://sleepingsloth111.github.io/ghibli/

### Goal and Value of the Application
The application offers users to browse and maintain a list of their favorite ghibli
movies. Users will be able to check out the release year, runtime, and director of 
each film. Finally, users will be able to see the average of the runtime of their 
favorited films. This application will hopefully foster a space where users can 
appreciate and enjoy ghibli films and have a space to organize their favorites. 

### Usability Principles Considered
For usability principles, I had clear color contrast and bordering for components in
the page for easier distinction of the hierarchy items. Additionally, I had all cards
be equal size to have a more consistent design that allows easier usability and navigation. 


### Organization of Components
I enforced a clear hierarchy through having 3 main sections. The title with the 
largest font to have a top element. Then, I have two column sections. One for the filter/sort
 and aggregator interactions, and another for displaying the different films. The left column 
 had distinct separation between the aggregator and the filter/sort buttons for clearer organization.

 MovieItem: These components are the cards displayed to the right. Each film is a MovieItem to better
 organize all the films.

 Aggregator: This component is the lower box to the left. It handles displaying the titles in the favorited cart
and also handles displaying the average runtime of the favorited films. 

### How Data is Passed Down Through Components
A json file containing information for all the different films is included in the 
repository. The application maps each film from the json file and creates a MovieItem component
by passing in the film information as a prop. These instances of the MovieItem component will 
display the Cards for each film. A cart (an array) is also passed in as a prop for 
all instances of MovieItem. Whenever the favorite button is clicked for a card, a cartItem var 
is added to the cart. This cart is then passed down to the Aggregator component as a prop where
the films in the cart are displayed as well as the average of the runtime of the films in the cart.
State is used for the cart and the runtime total. 

### How the User Triggers State Changes
Users can trigger state changes through 3 interactions. 

Filter: There are two filter dropdown buttons users can interact with to filter the film cards displayed 
to the right. One for filter by director and another for filter by runtime length. 

Sort: There is one sort dropdown button users can interact with to sort the order of film cards presented.
One sorts by default which is by release year and another sorts by runtime in ascending order. 

Favorite/Unfavorite: Favoriting a film by the favorite button in a film card will add the title to the aggregator section
and its runtime will be included in the average runtime displayed of the favorited films. Once favorited, the button will 
change to be a unfavorite button. Clicking it will remove the title from the aggregator section and also remove the runtime
of the removed film from being calculated in the average runtime displayed in the aggregator. 

