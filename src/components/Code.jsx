export default function () {
  const codeString = `function helloWorld() {
  console.log("Hello, World!");
}`;

  return (
    <>
      <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
          <div className="flex space-x-2">
            <div className="bg-red-500 w-3 h-3 rounded-full " />
            <div className="bg-yellow-500 w-3 h-3 rounded-full " />
            <div className="bg-green-500 w-3 h-3 rounded-full " />
          </div>
          <span className="text-xs text-slate-400 font-mono">
            grid_search_example.py
          </span>
        </div>
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm text-slate-300">
          <code className="code-box">
            {codeString}
          </code>
        </pre>
        </div>
      </div>
    </>
  );
}
