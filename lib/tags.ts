export async function getAllTags() {
  const tags = await fetch(`${process.env.API_HOST}/tags`, {
    headers: { "x-api-key": process.env.X_API_KEY },
  }).then((response) => {
    return response.json();
  });

  return tags;
}
