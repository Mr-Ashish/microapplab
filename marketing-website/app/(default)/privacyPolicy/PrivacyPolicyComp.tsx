// components/PrivacyPolicy.tsx

import React from "react";
import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

interface PrivacyPolicyProps {
  content: string;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = async (props) => {
  return (
    <div className="container mx-auto py-40">
      <div
        className="prose max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{ __html: await props.content }}
      />
    </div>
  );
};

export default PrivacyPolicy;
