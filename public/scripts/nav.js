$(() => {
  $(".login").on("click", function (event) {
    event.preventDefault();

    const username = $(this).text();
    const user_id = (username === "Ash") ? 1 : 2;
    console.log(user_id);

    $.ajax({
      method: "POST",
      url: "/login",
      data: { user_id: user_id }
    }).done(function () {
      location.reload();
    });
  });
});
