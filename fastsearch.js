(() => {
  // <stdin>
  var fuse;
  var firstRun = true;
  var updateSearchResultVisibility = function() {
    $("#search-results").css({ "display": $("#search-input").val().length < 2 || $("#search-results").children().length == 0 ? "none" : "block" });
  };
  $("#search-input").on("change", updateSearchResultVisibility);
  $("#search-input").on("keydown", updateSearchResultVisibility);
  $("#search-input").on("blur", function() {
    $("#search-results").css({ "display": "none" });
  });
  if ($("#search-input")) {
    if (firstRun) {
      loadSearch();
      firstRun = false;
    }
  }
  $("#search-input").on("keyup", function(event) {
    executeSearch(this.value);
    updateSearchResultVisibility();
  });
  function loadSearch() {
    fetchJSONFile("https://skowalak.github.io/bay/index.json", function(data) {
      var options = {
        shouldSort: true,
        location: 0,
        distance: 100,
        threshold: 0.4,
        minMatchCharLength: 2,
        keys: [
          "title"
        ]
      };
      fuse = new Fuse(data, options);
    });
  }
  function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
          var data = JSON.parse(httpRequest.responseText);
          if (callback) callback(data);
        }
      }
    };
    httpRequest.open("GET", path);
    httpRequest.send();
  }
  function executeSearch(term) {
    let results = fuse.search(term);
    $("#search-results").empty();
    if (results.length >= 0) {
      for (const result of results.slice(0, 5)) {
        $(`<li><a href="${result.item.permalink}" tabindex="0">${result.item.title}</a></li>`).appendTo($("#search-results"));
      }
    }
  }
})();
