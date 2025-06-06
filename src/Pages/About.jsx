import NewSellers from "../Components/NewSellers/NewSellers";
import Support from "../Components/Support/Support";
import { usePageTittle } from "../Components/utils/Helper";
import "./CSS/About.css";

const About = () => {
  usePageTittle('About - Fourteen General Supply');
  return (
    <div className="about">
      <h1>about fourteen general supply</h1>
      <div className="about-container">
        <p>
          Founded in 2021, Fourteen General Supply is a leading Tanzania
          electronics store.
        </p>
        <p>
          We strive to offer the best possible products at the best possible
          prices. Our goal is to create a place where you can buy all your
          electronics needs in one place.
        </p>
        <h3>Our people</h3>
        <p>
          Our people are, and have always been our greatest assest. We have
          combined great people with the best in technology and that means a
          satifying and pleasant experience for you. It starts with a
          professional, courteous, patient and knowledgeable person on the phone
          or in person in our showrooms. We can help you whether you're setting
          up your first network, upgrading your operating system, increasing
          your bandwidth or purchasing hundreds of PCs for a large corporation.
        </p>
        <h3>Why fourteen general supply</h3>
        <p>
          Fourteen General Supply is committed to providing you with the best
          possible Products at the best possible prices. We're here to help you
          find the perfect device that fits your needs, and we're always here to
          answer any questions you might have about our Products or services.
          Our goal is to create a place where you can buy all your electronic
          needes in one place.
        </p>
        <h3>our mission</h3>
        <p>
          To provide affordable and reliable devices for our customers, making
          our customers feel at home and happy.
        </p>
        <h3>Our Vission</h3>
        <p>
          To create a place where technology and convenience can be combined,
          creating a truly convenient and enjoyable shopping experience.
        </p>
      </div>
      <NewSellers/>
      <Support/>
    </div>
  );
};

export default About;
