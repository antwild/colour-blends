export default async function getRandomColours() {
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

export async function getColoursFromSelection() {
  const fetchColours = await fetch("http://colormind.io/api/", {
    method: "POST",
    body: JSON.stringify({
      result: [[49, 69, 76], [33, 99, 113], "N", "N", "N"],
      model: "default"
    })
  });
  const outputColours = fetchColours.json();
  return outputColours;
}
