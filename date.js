exports.getDate = function()
{
  //Create a new date object
  const today = new Date();
  //Create a option for a date format string and use toLocaleDateString method
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  }
  let currentDay = today.toLocaleDateString("en-US", options);
  return currentDay;
}

exports.getDay = function()
{
  const today = new Date();
  const options = {
    weekday: "long"
  }
  let currentDay = today.toLocaleDateString("en-US", options);
  return currentDay;
}
