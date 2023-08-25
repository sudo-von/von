import ProfileName from "./components/profile-name/profile-name";
import ProfileMetrics from "./components/profile-metrics/profile-metrics";
import ProfilePicture from "./components/profile-picture/profile-picture";
import ProfileInterest from "./components/profile-interest/profile-interest";
import ProfilePosition from "./components/profile-position/profile-position";

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
      <ProfilePicture
        alt="profile-picture"
        src="https://64.media.tumblr.com/cef32775a1393ba7eb861c0fa4ce9dfe/tumblr_ndhuk9HTKR1qdpo2no1_r1_250.gifv"
      />
      <div className="flex flex-col justify-center items-center lg:items-start gap-4">
        <ProfileName>Jesús Rodríguez</ProfileName>
        <ProfilePosition>Software engineer</ProfilePosition>
        <ProfileInterest>Passionate about ethical hacking</ProfileInterest>
        <ProfileMetrics totalViews={0} totalAnswers={0} totalQuestions={0} />
      </div>
    </div>
  );
};

export default Profile;
