const seats = document.querySelectorAll(".row .seats");
let selectedSeats = document.getElementsByClassName("selected-seats");
let moviePrice = 10;
let addFoodBtn = document.querySelector("#add-food");
let foodMenu = document.querySelector("#food-menu");
let foodPriceSpan = document.querySelector("#food-price");
let mealsNumber = document.querySelector("#meals-number");
let userName = document.querySelector("#user-name");
let movieDate = document.querySelector("booking-date");
let movieTime = document.querySelector("booking-time");
const orderBtn = document.querySelector("#order-btn");
let nameInTicket = document.querySelector("#name-span");
let seatInTicket = document.querySelector("#seat-span");
let priceInTicket = document.querySelector("#price-span");
let checkOutBtn = document.querySelector("#check-out-btn");

function totalPrice() {
  let seatsPrice = selectedSeats.length * moviePrice;
  let mealsNumberPrice = Number(mealsNumber.value) * foodMenu.value;
  document.querySelector("#seat-prices").innerText = seatsPrice;
  document.querySelector("#total-price").innerHTML =
    seatsPrice + mealsNumberPrice;
}

// Add Food
addFoodBtn.addEventListener("click", function () {
  foodPriceSpan.innerText = foodMenu.value * Number(mealsNumber.value);
  totalPrice();
});

seats.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("selected-seats");
    totalPrice();
  });
});

// validate customer data

function error(input, errorMsg) {
  input.style.border = "2px red solid";
  let formDiv = input.parentElement;
  let small = formDiv.querySelector("small");
  small.style.visibility = "visible";
  small.innerText = errorMsg;
}

function success(input) {
  input.style.border = "3px green solid";
  let formDiv = input.parentElement;
  let small = formDiv.querySelector("small");
  small.style.visibility = "hidden";
}

function soldSeatsAndCheckName() {
  if (!selectedSeats.length) {
    alert("Plaese select Seats");
  } else {
    if (!userName.value) {
      error(userName, "Name is required");
    } else if (userName.value.length < 3) {
      error(userName, "Name must be at least 3 letters");
    } else {
      success(userName);
      nameInTicket.innerHTML = userName.value;
      seatInTicket.innerHTML = selectedSeats.length;
      priceInTicket.innerHTML = Number(
        document.querySelector("#total-price").innerHTML
      );
      document.querySelector(".ticket-check").style.visibility = "visible";
    }
  }
}

orderBtn.addEventListener("click", function () {
  soldSeatsAndCheckName();
  movieDate.required;
});

checkOutBtn.addEventListener("click", function () {
  for (let i = 0; i < selectedSeats.length; i++) {
    selectedSeats[i].style.backgroundColor = "#646464";
    selectedSeats[i].classList.remove("selected-seats");
    selectedSeats[i].classList.add("sold-seats");
  }
});
