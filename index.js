const axios = require("axios");
const decriptyCaesar = require("./DecriptyCaesar");
const fs = require("fs");

const getDataFromCaesarCrypt = async () => {
  try {
    return await axios.get(
      "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=5806d4f485755b689b5677d1a1b0304ee5c2e606"
    );
  } catch (error) {
    console.error(error);
  }
};

const countBreeds = async () => {
  const dataCaesarCrypt = await getDataFromCaesarCrypt();
  const jsonDataEncript = JSON.stringify(dataCaesarCrypt.data);

  if (fs.existsSync("answer.json")) {
    console.log("File exist");
  } else {
    fs.writeFile("answer.json", jsonDataEncript, function (err) {
      if (err) throw err;
      // console.log("File is created successfully.");

      const dataDecripty = JSON.stringify(decriptyCaesar());
      const answerJson = require("./answer.json");

      fs.writeFile("answer.json", dataDecripty, function (err) {
        // answerJson["resumo_criptografico"] = dataDecripty;
        if (err) throw err;
        console.log("File updated successfully.");
      });
    });
  }
};

countBreeds();
