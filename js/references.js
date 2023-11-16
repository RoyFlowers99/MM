function highlight() {
  const urlParams = new URLSearchParams(window.location.search);
  const highlightText = urlParams.get('highlight');
  return(String(highlightText));
  };

$(document).ready(function() {
function highlightElements(targetString) {
  $('section>article>ul>li:contains(' + targetString +')').each(function() {
    // Replace the target string with a span having a yellow background
    const content = $(this).html().replace(new RegExp('(' + targetString + ')', 'gi'), '<span style="background-color: yellow;">$1</span>');
    $(this).html(content);
      });
  }
  highlightElements(highlight())
});