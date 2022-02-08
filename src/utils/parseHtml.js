import parse from "html-react-parser";
import DOMPurify from "dompurify";

const parseHtml = (htmlString) => {
  const cleanHtmlString = DOMPurify.sanitize(htmlString);
  const html = parse(cleanHtmlString);
  return html;
};

export default parseHtml;
