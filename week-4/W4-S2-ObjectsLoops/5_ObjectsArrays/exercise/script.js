// create your coffee object array here


let orders = [{ type:"latte", milk:true, customer: "Alice" },
    { type:"Americano", milk:false, customer: "Bob" },
    { type:"flat white", milk:true, customer: "Charlie" }],

// creat your print order function here

for (let i = 0; i < orders.length; i++) {
    let customer = orders[i];
    let withMilk =customer.milk ? "Yes" : "No"
    console.log('customer: ${customer.customer}, coffee: ${customer.type}, Milk: ${withMilk}');

}