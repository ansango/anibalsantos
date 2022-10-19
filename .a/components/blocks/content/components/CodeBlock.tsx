import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

export const CodeBlock = (props) => {
  return (
    <span className="code__block">
      <SyntaxHighlighter
        code={props.children || ""}
        language={props.language || "jsx"}
        style={style}
      />
    </span>
  );
};
