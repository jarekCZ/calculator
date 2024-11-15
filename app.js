function calculatePriceTricko() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const smallvcount = parseInt(document.getElementById('small_print_quantity').value);
    const bigcount = parseInt(document.getElementById('big_print_quantity').value);

   if (isNaN(quantity) || isNaN(smallvcount) || isNaN(bigcount) ||quantity <= 0 || smallvcount < 0|| bigcount < 0) {
     document.getElementById('result').innerText = "Prosím, zadejte platné hodnoty.";
   return;
     }


    
    // Nastavíme základní cenu na kus
    let basePrice = 150;
    let big_print_price = 100;
    let small_print_price = 50;
    

    // Celková cena
    const totalPrice = (basePrice+(big_print_price*bigcount)+(small_print_price*smallvcount)) * quantity;
    document.getElementById('result').innerText = `Celková cena: ${totalPrice} Kč`;
}



function calculatePriceTaska() {
    const taskaquantity = parseInt(document.getElementById('taska_quantity').value);
    const taskasmallvcount = parseInt(document.getElementById('taska_small_print_quantity').value);
    const taskabigcount = parseInt(document.getElementById('taska_big_print_quantity').value);
    
    // Kontrola platnosti vstupů
    if (isNaN(taskaquantity) || isNaN(taskasmallvcount) || isNaN(taskabigcount) || taskaquantity <= 0 || taskasmallvcount < 0 || taskabigcount < 0) {
        document.getElementById('result').innerText = "Prosím, zadejte platné hodnoty.";
        return;
    }

    // Ceny
    let TaskaBasePrice = 40;
    let taska_big_print_price = 80;
    let taska_small_print_price = 40;

    // Výpočet celkové ceny
    const totalPriceTaska = (TaskaBasePrice + (taska_big_print_price * taskabigcount) + (taska_small_print_price * taskasmallvcount)) * taskaquantity;
    document.getElementById('result').innerText = `Celková cena: ${totalPriceTaska} Kč`;
}

