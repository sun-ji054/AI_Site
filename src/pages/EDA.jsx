import Navigation from "../components/Navigation";
import Code from "../components/Code";
import { Pin, ArrowBigRight } from "lucide-react";

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
            데이터의 패턴 발견과 분석을 위한 필수 과정
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
                벨연구소의 수학자 존 튜키가 개발한 데이터분석 방법론으로, 
                데이터를 다양한 각도에서 관찰학 이해하는 모든 과정을 말합니다.
                <br/><br/>
                데이터 분석에 있어서 매우 중요한 초기 분석 단계이며,
                데이터를 분석하고 결과를 내는 과정에 있어 지속적으로 해당 데이터에 대한 <strong>"탐색과 이해"</strong>를 기본으로 가져야 합니다.
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

          {/* grid */}
          <div className="mb-16 grid grid-cols-3">
              <div className="px-7 py-5 bg-lime-100 border border-lime-300 rounded-3xl max-w-3xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <Pin/>
                  <p className="text-black text-lg font-semibold my-3">데이터의 잠재적인 문제 발견</p>
                </div>
                <div className="flex items-center gap-3">
                  <Pin/>
                  <p className="text-black text-lg font-semibold my-3">데이터의 다양한 패턴 발견</p>
                </div>
                <div className="flex items-center gap-3">
                  <Pin/>
                  <p className="text-black text-lg font-semibold my-3">자료수집을 위한 기반 (추가 자료수집도 포함)</p>
                </div>
                <div className="flex items-center gap-3">
                  <Pin/>
                  <p className="text-black text-lg font-semibold my-3">적절한 통계 도구 제시</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ArrowBigRight size={100} color="green"/>
              </div>
              <div className="px-7 py-5 flex flex-col text-left justify-center">
                <div className="flex items-center mb-3">
                  
                  <p className="text-pretty font-semibold text-lg">간단히 말하자면,</p>
                </div>
                <p>데이터에 대한 이해와 탐색이 바탕이 되어야 문제를 발견 및 해결은 물론
데이터 분석을 하는 과정에서 필요한 통계도구, 자료수집 등을 결정하는데도 도움을 줍니다.</p>
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
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <p className="font-base text-amber-500">Step 1</p>
              <div className="grow border-b border-amber-500" />
            </div>
            <h2 className="font-extrabold text-3xl text-amber-600 mb-4">
              데이터의 전체 그림 보기
            </h2>
            <p className="pl-1 text-lg font-sans text-amber-950 mb-5">
              가장 기본적인 표 형태로 데이터를 펼쳐본 후, 행과 열을 둘러보면서 데이터가 어떤 식으로 구성되어 있는지 확인합니다.
            </p>
            <Code code={`import pandas as pd
import numpy as np

raw_data = pd.read_csv('raw_data.csv')
match_info = pd.read_csv('match_info.csv')
data_description = pd.read_excel('data_description.xlsx')

pd.set_option('display.max_columns', None)    #데이터 생략하지 않고 얼마나 보여줄지
pd.set_option('display.max_rows', None)
pd.set_option('display.width', None)
pd.set_option('display.max_colwidth', None)

raw_data.head(50)
match_info.head(50)`} filename={"data_structure.py"}/>
          </div>

          {/* 기초통계 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <p className="font-base text-amber-500">Step 2</p>
              <div className="grow border-b border-amber-500" />
            </div>
            <h2 className="font-extrabold text-3xl text-amber-600 mb-4">
              기초통계
            </h2>
            <p className="pl-1 text-lg font-sans text-amber-950 mb-5">
              데이터 타입(숫자, 범주형), 행/열 개수 등 구조 확인
            </p>
            <Code code={`raw_data.describe()
raw_data.dtypes
raw_data.shape           #(579306, 18)
            
match_info.describe()
match_info.dtypes
match_info.shape         #(198, 17)`} filename={'basic_statistics.py'}/>
          </div>

          {/* 이상치, 결측치 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <p className="font-base text-amber-500">Step 3</p>
              <div className="grow border-b border-amber-500" />
            </div>
            <h2 className="font-extrabold text-3xl text-amber-600 mb-4">
              이상치, 결측치 찾아보기
            </h2>
            <p className="pl-1 text-lg font-sans text-amber-950 mb-5">
              <strong>1) 이상치</strong><br/>
              <strong >2) 결측치</strong><br/>
              &nbsp;&nbsp;&nbsp;완전 무작위 결측(MCAR) : 결측치가 다른 변수들과 아무런 상관관계가 없는 경우<br/>
              &nbsp;&nbsp;&nbsp;무작위 결측(MAR) : 특정 변수와 관련되어 누락됐지만, 변수들의 상관관계를 알 수 없는 경우<br/>
              &nbsp;&nbsp;&nbsp;비무작위 결측(NMAR) : 누락된 변수의 값이 누락된 이유와 관련이 있는 경우<br/>  
            </p>
            <Code filename={'nall_outlier.py'} code={`
# 결측치 확인
raw_data.isnull().sum()        # plaer_id: 1, result_name: 349,604, position_name: 70,120, main_position: 1,704
match_info.isnull().sum()      # 결측치 없음


# 이상치 확인
import matplotlib.pyplot as plt
import seaborn as sns

# 그래프 스타일 설정 (한글 깨짐 방지를 위해 기본 스타일 사용 또는 폰트 설정 필요)
sns.set_theme(style="whitegrid")

# 분석할 컬럼 그룹화
coord_cols = ['start_x', 'start_y', 'end_x', 'end_y']
diff_cols = ['dx', 'dy']
time_cols = ['time_seconds']

# --- 시각화 1: 좌표 데이터 (start/end x, y) ---
plt.figure(figsize=(10, 6))
sns.boxplot(data=raw_data[coord_cols])
plt.title('Boxplot of Coordinate Columns')
plt.ylabel('Value')
plt.savefig('boxplot_coordinates.png')
plt.show()

# --- 시각화 2: 변위 데이터 (dx, dy) ---
plt.figure(figsize=(10, 6))
sns.boxplot(data=raw_data[diff_cols])
plt.title('Boxplot of Displacement Columns (dx, dy)')
plt.ylabel('Distance')
plt.savefig('boxplot_displacements.png')
plt.show()

# --- 시각화 3: 시간 데이터 (time_seconds) ---
plt.figure(figsize=(8, 6))
sns.boxplot(data=raw_data[time_cols])
plt.title('Boxplot of Time Seconds')
plt.ylabel('Seconds')
plt.savefig('boxplot_time.png')
plt.show()

# 4. 수치 기반 이상치 확인 (IQR 방식)
def print_outlier_report(data, columns):
    print("=== Outlier Report (IQR Method) ===")
    for col in columns:
        Q1 = data[col].quantile(0.25)
        Q3 = data[col].quantile(0.75)
        IQR = Q3 - Q1
        lower_bound = Q1 - 1.5 * IQR
        upper_bound = Q3 + 1.5 * IQR
        
        outliers = data[(data[col] < lower_bound) | (data[col] > upper_bound)]
        count = len(outliers)
        percentage = (count / len(data)) * 100
        
        print(f"[{col}] 이상치 개수: {count}개 ({percentage:.2f}%)")

print_outlier_report(raw_data, coord_cols + diff_cols + time_cols)`}/>
          </div>
          {/* 데이터 시각화 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <p className="font-base text-amber-500">Step 4</p>
              <div className="grow border-b border-amber-500" />
            </div>
            <h2 className="font-extrabold text-3xl text-amber-600 mb-4">
              데이터 시각화(일변량 데이터)
            </h2>
            <p className="pl-1 text-lg font-sans text-amber-950 mb-5">
              <span className="font-semibold">수치형 데이터 (Numerical)</span><br/>
              &nbsp;: 히스토그램, 박스 플롯, 커널 밀도 추정<br/><br/>
              <span className="font-semibold">범주형 데이터 (Numerical)</span><br/>
              &nbsp;: 막대 그래프, 파이 차트<br/>
            </p>
            <Code filename={'시각화.py'} code={`
fig, axes = plt.subplots(2, 3, figsize=(18, 10))
axes = axes.flatten()

target_cols = ['start_x', 'start_y', 'end_x', 'end_y', 'time_seconds']

for i, col in enumerate(target_cols):
    sns.histplot(raw_data[col], kde=True, ax=axes[i], color='teal')
    axes[i].set_title(f'Distribution of {col}')

# 남는 서브플롯은 비워둠
axes[-1].axis('off')
plt.tight_layout()
plt.show()
            `}/>
          </div>

          {/* 속성 간의 관계분석 */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-3">
              <p className="font-base text-amber-500">Step 5</p>
              <div className="grow border-b border-amber-500" />
            </div>
            <h2 className="font-extrabold text-3xl text-amber-600 mb-4">
              속성 간의 관계 분석
            </h2>
            <p className="pl-1 text-lg font-sans text-amber-950 mb-5">
              - 개별 속성 관찰에서 찾아내지 못했던 속성들의 조합 패턴 발견<br/>
              - 그래프를 통해 시각화하여 속성 간의 관계 분석<br/>
              - 상관계수를 통한 상관관계 확인
              <br/><br/>
              <strong>Numeric - Numeric</strong> : 상관계수(요약 통계), 산점도(시각화)<br/>
              <strong>Numeric - Categorial</strong> : 카테고리별 통계 값, 박스 플롯<br/>
              <strong>Categorical - Categorical</strong> : 교차 테이블, 모자이크 플롯
            </p>
            <Code />
          </div>
        </div>
      </section>
    </>
  );
}
