import avatar from "../../assets/avatar.png";

// I have just disabled the prop validation eslint error for avoiding complexity :). Instead of this in real project I can use prop-types library for validate. Reference: https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
// eslint-disable-next-line react/prop-types
export default function StudentRow({ ID, name, score, percentage }) {
  return (
    <tr key={ID} className="border-b border-[#7ECEB529]">
      <td className="p-5 text-sm md:text-xl">{ID}</td>
      <td className="p-5 text-sm md:text-xl">
        <div className="flex space-x-3 items-center">
          <img
            className="w-8 h-8"
            src={avatar}
            width="32"
            height="32"
            alt={name}
          />
          <span className="whitespace-nowrap">{name}</span>
        </div>
      </td>
      <td className="p-5 text-sm md:text-xl text-center">{score}</td>
      <td className="p-5 text-sm md:text-xl text-center">{percentage}</td>
    </tr>
  );
}
