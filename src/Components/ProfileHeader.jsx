const ProfileHeader = ({ image, name, subtitle }) => {
  return (
    <div className="pt-6">
      <div className="w-48 h-48 mx-auto border-4 border-slate-900 drop-shadow-[6px_6px_0px_black] rounded-full overflow-hidden bg-white">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-3xl text-center font-black text-slate-900 mt-4 uppercase">
        {name}
      </h2>
      <span className="text-center mx-auto text-lg block font-bold text-slate-800">
        <h3>{subtitle}</h3>
      </span>
    </div>
  );
};

export default ProfileHeader;
