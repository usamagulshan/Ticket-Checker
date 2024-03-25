// If-else Statement practice #1
/*let ticket_holder_age : number = 0
if(ticket_holder_age <= 5){
    console.log("This is a child, Child ticket fare is 0")
} else if(ticket_holder_age <= 20){
    console.log("You are a Teenagers, Ticket price for teenagers are 500")
} else if(ticket_holder_age <= 30){
    console.log("You are a adult, Ticket price for adults are 1000")
} else if(ticket_holder_age > 60){
    console.log("You are a senior citizen, Ticket price for senior citizens are 0")
} else {
    console.log("You are late, You lost your Flight")
}*/
var ticket_holder_age = 45;
if (ticket_holder_age >= 2 && ticket_holder_age <= 10) {
    console.log("You are a child, Ticket fee for a child is 0");
}
else if (ticket_holder_age >= 15 && ticket_holder_age <= 20) {
    console.log("You are a teenager, Ticket fee for teenagers are 500rs");
}
else if (ticket_holder_age >= 21 && ticket_holder_age <= 30) {
    console.log("You are adult, Ticket fee for adults are 1000rs");
}
else if (ticket_holder_age >= 40 && ticket_holder_age <= 60) {
    console.log("You are a senior citizen, Ticket fee for senior citizens are 0");
}
else {
    console.log("Sorry, You are late");
}
