function MyFunction() {

  let bag0 = {
    large : document.getElementById("pizza").value,
    extra : document.getElementById("pizza").value,

    topping1 : document.getElementById("Topping").value,
    topping2 : document.getElementById("Topping").value,
    topping3 :document.getElementById("Topping").value,
    topping4 : document.getElementById("Topping").value,
  }

  let bag1 = {
    largePrice : 6.00,
    extraPrice : 10.00,

    topping1Price : 1.00,
    topping2Price : 1.75,
    topping3Price : 2.50,
    topping4Price : 3.35,
  }

  let bag2 = {
    largeHST : 0.72,
    extraHST : 1.30,

    topping1HST : 0.13,
    topping2HST : 0.23,
    topping3HST : 0.33,
    topping4HST : 0.44,
  }

  let calculator = {
    order1pizza : bag1.largePrice + bag2.largeHST,
    order2pizza : bag1.extraPrice + bag2.extraHST,

    order1topping : bag1.topping1Price + bag2.topping1HST,
    order2topping : bag1.topping2Price + bag2.topping2HST,
    order3topping : bag1.topping3Price + bag2.topping3HST,
    order4topping : bag1.topping4Price + bag2.topping4HST,
  }
  

  if (bag0.large == "large") {
    document.querySelectorAll("p1");
    document.getElementById("demo0").innerHTML = 'hello';
  }
}