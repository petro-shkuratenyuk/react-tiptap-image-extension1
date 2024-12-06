"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageResize from "tiptap-extension-resize-image";
const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, ImageResize],
    content: `<div><p>asdasd</p><img src="https://i.imgur.com/oFenymN.jpeg" /><p>zzxcc</p></div>`,
  });


  const getHTML = () => {
    const html = editor?.getHTML()
    console.log(html)
  }
  return (
      <div>
        <button onClick={() => getHTML()}>click me</button>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
