

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var searchInput = nameInputEl.value.trim();
  
    if (searchInput) {
      getUserRepos(searchInput);
  
      repoContainerEl.textContent = '';
      nameInputEl.value = '';
    } else {
      alert('Please enter a GitHub username');
    }
  };

function getApi() {
    var requestURL = 'https://www.loc.gov/?fo=json';

    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }

  getApi();
