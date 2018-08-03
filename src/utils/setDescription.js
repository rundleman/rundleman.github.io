export function setDescription(text) {
  const metaTag = document.querySelector('[name="description"]');

  if (metaTag) {
    metaTag.content = text;
  } else {
    const metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", text);
    document.head.appendChild(metaDescription);
  }
}
