import { BiPhone, BiEnvelope } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import KakaoMap from "./KakaoMap";
import "./ContactInfo.scss";

const contactChannels = [
  {
    icon: BiPhone,
    label: "TEL",
    value: "010-3907-6508",
  },
  {
    icon: BiEnvelope,
    label: "EMAIL",
    value: "socool9999@naver.com",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
    value: "유튜브 바로가기",
    href: "https://www.youtube.com/@hybridice-21",
  },
];

const companyInfo = [
  { label: "회사명", value: "PHYSIS Co. (파이시스)" },
  { label: "사업자등록번호", value: "641-25-01953" },
  { label: "운영 시간", value: "평일 09:00~18:00" },
];

export default function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="contact-info__grid">
        <div className="contact-info__col">
          <div className="contact-channels">
            {contactChannels.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="contact-channel__icon">
                    <Icon />
                  </span>
                  <div>
                    <p className="contact-channel__label">{item.label}</p>
                    <p className="contact-channel__value">{item.value}</p>
                  </div>
                </>
              );
              return item.href ? (
                <a
                  className="contact-channel"
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div className="contact-channel" key={item.label}>
                  {content}
                </div>
              );
            })}
          </div>

          <p className="contact-info__heading">COMPANY INFO</p>
          <dl className="contact-company">
            {companyInfo.map((item) => (
              <div className="contact-company__row" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="contact-info__col">
          <div className="contact-map">
            <KakaoMap />
          </div>

          <div className="contact-office">
            <p className="contact-office__label">HEAD OFFICE</p>
            <p className="contact-office__name">PHYSIS Co. 본사</p>
            <p className="contact-office__address">
              경기도 시흥시 매화산단3길 1
              <br />
              (매화동, 리드스마트스퀘어)
            </p>
            <div className="contact-office__actions">
              <a
                className="contact-office__btn"
                href="https://kko.to/Whm7BxdpEy"
              >
                자세히 보기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
