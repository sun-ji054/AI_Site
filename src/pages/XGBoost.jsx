import Navigation from "../components/Navigation";
import { UserRoundCog } from "lucide-react";
import { CircleCheck } from "lucide-react";

export default function XCBoost() {
  return (
    <>
      <Navigation />
      <section id="index" className="bg-slate-50 ">
        <div className="items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 mb-6 border rounded-3xl border-blue-100 text-blue-600 bg-blue-50 font-semibold text-sm">
            모델 성능 향상을 위한 핵심 전략
          </div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl tracking-tight leading-tight">
            하이퍼파라미터
            <br />
            <span className="bg-linear-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              튜닝 가이드
            </span>
          </h1>
          <p className="leading-7 md:text-xl text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            모델의 성능을 극대화하는 방법은 다양합니다.
            <br />
            학습 데이터를 정제하거나 중요한 변수를 선택하는 것도 중요하지만,
            <br />
            오늘은 <strong>모델의 하이퍼파라미터를 최적화</strong>하는 방법에
            대해 깊이 있게 알아봅니다.
          </p>
        </div>
      </section>

      {/* Concept Comparison Section */}
      <section
        id="concept"
        className="flex justify-center items-center px-7 py-14 bg-white border-y border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl mb-14">개념 바로잡기</h2>

          <div className="item-center gap-3 mb-4 bg-slate-100 px-7 py-7 border border-slate-200 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="flex gap-3 items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <UserRoundCog color="blue" />
              </div>
              <h3 className="font-bold text-lg">
                하이퍼파라미터 (Hyperparameter)
              </h3>
            </div>

            <p className="text-slate-600 text-left mb-4">
              사용자가 <strong>직접 설정</strong>하여 모델의 학습 방식을
              조절하는 값입니다. 도메인 지식을 기반으로 수동 설정하거나, 튜닝
              알고리즘을 통해 찾습니다.
            </p>

            <div>
              <ul className="space-y-2 text-sm text-slate-700 bg-white p-4 rounded-xl border border-slate-100">
                <li className="flex items-center gap-2">
                  <CircleCheck color="green" /> 의사결졍나무의 최대 깊이
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck color="green" /> 딥러닝의 학습률 (Learning Rate)
                </li>
                <li className="flex items-center gap-2">
                  <CircleCheck color="green" /> 학습 반복 횟수 (Epoch)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 그리드 서치 */}
      <section
        id="Grid Seach"
        className="py-16 bg-slate-100 border-b border-slate-600"
      >
        <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px8">
          <div className="bg-slate-900 rounded-xl shadow-2xl overflow-hidden ">
            <div className="bg-slate-800 py-2 px-4 items-center flex justify-between border-b border-slate-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-slate-400 font-mono">
                grid_search_example.py
              </span>
            </div>

            <pre className="code-block text-sm text-slate-300 p-5">
              <span className="text-purple-400">from</span>{" "}
              sklearn.model_selection{" "}
              <sapn className="text-purple-400">import</sapn> GridSearchCV{" "}
              <span class="text-slate-500"> # 그리드 서치 모듈</span>
            </pre>
          </div>
        </div>
      </section>
    </>
  );
}
