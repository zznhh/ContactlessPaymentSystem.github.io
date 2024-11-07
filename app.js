// app.js

const items = {
    "A": { name: "Clothes A", price: 25 },
    "B": { name: "Clothes B", price: 38 },
    "C": { name: "Pants C", price: 20 },
    "D": { name: "Pants D", price: 30 },
    "E": { name: "Combo E", price: 80 }
};

let currentItem = null;

function scanItem(itemId) {
    currentItem = items[itemId];
    if (currentItem) {
        document.getElementById("item-name").textContent = currentItem.name;
        document.getElementById("item-price").textContent = currentItem.price.toFixed(2);
        document.getElementById("payment-details").style.display = "none";
    } else {
        alert("Item not found!");
    }
}

function applyDiscount() {
    if (currentItem) {
        const discountedPrice = currentItem.price * 0.9;  // 10% discount
        document.getElementById("discounted-price").textContent = discountedPrice.toFixed(2);
        document.getElementById("payment-details").style.display = "block";
    } else {
        alert("Please scan an item first.");
    }
}

function choosePaymentMethod(method) {
    if (currentItem) {
        const discountedPrice = currentItem.price * 0.9;
        const paymentData = {
            itemName: currentItem.name,
            price: discountedPrice.toFixed(2),
            method: method
        };

        // Save payment data in localStorage
        localStorage.setItem('paymentData', JSON.stringify(paymentData));

        // Redirect to receipt page
        window.location.href = 'receipt.html';
    } else {
        alert("Please scan an item first.");
    }
}

// Simulate scanning QR code
const urlParams = new URLSearchParams(window.location.search);
const itemId = urlParams.get('item');
if (itemId) {
    scanItem(itemId);
}
