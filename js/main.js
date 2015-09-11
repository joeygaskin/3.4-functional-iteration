// Question 1 //

items.map (function(item) {
 return item.price});

 var prices = items.map (function(item) {
  return item.price});

  var total = prices.reduce(function(a, b) {
    return a + b;
  });
  total / prices.length;

// Question 2 //

items.map (function(item) {
 return item.price});

 var prices = items.map (function(item) {
  return item.price});

  function isBigEnough(item) {
    return item.price >= 14 && item.price <=18 ;
  }

  var filtered = items.filter(isBigEnough);

  console.log(filtered);

  // Question 3 //

  items.filter(function(item) {
   if (item.currency_code === "GBP")
  console.log (item.title + " " + "£" + item.price);

  });

  // Question 4 //

  items.forEach(function(obj) {
      if (obj.materials.indexOf('wood') > -1) {
        console.log(obj.title);
      }
    });

//  Question 5 //

items.forEach(function(brownies) {
    if (brownies.materials.length >= 8) {
      console.log(brownies.title);
    }
  });

// Question 6 //

items.forEach(function(seller) {
    if (seller.who_made.indexOf('i_did') > -1) {
      console.log(seller.title);
    }
  });
