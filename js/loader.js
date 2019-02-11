window.onload = function() {
          var delayLoad;
          var loader = document.getElementById('myloader');

          function slowLoad() {
                    delayLoad = setTimeout(removeLoader, 1000);
          }
          slowLoad();

          function removeLoader() {
                    loader.style.display = 'block';
          }

}