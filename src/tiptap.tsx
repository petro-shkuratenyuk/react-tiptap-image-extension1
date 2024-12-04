"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageResize from "tiptap-extension-resize-image";
const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, ImageResize],
    content: `<img src="https://i.imgur.com/oFenymN.jpeg" />`,
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
