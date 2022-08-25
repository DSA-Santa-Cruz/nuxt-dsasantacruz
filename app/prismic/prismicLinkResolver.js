export default (doc) => {
  if (doc.url) {
    return doc.url;
  }
  if (doc && typeof doc === "object") {
    switch (doc.type) {
      case "home":
        return "/";
      case "about":
        return "/about/";
      case "article":
        return `/articles/${doc.uid}/`;
      case "efforts":
        return "/working-groups/";
      case "events":
        return "/events/";
      case "page":
        return `/${doc.uid}/`;
      case "effort":
        return `/working-groups/${doc.uid}/`;
      case "join":
        return "/join/";
      default:
        break;
    }
  }
  return null;
};
