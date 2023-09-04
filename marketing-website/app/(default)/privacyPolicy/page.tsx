import PrivacyPolicy from "./PrivacyPolicyComp";
import path from "path";
import React from "react";
import fs from "fs";
import grayMatter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const PrivacyPolicyPage = () => {
  const getPrivacyPolicyContent = async () => {
    const filePath = path.join(
      process.cwd(),
      "/app/(default)/privacyPolicy/privacy-policy.md"
    );

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { content } = grayMatter(fileContents);

    const processedContent = await remark().use(remarkHtml).process(content);
    const htmlContent = processedContent.toString();

    return htmlContent;
  };
  return <PrivacyPolicy content={getPrivacyPolicyContent()} />;
};

export default PrivacyPolicyPage;
