const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList();
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
    });
});

//
//TESTS
// charactersAPI.getFullList();
// charactersAPI.getOneRegister(2);
// charactersAPI.createOneRegister({
//   name: "Harry Potter",
//   occupation: "Wizard",
//   weapon: "Wand",
//   cartoon: false,
// });
// charactersAPI.updateOneRegister(3, { occupation: "fry-cook" });
// charactersAPI.deleteOneRegister(2);
