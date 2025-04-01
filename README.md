# Ecommerce Website for Bubble Tea & Cat Café
I built this eCommerce website for a cat café where people can spend time petting cats and drinking bubble tea. The website is currently built using React with Vite, Tailwind, HTML, and CSS and deployed using Vercel. I intend to implement some additional features at a later stage (which are listed below) using Node and SQL. 

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

### Installation and Set Up for Project
•	Initialise React with Vite
•	Install Tailwind
•	Install React Router for Page Navigation:
•	Install Framer Motion for Animations (for cat paw prints & hover effects):

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
I had a lot of issues deploying this website using Vercel because there were problems with my folder structure - the current structure is one that works and I had to check on Stack Overflow to figure out that some files were not in the correct places. I also had to make sure my image paths in JSON files weren't linking to images inside the src folder becuase the images have to be in the public folder if you link to them using JSON. I didn't realise this would be an issue until I started getting errors on Vercels. There is also certain code that you need to add to the vite.config.js file in order to deploy with Vercel (you may check this file in my repo if you are curious) but it 

One issue that I didn't address in this MVP is making sure the cart data persists across page reloads and route changes. A solution to this is to use Redux for state management or local storage in the web browser but since I haven’t studied these concepts yet, I didn’t feel comfortable implementing it for this project.

•	When you’re deploying with Vercel – you need to add the following code to the vite.config.js file
•	Vercel (with React) project gives 404 error when website is refreshed. I used this stack overflow post to troubleshoot: https://stackoverflow.com/questions/75963788/why-is-my-vercel-project-giving-me-an-error-404-on-refresh 
![image](https://github.com/user-attachments/assets/053047b4-76af-43ac-be07-ebc3b6dae752)


# Future Work Checklist
- Add a database
- Add an AI-powered chatbot that offers personalized bubble tea drink recommendations.
- Add user account functionality with authentication

# Resources
•	ResponsivelyApp for making the website responsive across multiple screen sizes
•	Javascript introduction and intermediate course on Codecademy
•	React course on Codecademy

# Icons and images credit
<div> Icons made by <a href="https://www.flaticon.com/authors/febrian-hidayat" title="Febrian Hidayat"> Febrian Hidayat </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div>

<a href="https://www.flaticon.com/free-icons/bubble-tea" title="bubble tea icons">Bubble tea icons created by small.smiles - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/unicorn" title="unicorn icons">Unicorn icons created by Freepik - Flaticon</a>

https://www.freepik.com/free-vector/cute-cat-drink-boba-milk-tea-cartoon-vector-icon-illustration-animal-drink-icon-concept-isolated_29084483.htm#fromView=search&page=1&position=2&uuid=11c8f045-c457-469b-8e3f-461536bbbb4c&query=bubble+tea+cats

<a href="https://www.freepik.com/free-photo/composition-with-delicious-thai-tea_15035767.htm">Image by freepik</a>

<a href="https://www.freepik.com/search?format=search&last_filter=query&last_value=bubble+tea&query=bubble+tea">Image by freepik</a>
