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

purchaseBtn.addEventListener("click",()=>{
    const card=document.getElementById("cardNumber").value.trim();
    const expiry=document.getElementById("expiry").value.trim();
    const cvv=document.getElementById("cvv").value.trim();

    if(
        card==="1234567890123456" &&
        expiry==="12/30" &&
        cvv==="123"
    ){
        completePurchase();

    }

    else{
        alert("Invalid demo card.");
    }

});

function downloadTicket(){
    let file="";
    if(selectedTicket==="friday"){
        file="images/tickets/day1ticket.png";
    }

    if(selectedTicket==="saturday"){
        file="images/tickets/day2ticket.png";
    }

    if(selectedTicket==="sunday"){
        file="images/sunday-ticket.png";
    }

    const link=document.createElement("a");
    link.href=file;
    link.download = "MusicFest-Ticket.png"

    link.click();
}

function completePurchase(){
    document.querySelector(".checkout-box").style.display = "none";
    document.getElementById("successScreen").style.display = "block";
}

document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
};