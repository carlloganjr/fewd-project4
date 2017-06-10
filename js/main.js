function searchInput() {
  $('#search').on('keyup', function() {
    var searchData = $(this).val();
    $('li a').each(function() {
      var textSearch = $(this).attr('title');
      if( textSearch.search(new RegExp(searchData, 'i')) < 0) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });
}

searchInput();
