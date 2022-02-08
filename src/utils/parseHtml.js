import parse from "html-react-parser";
import DOMPurify from "dompurify";

const parseHtml = (htmlString) => {
  const cleanHtmlString = DOMPurify.sanitize(htmlString);
  const tagDeletedHtml = cleanHtmlString.replace(/(<([^>]+)>)/gi, "");
  const thumbnail = cleanHtmlString.match(/<img.*?src=['"](.*?)['"]/);
  const parsedhtml = parse(cleanHtmlString);
  return { tagDeletedHtml, parsedhtml, thumbnail };
};

export default parseHtml;
