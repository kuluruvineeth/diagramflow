import { generate } from "@/lib/generate";
import { TemplateEnum } from "@/lib/prompt-by-template";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { input, selectedTemplate = TemplateEnum.FLOWCHART } = req.body;

  if (!input) {
    return res.status(400).json({ message: "No input in the request" });
  }

  try {
    const ans = await generate({ input, selectedTemplate });

    const text = ans.text
      .replaceAll("```", "")
      .replaceAll(`"`, `'`)
      .replaceAll(`end[End]`, `ends[End]`)
      .replace("mermaid", "");

    return res.status(200).json({ text });
  } catch (e: any) {
    return res.status(400).json(e);
  }
}
