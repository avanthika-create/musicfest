
const ticketCart = {
    friday: {
        name: "Friday Pass",
        price: 226,
        quantity: 0
    },

    saturday: {
        name: "Saturday Pass",
        price: 234,
        quantity: 0
    },

    sunday: {
        name: "Sunday Pass",
        price: 217,
        quantity: 0
    }
};

function renderCart(){
    document.getElementById("fridayQty").textContent = 
        ticketCart.friday.quantity;

    document.getElementById("saturdayQty").textContent = 
        ticketCart.saturday.quantity;

    document.getElementById("sundayQty").textContent = 
        ticketCart.sunday.quantity;

    const subtotal = 
        ticketCart.friday.price * ticketCart.friday.quantity +
        ticketCart.saturday.price * ticketCart.saturday.quantity +
        ticketCart.sunday.price * ticketCart.sunday.quantity;

    const serviceFee = subtotal * 0.08;
    const total = subtotal + serviceFee;

    document.getElementById("cartSubtotal").textContent =
        `$${subtotal.toFixed(2)}`;
    document.getElementById("cartFee").textContent = 
        `$${serviceFee.toFixed(2)}`;
    document.getElementById("cartTotal").textContent =
        `$${total.toFixed(2)}`;
}

document.querySelectorAll(".cart-add").forEach(button => {
    button.addEventListener("click", () => {
        const ticket = button.dataset.ticket;
        ticketCart[ticket].quantity++;
        renderCart();
    });
});

document.querySelectorAll(".qty-plus").forEach(button => {
    button.addEventListener("click", () => {
        const ticket = button.dataset.ticket;
        ticketCart[ticket].quantity++;
        renderCart();
    });
});

document.querySelectorAll(".qty-minus").forEach(button => {
    button.addEventListener("click", () => {
        const ticket = button.dataset.ticket;
        if(ticketCart[ticket].quantity > 0) {
            ticketCart[ticket].quantity--;
        }
        renderCart();
    });
});

const cartCheckout = document.getElementById("cartCheckout");
cartCheckout.addEventListener("click", () => {
    const totalQuanity = 
        ticketCart.friday.quantity +
        ticketCart.saturday.quantity +
        ticketCart.sunday.quantity;
    if(totalQuanity === 0){
        alert("Your cart is empty!");
    }
    renderCheckoutSummary();
    modal.style.display = "flex";
});

function renderCheckoutSummary(){
    const summary = document.getElementById("checkoutSummary");
    let html = "";
    let subtotal = 0; 
    Object.entries(ticketCart).forEach(([day, ticket]) => {
        if(ticket.quantity > 0){
            const itemTotal = 
                ticket.price * ticket.quantity;
            subtotal += itemTotal;

            html += `
            <div class="checkout-item">
            <span> 
            ${ticket.name} x ${ticket.quantity}
            </span>
            <span>
            $${itemTotal.toFixed(2)}
            </span>
            </div>
            
            `;
        }
    });

    const fee = subtotal * 0.08;
    const total = subtotal + fee;

    html += `
        <div class="checkout-divider"></div>

        <div class="checkout-item">
        <span>Service Fee</span>
        <span>$${fee.toFixed(2)}</span>
        </div>

        <div class="checkout-final-total">
        <span>Total</span>
        <span>$${total.toFixed(2)}</span>
        </div>
    `;

    summary.innerHTML = html;
}

document.querySelectorAll(".cart-add").forEach(button => {
    button.addEventListener("click", () => {
        const ticket = button.dataset.ticket;
        ticketCart[ticket].quantity++;
        renderCart();
    });
});

let selectedTicket = "";

const modal = document.getElementById("checkoutModal");



const purchaseBtn = document.getElementById("purchaseBtn");

console.log("purchaseBtn:", purchaseBtn);

purchaseBtn.addEventListener("click", () => {
    console.log("PURCHASE CLICKED");

    const card = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    console.log(card, expiry, cvv);

    if (
        card === "1234567890123456" &&
        expiry === "12/30" &&
        cvv === "123"
    ) {
        completePurchase();
    } else {
        alert("Invalid demo card.");
    }
});

function downloadTickets(){
    let file="";

    const customerName = document 
        .getElementById("name")
        .value
        .trim()
        .replace(/\s+/g, "-")

    const ticketFiles = {
        friday: "images/tickets/day1ticket.png",
        saturday: "images/ticket/day2ticket.png", 
        sunday: "images/tickets/day3ticket.png"
    };

    Object.entries(ticketCart).forEach(([day, ticket]) => {
        for(let i = 1; i <= ticket.quantity; i++){
            const link = document.createElement("a");
            link.href = ticketFiles[day];
            link.download =
                `MusicFest-${day}-${customerName}-${i}.png`;
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
    });


    modal.style.display = "none";

    document.querySelector(".checkout-form").style.display = "block";
    document.getElementById("successScreen").style.display = "none";

}

document
.getElementById("downloadBtn")
.addEventListener("click", downloadTickets);

function completePurchase(){
    document.querySelector(".checkout-form").style.display = "none";
    document.getElementById("successScreen").style.display = "block";

    const customerName = 
        document.getElementById("name").value.trim();

    document.getElementById("successMessage").textContent = 
        `Thank you for your purchase, ${customerName}!`;
}

document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
};

//artist schedule

const artistSchedule = [
    // friday artists
    { name: "Travis Scott", day: "Friday", stage: "Main Stage", start: "21:30", end: "23:00"},
    { name: "Playboi Carti", day: "Friday", stage: "Main Stage", start: "19:30", end: "20:30"},
    { name: "Metro Boomin", day: "Friday", stage: "Bay Stage", start: "20:00", end: "21:00"},
    { name: "Don Toliver", day: "Friday", stage: "Neon Stage", start: "18:30", end: "19:30"},
    { name: "Future", day: "Friday", stage: "Main Stage", start: "17:30", end: "18:30"},
    { name: "21 Savage", day: "Friday", stage: "Bay Stage", start: "17:45", end: "18:45"},
    { name: "Lil Tecca", day: "Friday", stage: "Neon Stage", start: "16:30", end: "17:30"},
    { name: "Sheck Wes", day: "Friday", stage: "Bay Stage", start: "16:15", end: "17:00"},
    { name: "Yeat", day: "Friday", stage: "Main Stage", start: "15:30", end: "16:30"},
    { name: "SoFaygo", day: "Friday", stage: "Neon Stage", start: "15:00", end: "16:00"},
    { name: "SZA", day: "Friday", stage: "Bay Stage", start: "18:45", end: "20:00"},
    { name: "Latto", day: "Friday", stage: "Neon Stage", start: "17:45", end: "18:30"},

    // saturday artists
    { name: "Pink Pantheress", day: "Saturday", stage: "Main Stage", start: "21:30", end: "23:00"},
    { name: "Charli XCX", day: "Saturday", stage: "Main Stage", start: "19:30", end: "20:30"},
    { name: "Beabadoobee", day: "Saturday", stage: "Bay Stage", start: "20:00", end: "21:00"},
    { name: "Zara Larsson", day: "Saturday", stage: "Neon Stage", start: "18:30", end: "19:30"},
    { name: "DPR Ian", day: "Saturday", stage: "Main Stage", start: "17:30", end: "18:30"},
    { name: "FKA Twigs", day: "Saturday", stage: "Bay Stage", start: "17:45", end: "18:45"},
    { name: "The Marías", day: "Saturday", stage: "Neon Stage", start: "16:30", end: "17:30"},
    { name: "Wallows", day: "Saturday", stage: "Bay Stage", start: "16:15", end: "17:00"},
    { name: "ILLIT", day: "Saturday", stage: "Main Stage", start: "15:30", end: "16:30"},
    { name: "Clairo", day: "Saturday", stage: "Neon Stage", start: "15:00", end: "16:00"},
    { name: "Yves", day: "Saturday", stage: "Bay Stage", start: "18:45", end: "20:00"},
    { name: "Keshi", day: "Saturday", stage: "Neon Stage", start: "17:45", end: "18:30"},

    // sunday artists 
    { name: "Tyler, the Creator", day: "Sunday", stage: "Main Stage", start: "21:30", end: "23:00"},
    { name: "Kali Uchis", day: "Sunday", stage: "Main Stage", start: "19:30", end: "20:30"},
    { name: "Malcom Todd", day: "Sunday", stage: "Bay Stage", start: "20:00", end: "21:00"},
    { name: "Steve Lacy", day: "Sunday", stage: "Neon Stage", start: "18:30", end: "19:30"},
    { name: "Daniel Caesar", day: "Sunday", stage: "Main Stage", start: "17:30", end: "18:30"},
    { name: "Brent Faiyaz", day: "Sunday", stage: "Bay Stage", start: "17:45", end: "18:45"},
    { name: "Omar Apollo", day: "Sunday", stage: "Neon Stage", start: "16:30", end: "17:30"},
    { name: "Willow", day: "Sunday", stage: "Bay Stage", start: "16:15", end: "17:00"},
    { name: "Dominic Fike", day: "Sunday", stage: "Main Stage", start: "15:30", end: "16:30"},
    { name: "F3miii", day: "Sunday", stage: "Neon Stage", start: "15:00", end: "16:00"},
    { name: "Remi Wolf", day: "Sunday", stage: "Bay Stage", start: "18:45", end: "20:00"},
    { name: "Kaytranada", day: "Sunday", stage: "Neon Stage", start: "17:45", end: "18:30"},

];

const scheduleContainer = document.getElementById("artistSchedule");
const dayTabs = document.querySelectorAll(".day-tab");

let currentDay = "Friday";
let mySchedule = [];

function renderArtistSchedule(day){

    scheduleContainer.innerHTML = "";

    const dayArtists = artistSchedule.filter(
        artist => artist.day === day
    );

    dayArtists.forEach(artist => {
        const artistRow = document.createElement("div");
        artistRow.classList.add("schedule-artist");
        artistRow.innerHTML = `
            <div class="schedule-time">
                ${artist.start} - ${artist.end}
            </div>

            <div class="schedule-info">
                <h3>${artist.name}</h3>
                <p>${artist.stage}</p>
            </div>

            <button class="add-artist">
                + Add
            </button>
        `;

        const addButton =
            artistRow.querySelector(".add-artist");
        const alreadyAdded = mySchedule.some(
            item => item.name === artist.name
        );
        if(alreadyAdded){
            addButton.textContent = "✓ Added";
            addButton.disabled = true;
        }
        addButton.addEventListener("click", () => {

            addToSchedule(artist);

            addButton.textContent = "✓ Added";
            addButton.disabled = true;

        });
        scheduleContainer.appendChild(artistRow);

    });
}


function addToSchedule(artist){

    const alreadyAdded = mySchedule.some(
        item => item.name === artist.name
    );

    if(alreadyAdded){
        return;
    }

    const conflict = mySchedule.find(existing => {
        return (
            existing.day === artist.day &&
            artist.start < existing.end &&
            artist.end > existing.start
        );
    });

    if(conflict){
        showConflict(artist, conflict);
        return;
    }

    mySchedule.push(artist);

    
    renderMySchedule();
    renderArtistSchedule(currentDay);
}

let pendingArtist = null; 
function showConflict(newArtist, existingArtist){
    pendingArtist = newArtist;
    const conflictModal = 
        document.getElementById("conflictModal");

    const conflictMessage = 
        document.getElementById("conflictMessage");

        conflictMessage.innerHTML = `
        <strong>${newArtist.name}</strong>
        (${newArtist.start} - ${newArtist.end})
        overlaps with
        <strong>${existingArtist.name}</strong>
        (${existingArtist.start} - ${existingArtist.end}).
        `;
        
        conflictModal.style.display = "flex";
}

document
.getElementById("keepBothBtn")
.addEventListener("click", () => {
    if(pendingArtist){
        mySchedule.push(pendingArtist);
        renderMySchedule();
        renderArtistSchedule(currentDay);
    }

    pendingArtist = null;
    document.getElementById("conflictModal").style.display = "none";

});

document
.getElementById("cancelConflictBtn")
.addEventListener("click", () => {
    pendingArtist = null;
    document.getElementById("conflictModal").style.display = "none";
});


function renderMySchedule(){

    const myScheduleContainer =
        document.getElementById("mySchedule");

    myScheduleContainer.innerHTML = "";


    if(mySchedule.length === 0){

        myScheduleContainer.innerHTML = `
            <p class="empty-schedule">
                You haven't added any artists yet.
            </p>
        `;

        return;
    }

    const dayOrder = {
        Friday: 1, 
        Saturday: 2,
        Sunday: 3
    };

    mySchedule.sort((a,b) => {
        if(dayOrder[a.day] !== dayOrder[b.day]){
            return dayOrder[a.day] !== dayOrder[b.day];
        }

        return a.start.localeCompare(b.start);
    });

    mySchedule.forEach(artist => {

        const item = document.createElement("div");

        item.classList.add("my-schedule-item");

        item.innerHTML = `
            <div>
                <h3>${artist.name}</h3>

                <p>
                    ${artist.day} •
                    ${artist.start} - ${artist.end} •
                    ${artist.stage}
                </p>
            </div>

            <button class="remove-artist">
                Remove
            </button>
        `;

        myScheduleContainer.appendChild(item);

        const removeButton = item.querySelector(".remove-artist");
        removeButton.addEventListener("click", () => {
            mySchedule = mySchedule.filter(
                selectedArtist => selectedArtist.name !== artist.name
            );

            renderMySchedule();
            renderArtistSchedule(currentDay);
        });

    });

}


dayTabs.forEach(tab => {
    tab.addEventListener("click", () => {

        dayTabs.forEach(button => {
            button.classList.remove("active");
        });

        tab.classList.add("active");
        currentDay = tab.dataset.day;
        renderArtistSchedule(currentDay);

    });

});

renderArtistSchedule(currentDay);