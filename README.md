# Ecommerce Website for Bubble Tea & Cat Café
I built this eCommerce website for a cat café where people can spend time petting cats and drinking bubble tea. The website is currently built using React with Vite, Tailwind, HTML, and CSS and deployed using Netlify. I intend to implement some additional features at a later stage (which are listed below) using Node and SQL. 

## Tech Stack
-	HTML
-	CSS
-	React.js
-	Vite
-	Tailwind CSS 4

## Features
<b> Note: A more detailed description of the content and functionality on each page is provided below in the process section. </b>
- Responsive layout for mobile, tablet, desktop.
- Shop page with product listings, shopping cart, and checkout process
- Drinks menu page featuring different categories of drinks (i.e. milk tea, fruit tea, etc.)
- Contact page
- Home page with featured drinks, about section, and buttons linking to other important website pages

# Website Screenshots
## Desktop Screenshots

## Tablet Screenshots

## Mobile Screenshots

# Process and Challenges
# Design
The website is designed in Figma and you can view the original designs here: https://www.figma.com/design/vgnjDkgOcr6fViX1QEDuc8/BobaKitty-Ecommerce-Website?node-id=34-428&t=B2ow5Hqbq7e2skvS-1

I chose to design most of the pages but I wanted to dive into building the MVP so I didn't design some pages like the checkout process. 

## Content and Functionality 
The home page displays a selection of six bubble tea drinks in a modal and automically changes the drinks that are displayed every 3 seconds. It also includes café information, buttons that link to other parts of the website, cat paw prints that move down the page, and a simple navigation menu. 

The contact page has a basic form where users can send a message. The drinks menu lets users filter drinks by category: milk tea, fruit tea, iced tea, matcha & specialty. When a user clicks on a drink card, the card expands to display: image, drink name, text description. The background of the website is blurred when the expanded drink card is displayed.

The shop page contains product listings and each item has a name, image, price, and short description. I used static data to load the information about the products for now (products.json) but intend to store this information in a database later. Clicking "Add to Cart" updates the shopping cart dynamically and users can also remove items from their cart. The contents of the cart include products with their name, image, price, quantity, add/decrease, and remove button. The cart total is the subtotal which is the cost of items without shipping/delivery cost factored in. This cart total updates dynamically when items are added/removed and at the bottom there is a checkout button which directs users to the checkout page.

The checkout process involves filling out a series of forms about customer details (Name, Email, Address, Phone Number), address, shipping method, and payment details. The user can also check the order summary which contains cart items with prices and the total price including shipping. When the user clicks on the 'place order' button, they will be redirected to home page. I intend to implement payment integration (that will be disabled of course to prevent transcations) and to store the information from the forms in a database in future updates.

The website is designed to be responsive using Tailwind CSS 4. The text and images adjust dynamically. The navigation menu also collapses into a hamburger menu on small screens.

## Code snippets


## Challenges


# Future Work Checklist
- Add a database
- Add an AI-powered chatbot that offers personalized bubble tea drink recommendations.
- Add user account functionality with authentication
