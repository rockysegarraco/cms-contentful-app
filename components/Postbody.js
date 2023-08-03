import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";
import RichTextAsset from "./rich-text-asset";

const customMarkdownOptions = (content) => ({  
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
});

export default function PostBody({ content }) {
  return (
    <>
      <div className="max-w-3xl mx-auto text-dark-950 font-normal">
        <div className={markdownStyles["markdown"]}>
          {documentToReactComponents(
            content,
            customMarkdownOptions(content)
          )}
        </div>
        <div>
        <iframe
          src=(formId.url)
          height="800"
          width="600"
          frameborder="0"
        ></iframe>
        <script src="//tfaforms.com/js/iframe_resize_helper.js"></script>
        </div>
      </div>
    </>
  );
}
