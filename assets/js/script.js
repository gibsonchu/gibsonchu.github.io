//** Big thanks to my friend Emily for helping me figure this out. **//

$(document).ready(function() {
  let icon_path_prefix = "";
  if (window.location.href.includes("projects")) {
    icon_path_prefix = "../"
  } 

  let curr_mode = sessionStorage.getItem("mode");
  if (curr_mode == "day") {
    $("body").addClass("day");
    $("body").removeClass("night");
    $('input[type=checkbox').prop("checked", false);
    $("#home").attr("src", icon_path_prefix + "assets/img/about/transparent.png");
    $(".switch-mode-label").text("Use night mode");
  } else {
    $("body").removeClass("day");
    $("body").addClass("night");
    $('input[type=checkbox').prop("checked", true);
    $("#home").attr("src", icon_path_prefix + "assets/img/about/transparent-inverse.png");
    $(".switch-mode-label").text("Use day mode");
  }

  let selectedTags = ["product", "design", "strategy", "data", "media"];
  $(".landing-card-tag").click(function() {
    $(this).toggleClass("not-selected-tag");
    if ($(this).hasClass("not-selected-tag")) {
      let currentClass = $(this).attr('class').split(' ').slice(-2)[0];
      selectedTags = selectedTags.filter(item => item != currentClass);
      $(".card." + currentClass).hide();
    } else {
      let currentClass = $(this).attr('class').split(' ').slice(-1)[0];
      selectedTags.push(currentClass);
    }
    updateGrid();
  })

  function updateGrid() {
    for (let i = 0; i < selectedTags.length; i++) {
      let className = selectedTags[i];
      $("." + className).fadeIn();
    }
  }

  $('input[type=checkbox]').change(function(){
    if($(this).is(':checked')) {
        sessionStorage.setItem("mode", "night");
        $("body").removeClass("day");
        $("body").addClass("night");
        $("#home").attr("src", icon_path_prefix + "assets/img/about/transparent-inverse.png");
        $(".switch-mode-label").text("Use day mode");
    } else {
        // Checkbox is not checked..
        sessionStorage.setItem("mode", "day");
        $("body").removeClass("night");
        $("body").addClass("day");
        $("#home").attr("src", icon_path_prefix + "assets/img/about/transparent.png");
        $(".switch-mode-label").text("Use night mode");
    }
  });

  /* When clicking on back-to-top, brings user to top of page */
  $(".back-to-top").click(function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
})
