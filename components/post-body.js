import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";
import RichTextAsset from "./rich-text-asset";
import Newsletter from "../components/newsletter";

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
      <div className="max-w-4xl mx-auto text-dark">
        <div className={markdownStyles["markdown"]}>
          {documentToReactComponents(
            content.json,
            customMarkdownOptions(content)
          )}
        </div>
        <div className="mt-20">
          <Newsletter />
        </div>
      </div>
    </>
  );
}
