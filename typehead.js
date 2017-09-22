var typeHead = (function(){
    "use strict";
    var searchResultsDropDown = document.getElementById('searchResultsDropDown');
    function GetData(){
        var searchTextValue = $("#searchText").val();
        this.searchResults = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];

        var that = this;
        setTimeout(function()
          {
               var html = '<select>';
               var startValue = $("#searchText").val()[0];
               for(var i = 0; i < that.searchResults.length; i++) {
                    if(that.searchResults[i].startsWith(startValue))
                      html += "<option value='" + that.searchResults[i]+ "'>" + that.searchResults[i] + "</option>";
               }
               html += '</select>';
               searchResultsDropDown.innerHTML= html;

               searchResultsDropDown.style.visibility = "visible";
          }, 500);
    }

    function hideDropDown(){
      searchResultsDropDown.style.visibility = "hidden";
    }

    return {
      GetData: GetData,
      hideDropDown: hideDropDown
    };
}());
