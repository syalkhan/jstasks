var people = ["Suhail","Pervez","Basit"];
console.log("Hello "+people[0]+", Your invited today for dinner. Thank you!");
console.log("Hello "+people[1]+", Your invited today for dinner. Thank you!");
console.log("Hello "+people[2]+", Your invited today for dinner. Thank you!");
people.push("Mashaal");
console.log("Hello "+people[3]+", Your invited today for dinner. Thank you!");
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(people[1]);
//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
people.splice(1,1,"Mashaal");
people.splice(3,1);
//Print a second set of invitation messages, one for each person who is still in your list.
console.log("Hello "+people[0]+", Your invited today for dinner. Thank you!");
console.log("Hello "+people[1]+", Your invited today for dinner. Thank you!");
console.log("Hello "+people[2]+", Your invited today for dinner. Thank you!");
