var people = ["Suhail","Mashaal","Basit"];
//Add one new guest to the beginning of your array.
people.unshift("Zubair");
//ond guest in the middle
people.splice(2,0,"Kabir");
//one guest in the end
people.push("Yasir");
console.log("Hello "+people[0]+", Your invited today for dinner. Thank you!");
console.log("Hello "+people[1]+", Your invited today for dinner. Thank you!");
console.log("Hello "+people[2]+", Your invited today for dinner. Thank you!");
console.log("Hello "+people[3]+", Your invited today for dinner. Thank you!");
console.log("Hello "+people[4]+", Your invited today for dinner. Thank you!");
console.log("Hello "+people[5]+", Your invited today for dinner. Thank you!");

/*Shrinking Guest List: You just found out that your new dinner table won’t arrive 
in time for the dinner, and you have space for only two guests*/
console.log("Inviting only two people now");
console.log("Sorry "+people[5]+", I cannot invite you");
people.pop(1);
console.log(people);
console.log("Sorry "+people[2]+", I cannot invite you");
people.splice(2,1);
console.log(people);
console.log("Sorry "+people[0]+", I cannot invite you");
people.splice(0,1);
console.log(people);
console.log("Sorry "+people[2]+", I cannot invite you");
people.splice(2,1);
console.log(people);
console.log(people[0]+" you are still invited :)");
console.log(people[1]+" you are still invited :)");
//making the list empty in last
people.splice(0,2);
console.log("These are the names in the list"+people);