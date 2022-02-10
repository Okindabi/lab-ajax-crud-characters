class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then((results) => {
        console.log("Results", results.data);
        // res.json(results.data.fact);
      })
      .catch((err) => {
        console.log("error was found", err);
      });
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + "/characters/" + id)
      .then((results) => {
        console.log("Results", results.data);
        // res.json(results.data.fact);
      })
      .catch((err) => {
        console.log("error was found:", err);
      });
  }

  createOneRegister(characterInfo) {
    axios
      .post(this.BASE_URL + "/characters", characterInfo)
      .then((results) => {
        console.log("results:", results);
      })
      .catch((err) => {
        console.log("error was found:", err);
      });
  }

  updateOneRegister(id, updatedInfo) {
    axios
      .patch(this.BASE_URL + "/characters/" + id, updatedInfo)
      .then((results) => {
        console.log("results:", results);
      })
      .catch((err) => {
        console.log("error was found:", err);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(this.BASE_URL + "/characters/" + id)
      .then((results) => {
        console.log("results:", results);
      })
      .catch((err) => {
        console.log("error was found:", err);
      });
  }
}
