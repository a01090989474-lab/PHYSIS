import "./AboutCrew.scss";

const members = [
  { role: "CEO", name: "[직책]", desc: "한 줄 소개 — 경력이인한\n직인" },
  { role: "[직책]", name: "[직책]", desc: "한 줄 소개 — 경력이인한\n직인" },
  { role: "[직책]", name: "[직책]", desc: "한 줄 소개 — 경력이인한\n직인" },
  { role: "[직책]", name: "[직책]", desc: "한 줄 소개 — 경력이인한\n직인" },
];

export default function AboutCrew() {
  return (
    <section className="about-crew">
      <div className="about-crew__inner">
        <p className="about-crew__label">CREW</p>
        <h2 className="about-crew__title">The people behind Physis.</h2>
        <p className="about-crew__desc">
          끊임없는 연구와 혁신으로 냉동·냉장 산업의 미래를 설계하는 Physis 주성원을 소개합니다.
        </p>

        <div className="about-crew__team-photo">
          <span>팀 전체 사진 (와이드 — 21:9)</span>
        </div>

        <div className="about-crew__members">
          {members.map((m, i) => (
            <div key={i} className="about-crew__member">
              <div className="about-crew__member-photo">
                <span>프로필</span>
              </div>
              <p className="about-crew__member-role">{m.role}</p>
              <p className="about-crew__member-name">{m.name}</p>
              <p className="about-crew__member-desc">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
