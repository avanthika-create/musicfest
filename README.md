MusicFest is an interactive website for a fictional 3-day music festival in Singapore. It is for horizons at Hack Club.
I wanted to combine graphic design with coding and make an interactive festival-themed website.
I used AI as a debugging and learning tool while working on this project. I mainly used it to help find errors in my code, explain why something wasn't working, and teach me JavaScript functions that I hadn't used before.
I wrote and tested the code as I worked through these features and made changes based on what I learned.
AI was not used to create the graphics/design of the website.

## Features

- 3-day festival lineup with 36+ artists
- Different artist schedules for days in a weekend
- Schedule builder: add and remove artists from your schedule, detects when performances in schedule overlap, option to keep both artists when there is a schedule conflict
- System to buy multiple tickets
- Calculates whole total and fees
- Demo checkout system
- Downloadable ticket graphics
- Interactive buttons

## How to Use it

Scroll through the website to see the headliners and full festival lineup.
In the schedule builder, choose Friday, Saturday, or Sunday to see the performances 
for that day. Click "Add" to add an artist to your personal schedule. 
If two artists perform at overlapping times,
the website will tell you about the conflict and see if you would like to keep both.
In the ticket section, add Friday, Saturday, and/or Sunday passes to your cart.
You can change the quantity. The cart automatically calculates the price and service fee.
The checkout is only a demo and does not process real payments. Don't enter real payment information.

### Demo Card

Card Number: `1234567890123456`  
Expiration: `12/30`  
CVV: `123`

After completing the demo checkout, you can download the festival ticket graphic.

## How It Works

The website is built with HTML, CSS, and JavaScript.
The festival lineup is stored in JavaScript with the information from each artist based on the selected day and creates a schedule.
The personal schedule is stored in an array. When an artist is added, 
the website compares their start and end time with artists already in the schedule to detect which performances overlap.
The ticket cart stores the price and quantity for each festival day.
JavaScript updates the total and shows the final total when the cart changes.
The checkout uses demo card information for to make the payment valid. 


## Why I Made This

I originally started this as a graphic design project by designing the festival's posters, tickets, lineup, and wristband, which gave me around 3 hours and 50 minutes on lapse. 
I wanted to turn those designs into a website and learn/practice new JavaScript functions.
I had already made several websites before this project, 
so I wanted to learn new types of functions
I added things like the schedule builder, conflict detection, and ticketing cart 
instead of making the project only about the visuals.

## Screenshots

<img width="952" height="465" alt="image" src="https://github.com/user-attachments/assets/41f3b217-7f1e-43dd-b8a1-85ef446d118c" />
<img width="933" height="389" alt="image" src="https://github.com/user-attachments/assets/6d6ebed0-385a-45ec-b4c2-2761d3a987ca" />
<img width="947" height="469" alt="image" src="https://github.com/user-attachments/assets/93b21ae5-6293-424f-93e9-4374dd7805e1" />



## Video if navigation is hard

https://drive.google.com/file/d/1DoLhocfRCuh5TAOjXTggrsDgsTbFTCmN/view?usp=sharing

## DEMO URL
https://musicfest-ruddy.vercel.app/

