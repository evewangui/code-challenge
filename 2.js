//This function checks the speed in which the car is moving at
function checkSpeed(speed) {
    //constants for speed
const speedLimit = 70;
const kmPerPoint = 5;

if(speed <= speedLimit ){
    return 'OK';
} 
else{
    //constant used to show the points gotten
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points > 12) {
        return ('License suspended');}
        else {
            return ('Points: ' + points);
        }
    }
}
console.log(checkSpeed(60))