$(document).ready(
  // Initial function on loading page
  function() {     

    // Var definitions
    // -------------------------------------  
    var clickedCount = 0;
    var elementId;
    // var data_index;
    var clickedTxt; 
    var clickedSteps = []; // Array containing all click events info
    var quadrantBrief;
    var projectsTxt = "My projects are my learning tools. Thanks to them I keep educating myself into the coding world. Alphabet is aimed to translate simultaneously in various languages and Tourtrip is a holiday planner."
    displayNavLogo();

    // Function to track user click events.   
    function stepTrack() {      
      clickedSteps.push(clickedCount);
      clickedSteps.push(elementId);
      clickedSteps.push(clickedTxt);      
      console.log(clickedSteps);
    };
    
    // Function grouping jQuery calls to fadeIn quadrant information box. 
    function quadrantInfoFadeIn() {
      $("#qinfo").fadeIn(650);
      //Flex display call out to apply properties after fadeIn   
      $("#qinfo").css("display", "flex");
    };
    // Function to identify element from quadrant and export to quadrant info box elements.
    function exportQuadrantElement() { 
      document.getElementById("qinfo_title").innerHTML = clickedTxt;      
      document.getElementById("qinfo_link").innerHTML = clickedTxt;
    };
    function exportQuadrantBrief() {
      switch (clickedTxt){
        case "projects":
          document.getElementById("qinfomain").innerHTML = projectsTxt;
          break;
        default :
          document.getElementById("qinfomain").innerHTML = "NOT UPDATED";
          // CONTINUE BUILDING CASES / BRIEFINGS FOR EACH DIFFERENT CASE
      }
    };

    // LOGO FUNCTIONS / EVENTS
    // -----------------------

    function displayNavLogo() {
      $("#wrapper_logo").fadeOut();
      $("#initial_logo").fadeOut(625);
      $("#wrapper_sub_logo").fadeOut();
      $("#second_logo").fadeOut(625);
      quadrantsFadeOut();
      $("#nav_logo").attr("src", "docs/img/nav_logo.png");
      $("#nav_logo").attr("alt", "Navigation");
      
      $("#wrapper_nav").fadeIn();
      $("#wrapper_nav").attr("data", "000");
      $("#nav_logo").fadeIn(1650);
    };
    function displayInitialLogo() {
      $("#wrapper_nav").fadeOut();
      $("#nav_logo").fadeOut(625);
      $("#wrapper_sub_logo").fadeOut();
      $("#second_logo").fadeOut(625);
      $("#wrapper_logo").fadeIn();
      $("#initial_logo").fadeIn(1650);
      $("#initial_logo").attr("src", "docs/img/mylogo.jpg");
      $("#initial_logo").attr("alt", "Meddom logo");
      
      $("#wrapper_logo").attr("data", "001");
    };
    // Function to display a different image as the central logo attending to the quadrant element clicked.
    function displaySelectedLogo() {
      switch (clickedTxt) {
        case "portfolio":
          $("#second_logo").attr("src", "docs/img/portfolio.jpg");
          $("#second_logo").attr("alt", "My portfolio");
          clickedTxt = "My portfolio logo";
          break;
        case "projects":
          $("#second_logo").attr("src", "docs/img/projects.jpg");
          $("#second_logo").attr("alt", "My projects");
          clickedTxt = "My projects logo";
          break;
        case "github":
          $("#second_logo").attr("src", "docs/img/gitHub.jpg");
          $("#second_logo").attr("alt", "My gitHub");
          clickedTxt = "My gitHub logo";
          break;
        case "about me":
          $("#second_logo").attr("src", "docs/img/aboutme.jpg");
          $("#second_logo").attr("alt", "About me");
          clickedTxt = "About me logo";
          break;
        default:
          $("#initial_logo").attr("src", "docs/img/mylogo.jpg");
          $("#initial_logo").attr("alt", "Meddom logo");
      }
    };

    // jQuery targetting fake nav menu to fadeIn quadrants elements. 
    $("#wrapper_nav").click(function() {
        elementId = $(this).attr("id");
        clickedTxt = "nav_logo";
        clickedCount = clickedCount+1;
        stepTrack();
        displayInitialLogo();
        quadrantsFadeIn();
        addQuadrantsText();
        $("#wrapper_nav").fadeOut(625);
    });  

    // QUADRANTS  FUNCTIONS / EVENTS
    // -----------------------------

    // Function grouping jQuery calls to fadeIn all quadrants, texts and central logo image. 
    function quadrantsFadeIn() {
      $("#wrapper_quadrant").fadeIn(550);
      $("#q01").fadeIn(1650);
      $("#q02").fadeIn(450);
      $("#q03").fadeIn(850);
      $("#q04").fadeIn(1250);
      // Flex display call out to apply properties after fadeIn and move texts to container bottom
      $("#q03").css("display", "flex");
      $("#q04").css("display", "flex");
    };
    // Function grouping jQuery calls to fadeOut quadrants, texts, quadrant info box and initial_logo image. 
    function quadrantsFadeOut() {
      $("#wrapper_quadrant").fadeOut(550);
      /*$("#q01").fadeOut(450);*/
      /*$("#q02").fadeOut(1050);*/
      /*$("#q03").fadeOut(850);*/
      /*$("#q04").fadeOut(650);*/
    };

    function addQuadrantsText() {
      switch (clickedTxt) {
        case "portfolio":
          document.getElementById("q01").innerHTML = "Rock 'n' r";
          document.getElementById("q02").innerHTML = "Re - taped";
          document.getElementById("q03").innerHTML = "";
          document.getElementById("q04").innerHTML = "";
          break;
        case "projects":          
          document.getElementById("q01").innerHTML = "Alphabet";
          document.getElementById("q02").innerHTML = "Tourtrip";
          document.getElementById("q03").innerHTML = "";
          document.getElementById("q04").innerHTML = "";
          break;
        case "github":
          document.getElementById("q01").innerHTML = "sp01";
          document.getElementById("q02").innerHTML = "sp02";
          document.getElementById("q03").innerHTML = "sp03";
          document.getElementById("q04").innerHTML = "sp04";
          break;
        case "about me":
          document.getElementById("q01").innerHTML = "sp01";
          document.getElementById("q02").innerHTML = "sp02";
          document.getElementById("q03").innerHTML = "sp03";
          document.getElementById("q04").innerHTML = "sp04";
          break;
        case "home":
          document.getElementById("q01").innerHTML = "portfolio";
          document.getElementById("q02").innerHTML = "projects";
          document.getElementById("q03").innerHTML = "github";
          document.getElementById("q04").innerHTML = "about me";
          break;
        case "wrapper_nav":
          document.getElementById("q01").innerHTML = "portfolio";
          document.getElementById("q02").innerHTML = "projects";
          document.getElementById("q03").innerHTML = "github";
          document.getElementById("q04").innerHTML = "about me";
          break;
        case "nav_logo":
          document.getElementById("q01").innerHTML = "portfolio";
          document.getElementById("q02").innerHTML = "projects";
          document.getElementById("q03").innerHTML = "github";
          document.getElementById("q04").innerHTML = "about me";
      }
    };
    // jQuery targetting quadrants elements to fadeOut non clicked ones and to fade In and optimize quadrant info box. 
    $("#q01").click(function() {
      elementId = $(this).attr("id");
      clickedTxt = document.getElementById("q01").innerHTML;
      clickedCount = clickedCount+1;
      document.getElementById("qinfomain").innerHTML = quadrantBrief;
      stepTrack();
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      exportQuadrantBrief();
    });
    $("#q02").click(function() {
      elementId = $(this).attr("id");
      clickedTxt = document.getElementById("q02").innerHTML;
      clickedCount = clickedCount+1;
      stepTrack();
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      exportQuadrantBrief();
    });
    $("#q03").click(function() {
      elementId = $(this).attr("id");
      clickedTxt = document.getElementById("q03").innerHTML;
      clickedCount = clickedCount+1;
      stepTrack();
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      exportQuadrantBrief()
    });
    $("#q04").click(function() {
      elementId = $(this).attr("id");
      clickedTxt = document.getElementById("q04").innerHTML;
      clickedCount = clickedCount+1;
      stepTrack();
      quadrantsFadeOut();
      quadrantInfoFadeIn();
      exportQuadrantElement();
      exportQuadrantBrief()
    });

    // QUADRANTS INFO BOX EVENTS
    // -------------------------
    // jQuery targetting quadrant info box button home to display quadrants and central logo.
    $("#qinfo_link").click(function() { 
      elementId = $(this).attr("id");
      clickedCount = clickedCount+1;
      clickedTxt = document.getElementById(elementId).innerHTML;
      stepTrack();
      $("#wrapper_logo").fadeOut(1650);
      $("#wrapper_sub_logo").fadeIn();
      $("#second_logo").fadeIn(625);
      quadrantsFadeOut();
      addQuadrantsText();
      quadrantsFadeIn();
      displaySelectedLogo();
    });
    $("#qinfo_back").click(function() {
      elementId = $(this).attr("id");
      clickedCount = clickedCount-1;
      clickedTxt = ""
      stepTrack();
      displayInitialLogo();
      quadrantsFadeIn();
      addQuadrantsText();
      $("#qinfo").fadeOut(1250);
    });
    $("#qinfo_home").click(function() {
      elementId = $(this).attr("id");     
      clickedTxt = document.getElementById(elementId).innerHTML;
      stepTrack();
      clickedCount = 0
      clickedSteps = [];
      displayNavLogo();
      $("#qinfo").fadeOut(1250);
    });
  }
);
