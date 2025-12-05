const mapsFunction = async () => {
  const map = new Map();
  map.set(0, "RealCodingRJ");
  map.set(1, "CodingGarden");

  const mapValues = map.values();

  for (const maps of mapValues) {
    console.log(maps);
  }

}
