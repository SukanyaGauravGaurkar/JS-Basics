const speedlimit = 70
const kmPerPoint = 5


function checkSpeed (speed) {
    if (speed < speedlimit + kmPerPoint) {
       console.log('OK');
       return;
    }

    const points = Math.floor((speed - speedlimit)/kmPerPoint)
    if (points > 12)
        console.log('Lincense Suspended');
    else
        console.log('Points', points)
} 