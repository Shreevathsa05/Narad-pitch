const TeamCard = ({ member }) => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-xs mx-auto">
      <div className="relative">
        <img
          src={member.profile}
          alt={member.name}
          className={`w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md ring-4 ${
            member.lead ? 'ring-blue-200' : member.mentor ? 'ring-purple-200' : 'ring-emerald-200'
          }`}
        />
        {member.lead && (
          <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            Lead
          </div>
        )}
        {member.mentor && (
          <div className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            Mentor
          </div>
        )}
      </div>

      <div className="text-center">
        <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
        <p className={`font-semibold mb-3 text-sm ${
          member.lead ? 'text-blue-600' : member.mentor ? 'text-purple-600' : 'text-emerald-600'
        }`}>
          {member.role}
        </p>


        <div className="flex justify-center gap-2">
          <a
            href={member.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors font-medium text-sm px-4 py-2 rounded-lg border border-blue-200 hover:border-blue-300"
          >
            LinkedIn
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default TeamCard;