export async function getAllTags() {
  const tags = await fetch(`${process.env.API_HOST}/tags?limit=100`, {
    headers: { "x-api-key": process.env.X_API_KEY },
  }).then((response) => {
    return response.json();
  });

  return tags;
}
