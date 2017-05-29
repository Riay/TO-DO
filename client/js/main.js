$('.remove').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  const url = $thisElement.attr("href")
  const method = 'DELETE'
  $.ajax({ url, method })
    .done( response => {
      console.log(url)
      $thisElement.parents('.list-group-item').remove()
    })

})

$('.list-group .edit').on('click', function(e) {
  e.preventDefault();
  const $thisElement = $(this)
  $thisElement
    .parent('.list-group-item')
      .find("form input")
        .removeClass("hidden")
        .focus()
        .end()
      .find("span")
        .addClass("hidden")
})

$('.edit-form ').on('submit', function(e) {
  e.preventDefault();
 console.log("ok")
  const $thisElement = $(this)
  const url = $thisElement.attr("action")
  const name = $thisElement.find('input').val()
  const method = 'PUT'

  $.ajax({
    url,
    method,
    data: { name}
  })
  .done( response => {
    $thisElement
      .siblings("span.name")
        .text(name)
        .removeClass("hidden")
        .end()
      .find("input")
        .addClass("hidden")


   $thisElement
     .siblings("p.date")
       .removeClass("hidden")
       location.reload()
       
   
  })
})
$('.list-group .ok').on('click', function(e) {
    e.preventDefault()

    const $thisElement = $(this)
    const url = $thisElement.attr("href")
    const method = 'PUT'
    const data = 'completedTask=' + true

    $.ajax({ url, method, data })
      .done( response => {
          location.reload()
      })
})

