import PrivacyPolicy from "./PrivacyPolicyComp";
import path from "path";
import React from "react";
import fs from "fs";
import grayMatter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const PrivacyPolicyPage = () => {
  const getPrivacyPolicyContent = async () => {
    console.log("1 getStaticProps, loading");
    const filePath = path.join(
      process.cwd(),
      "/app/(default)/privacyPolicy/privacy-policy.md"
    );
    console.log("2 getStaticProps, loading", filePath);

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { content } = grayMatter(fileContents);

    const processedContent = await remark().use(remarkHtml).process(content);
    const htmlContent = processedContent.toString();
    console.log("3 getStaticProps", htmlContent);

    return htmlContent;
  };
  return <PrivacyPolicy content={getPrivacyPolicyContent()} />;
};

export default PrivacyPolicyPage;
