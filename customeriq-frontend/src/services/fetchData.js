export async function fetchData(path) {
  const res = await fetch(path);

  if (!res.ok) {
    throw new Error("Error fetching: " + path);
  }

  return res.json();
}
