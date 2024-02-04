function distanceFromHqInBlocks (blocks) {
  const hqLocation = 42;//building location
  return Math.abs(hqLocation - blocks);

}

function distanceFromHqInFeet (pickUpLocation) {
  const hqLocation = 42;//building location
  const distanceInBlocks = Math.abs(pickUpLocation - hqLocation);
  const distanceInFeet = distanceInBlocks * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(start,destination) {
	return Math.abs(start-destination)*264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
    return 0;
  } else if (distance >= 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
