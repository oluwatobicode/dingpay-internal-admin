// RichTextEditor.tsx
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor = ({
  value,
  onChange,
  placeholder,
}: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: placeholder || "Write here...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base focus:outline-none min-h-[120px] px-3 py-2 w-full",
      },
    },
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  // Helper to add link
  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  // Button styles for the toolbar
  const getBtnClass = (isActive: boolean) =>
    `p-1.5 rounded transition-colors ${
      isActive
        ? "bg-gray-200 text-black"
        : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
    }`;

  return (
    // The Main Container - Matches your input style
    <div className="w-full border border-[#D4DAE3] rounded-[12px] overflow-hidden focus-within:border-gray-400 transition-colors bg-white">
      {/* Toolbar Section */}
      <div className="flex items-center gap-1 border-b border-[#D4DAE3] px-2 py-2 bg-white">
        {/* H - Heading */}
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={getBtnClass(editor.isActive("heading", { level: 2 }))}
          title="Heading"
        >
          <span className="font-bold text-lg">H</span>
        </button>

        {/* B - Bold */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={getBtnClass(editor.isActive("bold"))}
          title="Bold"
        >
          <span className="font-serif font-bold text-lg">B</span>
        </button>

        {/* I - Italic */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={getBtnClass(editor.isActive("italic"))}
          title="Italic"
        >
          <span className="font-serif italic text-lg font-bold">I</span>
        </button>

        {/* Link Icon */}
        <button
          type="button"
          onClick={setLink}
          className={getBtnClass(editor.isActive("link"))}
          title="Link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </button>

        {/* U - Underline */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={getBtnClass(editor.isActive("underline"))}
          title="Underline"
        >
          <span className="font-serif text-lg underline font-bold">U</span>
        </button>
      </div>

      {/* Editor Content Area */}
      <EditorContent editor={editor} />

      {/* Custom CSS for Placeholder */}
      <style>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          color: #adb5bd;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
