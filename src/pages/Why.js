import "./Why.scss";

const Why = () => {
  return (
    <section className="why">
      {/* 배경 영역 */}
      <div className="why__background">
        {/* 좌측 장식 블록 */}

        {/* 메인 콘텐츠 */}
        <div className="why__content">
          <h2 className="why__title">왜 이런 심플한 디자인인가?</h2>

          <div className="why__text">
            <p>
              어렸을 때는 많은 상상력과 행동력을<br />
              통해서만 성장했다
            </p>
            <p>
              하지만 어른이란 점점 현실에 벽을 느끼며<br />
              나와 함께 성장할 동료들을 만나고
            </p>
            <p>
              추락도 해보고 올라갈 기회를<br />
              정말 ‘나’라는 존재 자체를 성장시키는 과정이다
            </p>
            <p>
              이것이 나의 포트폴리오 주제다<br />
              나의 추락을 부끄러워하지 않고 하나의<br />
              성장으로 받아들이기
            </p>
            <p>
              올라가면 그것 또한 능력으로 받아들이기
            </p>
            <p>
              녹색으로 색을 정한 이유는 안정감과 성장을 느끼는<br />
              색이기 때문이다
            </p>
            <p>
              디자인 선정 이유는 겉은 단순하더라도<br />
              내면은 깊다는 느낌을 주기 위해 심플하게 잡다
            </p>
          </div>
        </div>

        {/* 저장 버튼 */}
        <button className="why__save">저장</button>
      </div>
    </section>
  )
}

export default Why
