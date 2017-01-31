$(function() {
  $.ajax({
      url: "https://www.codeschool.com/users/aeonblue3.json"
    , dataType: "jsonp"
    , success: function(data) {
        var html = '';

        data.courses.completed.forEach(function(course, i) {
          html += "<div class=\"course\">\n" +
                  "\t<h3>" + course.title + "</h3>\n" +
                  "\t<img src=\"" + course.badge + "\">\n" +
                  "\t<a href=\"" + course.url + "\" target=\"_blank\" class=\"btn btn-primary\">See Course<\a>\n" +
                  "</div>\n";
        }, this);
        $("#badges").append($(html));
      }
  });
});
