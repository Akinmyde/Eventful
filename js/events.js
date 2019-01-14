const cardROw = document.getElementsByClassName('row');


function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}


const url ='https://rocky-meadow-55707.herokuapp.com/api/v2/centers';
fetch(url)
  .then((res) => res.json())
  .then((data) => {

    let eventCenters = data.data.centers;
    console.log(); // Get the results

    for (let i = 0; i < eventCenters.length; i++) {
      eventCenters.name = document.ques
    }
    return eventCenters.map(function(centers) { // Map through the results and for each run the code below
      let colCard = createNode(`<div class="col-4"> <div class="card"> <img src="./images/placeholder.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Event Center Name</h5>
            <p class="card-text"><i class="fas fa-info"></i> Details</p>
            <div class="row">
              <div class="col-6 d-flex">
                <i class="fas fa-map-marker-alt mr-1"></i>:
                <p class="ml-2">location</p>
              </div>
              <div class="col-6 d-flex">
                <i class="fas fa-address-book mr-1"></i>:
                <p class="ml-2">Address</p>
              </div>
              <div class="col-6 d-flex">
                <i class="fas fa-chair mr-1"></i>:
                <p class="ml-2">chair</p>
              </div>
              <div class="col-6 d-flex">
                <i class="fas fa-users mr-1"></i>:
                <p class="ml-2">Capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>`), //  Create the elements we need
          img = createNode('img'),
          span = createNode('span');
      img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
      span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
      append(li, img); // Append all our elements
      append(li, span);
      append(cardROw, col-colCard);
    })
    //
    // name = data.name;
  });
  // let authors = data.results; // Get the results
  //     return authors.map(function(author) { // Map through the results and for each run the code below
  //       let li = createNode('li'), //  Create the elements we need
  //           img = createNode('img'),
  //           span = createNode('span');
  //       img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
  //       span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
  //       append(li, img); // Append all our elements
  //       append(li, span);
  //       append(ul, li);
