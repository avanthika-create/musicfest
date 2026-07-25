//ticket system

let selectedTicket = "";

const modal = document.getElementById("checkoutModal");

document.querySelectorAll(".ticket-buy").forEach(button=>{
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        selectedTicket = button.dataset.ticket;

        modal.style.display = "flex";

    });
});

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

function downloadTicket(){
    let file="";

    const customerName = document 
        .getElementById("name")
        .value
        .trim()
        .replace(/\s+/g, "-")

    if(selectedTicket==="friday"){
        file="images/tickets/day1ticket.png";
    }

    if(selectedTicket==="saturday"){
        file="images/tickets/day2ticket.png";
    }

    if(selectedTicket==="sunday"){
        file="images/tickets/day3ticket.png";
    }

    const link=document.createElement("a");
    link.href= file;
    link.download = 
        `MusicFest-${selectedTicket}-${customerName}.png`;

    link.click();
    link.remove();

    modal.style.display = "none";

    document.querySelector(".checkout-form").style.display = "block";
    document.getElementById("successScreen").style.display = "none";

}

document
.getElementById("downloadBtn")
.addEventListener("click", downloadTicket);

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
    { name: "DPR Iam", day: "Saturday", stage: "Main Stage", start: "17:30", end: "18:30"},
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