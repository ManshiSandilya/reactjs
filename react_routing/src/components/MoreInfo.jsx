import { useOutletContext } from "react-router-dom";

function MoreInfo() {
  const { user } = useOutletContext();

  return (
    <div className="p-6 border-l-4 border-indigo-500 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-md">
      <h3 className="text-xl font-extrabold text-gray-900 mb-4">🏢 Company Info</h3>
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Name:</span> {user.company?.name}
        </p>
        <p>
          <span className="font-semibold">Catchphrase:</span> {user.company?.catchPhrase}
        </p>
      </div>
    </div>
  );
}

export default MoreInfo;