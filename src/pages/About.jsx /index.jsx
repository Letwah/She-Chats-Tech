import "./styles.css";

import linkedinBanner from "../../assets/images/SheChatsTechLIBanner.png";

const About = () => {
  return (
    <>
      <div className="aboutPageWrapper">
        <img key="LinkedIn_banner" src={linkedinBanner} alt="linkedin Banner" />
        <h2>
          Welcome to <strong> She Chats Tech </strong> community.
        </h2>
        <p>
          We&apos;re an inclusive community that empowers women to enter and
          thrive in the tech industry. Our organisation was founded in 2023 by a
          tech career changer who felt frustrated by the lack of communities for
          tech career changers. The tech industry isn&apos;t as diverse,
          inclusive, or representative as it can be - we want to change that for
          our generation and generations to come. Our aim is to provide a space
          where members can:
        </p>
        <p>⚡️ Be their authentic selves</p>
        <p>⚡️ Cultivate genuine connections</p>
        <p>
          ⚡️ Up-skill personally and professionally. Join us for our URL and
          IRL events!
        </p>

        <p>
          Our Community platform is being developed, but for now, please visit
          our
          <a
            href="https://www.linkedin.com/company/she-chats-tech/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "var(--link-color)",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            LinkedIn Page
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default About;
