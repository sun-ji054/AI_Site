export default function ({code, filename}) {
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
            {filename}
          </span>
        </div>
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm text-slate-300">
          <code className="code-box whitespace-pre">
            {code}
          </code>
        </pre>
        </div>
      </div>
    </>
  );
}

{/*이런 식으로 씁니다
<Code code={`df.isnull().sum()
# Outlier detection using IQR
Q1 = df['column'].quantile(0.25)
Q3 = df['column'].quantile(0.75)`} filename={"data_cleaning.py"}/>*/}
