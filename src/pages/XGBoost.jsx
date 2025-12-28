import Navigation from "../components/Navigation";

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
    </>
  );
}
