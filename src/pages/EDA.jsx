import Navigation from "../components/Navigation";
import Code from "../components/Code";
import { BrushCleaning, SearchCheck, FileAxis3d } from "lucide-react";

export default function EDA() {
  return (
    <>
      <Navigation />

      {/* index */}
      <section id="index" className="bg-lime-50 py-30 border-b border-lime-200">
        <div className="max-w-5xl mx-auto items-center text-center">
          <h1 className="text-lime-950 text-2xl font-black mb-12 leading-tight tracking-tight">
            데이터를 제대로 이해하는 첫걸음, <br />
            <span className="text-lime-800 text-4xl tracking-tight">
              EDA (탐색적 데이터 분석)
            </span>
          </h1>
          <p className="text-gray-600">
            데이터의 패턴 발견과 가설 설정을 위한 필수 과정
          </p>
        </div>
      </section>

      {/* Concept */}
      <section
        id="concept"
        className=" bg-white py-16 px-20 border-b border-lime-200"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-lime-700 text-4xl font-extrabold mb-12 text-center">
            EDA의 정의
          </h2>

          {/* 인용구 */}
          <div className="w-fit mx-auto border-l-4 border-gray-600 pl-6 py-2 mb-16">
            <p className="text-balance text-center text-lg leading-relaxed">
              "EDA는 우리가 존재한다고 믿는 것들은 물론이고, 존재하지 않는다고
              <br />
              믿는 것들을 발견하려는 태도, 유연성, 그리고 자발성이다."
            </p>
            <p className="text-sm text-gray-600 mt-3 text-right">
              - John Tukey
            </p>
          </div>

          <div className="max-w-xl mx-auto bg-lime-100 rounded-2xl">
            <div className="px-10 py-7">
              <p className="text-xl font-bold mb-2">핵심 개념</p>
              <p>
                수집한 데이터를 통계적 기법과 시각화 도구를 사용하여 데이터의
                <br />
                특징을 파악하고 잠재적인 패턴을 찾는 과정입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 왜 EDA가 중요한가 */}
      <section
        id="ImportantReason"
        className="bg-lime-50 border-b border-lime-50"
      >
        <div className="max-w-5xl mx-auto py-16">
          <h1 className="text-4xl font-black text-lime-900 mb-14">
            왜 EDA가 중요한가?
          </h1>

          {/* 그리드 */}
          <div className="grid gap-7 mb-16 md:grid-cols-3">
            <div>
              <div className="px-7 py-5 bg-lime-100 border border-lime-300 rounded-3xl max-w-3xl hover:shadow-lg transition-shadow duration-300">
                <BrushCleaning />
                <h3 className="text-black text-lg font-extrabold my-3">
                  데이터 정제
                </h3>
                <p className="text-balence text-gray-600">
                  결측치(Missing Value)나 이상치(Outlier)를 발견하여 분석 결과의
                  왜곡을 사전에 방지합니다.
                </p>
              </div>
            </div>
            <div>
              <div className="px-7 py-5 bg-amber-100 border border-amber-300 rounded-3xl max-w-3xl hover:shadow-lg transition-shadow duration-300">
                <SearchCheck />
                <h3 className="text-black text-lg font-extrabold my-3">
                  가설 수정 및 도출
                </h3>
                <p className="text-balence text-gray-600">
                  초기에 세운 가설이 맞는지 확인하고, 데이터 기반의 새로운
                  가설을 도출할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="px-7 py-5 bg-yellow-100 border border-yellow-300 rounded-3xl max-w-3xl hover:shadow-lg transition-shadow duration-300">
              <FileAxis3d />
              <h3 className="text-black text-lg font-extrabold my-3">
                모델링 전략 수립
              </h3>
              <p className="text-balence text-gray-600">
                어떤 변수가 중요한지(Feature Selection) 파악하여 분석 모델의
                효율성을 극대화합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDA의 주요 단계 */}
      <section
        id="EDASteps"
        className="px-5 py-3 bg-linear-to-t from-amber-100 to-lime-100 border-b border-amber-200"
      >
        <div className="max-w-5xl mx-auto my-16">
          <h1 className="text-4xl font-black mb-14 text-right text-lime-900">
            EDA의 주요 단계
          </h1>

          {/* 구조파악 */}
          <div>
            <div className="flex items-center gap-4 mb-3">
              <p className="font-base text-amber-500">Step 1</p>
              <div className="grow border-b border-amber-500" />
            </div>
            <h2 className="font-extrabold text-3xl text-amber-600 mb-4">
              구조파악
            </h2>
            <p className="pl-1 text-lg font-sans text-amber-950 mb-5">
              : 데이터 타입(숫자, 범주형), 행/열 개수 등 구조 확인
            </p>
            <Code />
          </div>

          {/* 기초통계 */}
          {/* 이상치, 결측치 */}
          {/* 분포확인 */}
          {/* 관계분석 */}
        </div>
      </section>
    </>
  );
}
