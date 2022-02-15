export async function getRandomColours() {
  const fetchColours = await fetch("http://colormind.io/api/", {
    method: "POST",
    body: JSON.stringify({
      model: "default"
    })
  })
    .then(result => {
      return result.json();
    })
    .then(data => {
      return data.result;
    });
  const outputColours = fetchColours;
  return outputColours;
}

export async function getColoursFromSelection(rgbValue) {
  const fetchColours = await fetch("http://colormind.io/api/", {
    method: "POST",
    body: JSON.stringify({
      result: [[rgbValue], "N", "N", "N", "N"],
      model: "default"
    })
  })
    .then(result => {
      return result.json();
    })
    .then(data => {
      return data.result;
    });
  const outputColours = fetchColours;
  return outputColours;
}
