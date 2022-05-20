
$("li").on("click", function () {
    highlightTab($(this).attr("value"));
    switchTab($(this).attr("value"));
});


function highlightTab(value) {
    $("li").each(function (index) {
        if ($(this).attr("value") == value) {
            $(this).css("color", "#6287ff");
        }
        else {
            $(this).css("color", "#fff");
        }
    })
}

function switchTab(value) {
    $(".table-wrapper").each(function (index) {
        if ($(this).attr("value") == value) {
            $(this).css("display", "block");
        }
        else {
            $(this).css("display", "none");
        }
    })
}

$(document).ready(function() {
    var outstandingSum = 0;
    $('#outstanding').dataTable( {
      orderCellsTop: true,
      fixedHeader: true,
      initComplete: function () {
          var api = this.api();

          // For each column
          api
              .columns()
              .eq(0)
              .each(function (colIdx) {
                  // Set the header cell to contain the input element
                  var cell = $('.filters th').eq(
                      $(api.column(colIdx).header()).index()
                  );
                  var title = $(cell).text();
                  $(cell).html('<input type="text" placeholder="' + title + '" />');

                  // On every keypress in this input
                  $(
                      'input',
                      $('.filters th').eq($(api.column(colIdx).header()).index())
                  )
                      .off('keyup change')
                      .on('keyup change', function (e) {
                          e.stopPropagation();

                          // Get the search value
                          $(this).attr('title', $(this).val());
                          var regexr = '({search})'; //$(this).parents('th').find('select').val();

                          var cursorPosition = this.selectionStart;
                          // Search the column for that value
                          api
                              .column(colIdx)
                              .search(
                                  this.value != ''
                                      ? regexr.replace('{search}', '(((' + this.value + ')))')
                                      : '',
                                  this.value != '',
                                  this.value == ''
                              )
                              .draw();

                          $(this)
                              .focus()[0]
                              .setSelectionRange(cursorPosition, cursorPosition);
                      });
              });
      },
        "footerCallback": function ( row, data, start, end, display ) {
            var api = this.api(), data;

            // Remove the formatting to get integer data for summation
            var intVal = function ( i ) {
                return typeof i === 'string' ?
                    i.replace(/,|\sm\p{No}/gu, '')*1 :
                    typeof i === 'number' ?
                        i : 0;
            };




        }
    } );

    $('#outstanding tbody').on('click', 'tr', function () {

        var outstandingVolume = parseInt(($(this).find('td:eq(6)').last().html()).replace(/,|\sm\p{No}/gu, ''));
        if($(this).hasClass('selected')) {
           outstandingSum -= outstandingVolume;
        } else {
           outstandingSum += outstandingVolume;
        }
                            $('.outstandingSum').html((outstandingSum.toLocaleString('en-GB')) +' m<sup>3</sup>');
         $(this).toggleClass('selected');
    } );

} );
