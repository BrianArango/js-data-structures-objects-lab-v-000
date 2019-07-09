// Write your solution in this file!
<<<<<<< HEAD
const driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = driver;
  newDriver[key] = value;
  return newDriver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = { ...driver };
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
  delete driver[key];
  return driver;
}
=======
driver{}
>>>>>>> 6a7f851281cd356e5632a8a9dc92b3ae1e185179
