const axios = require("axios");
const decriptyCaesar = require("./DecriptyCaesar");
const crypto = require("crypto");
const fs = require("fs");

const getDataFromCaesarCrypt = async () => {
  try {
    return await axios.get(
      "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=5806d4f485755b689b5677d1a1b0304ee5c2e606"
      // https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=e8a7f2f5e4fb9eb704ec9f6f62e553efe66216d2"
    );
  } catch (error) {
    console.error(error);
  }
};

const countBreeds = async () => {
  const dataCaesarCrypt = await getDataFromCaesarCrypt();
  const jsonDataEncript = JSON.stringify(dataCaesarCrypt.data);

  if (fs.existsSync("answer.json")) {
    const answer = JSON.stringify(require("./answer.json"));

    axios({
      method: "post",
      url:
        "https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=5806d4f485755b689b5677d1a1b0304ee5c2e606",
      // "https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=e8a7f2f5e4fb9eb704ec9f6f62e553efe66216d2",
      data: answer,
      file: "answer",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  } else {
    fs.writeFile("answer.json", jsonDataEncript, function (err) {
      if (err) throw err;

      const dataDecripty = decriptyCaesar();
      dataCaesarCrypt.data.decifrado = dataDecripty;
      const sha1Cript = crypto
        .createHash("sha1")
        .update(dataDecripty)
        .digest("base64");

      dataCaesarCrypt.data.resumo_criptografico = sha1Cript;
      const jsonString = JSON.stringify(dataCaesarCrypt.data);

      fs.writeFile("answer.json", jsonString, function (err) {
        if (err) throw err;
        console.log("File updated successfully.");
      });
    });
  }
};

countBreeds();
