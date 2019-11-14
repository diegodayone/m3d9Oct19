const url = "https://strivetestapi.azurewebsites.net/api/agenda/";

getEvents = async () => {
  const response = await fetch(url); //this is getting the response from the API fetching the events
  return await response.json(); //this is transforming the response in a json
};

getEvent = async id => {
  const response = await fetch(url + id); //this is getting the response from the API fetching the event
  return await response.json(); //this is transforming the response in a json
};

saveEvent = async event => {
  const response = await fetch(url, {
    //the POST is made with the fetch method as well
    method: "POST", //declaring the CRUD method
    body: JSON.stringify(event), //Here i'm stringifying the object
    headers: new Headers({
      "Content-Type": "application/json" //this is required by our APIS, we need to declare the content type
    })
  });
  return response; //returning the response because the frontend need to check the ok property
};

deleteEvent = async id => {
  const response = await fetch(url + id, {
    method: "DELETE"
  })
  return await response.json();
}
