import React from "react";
import SearchBox from "./SearchBox";
import StudentRow from "./StudentRow";

export default function StudentTable() {
  const studentData = [
    // Class One
    [
      { ID: 1, name: "Akash Husain", score: "A+", percentage: "99%" },
      { ID: 2, name: "Nusrat Jahan", score: "A+", percentage: "98%" },
      { ID: 3, name: "Robiul Ahamed", score: "B", percentage: "70%" },
      { ID: 4, name: "Sara Ahmed", score: "A", percentage: "95%" },
      { ID: 5, name: "Liam Taylor", score: "B+", percentage: "85%" },
      { ID: 6, name: "Olivia Williams", score: "A", percentage: "92%" },
      { ID: 7, name: "William Davis", score: "A-", percentage: "88%" },
      { ID: 8, name: "Sophie Anderson", score: "B+", percentage: "87%" },
      { ID: 9, name: "Mason Johnson", score: "A", percentage: "91%" },
      { ID: 10, name: "Ella Martinez", score: "A-", percentage: "89%" },
    ],
    // Class Two
    [
      { ID: 1, name: "John Smith", score: "A+", percentage: "98%" },
      { ID: 2, name: "John Smith", score: "A+", percentage: "98%" },
      { ID: 3, name: "John Smith", score: "A+", percentage: "98%" },
      { ID: 4, name: "Aiden Wilson", score: "A", percentage: "92%" },
      { ID: 5, name: "Emma Johnson", score: "A+", percentage: "98%" },
      { ID: 6, name: "Grace Thompson", score: "A+", percentage: "97%" },
      { ID: 7, name: "Logan White", score: "B+", percentage: "88%" },
      { ID: 8, name: "Zoe Garcia", score: "A", percentage: "93%" },
      { ID: 9, name: "Jackson Robinson", score: "A-", percentage: "89%" },
      { ID: 10, name: "Ava Hall", score: "B", percentage: "80%" },
    ],
    // Class Three
    [
      { ID: 1, name: "Sophie Turner", score: "A+", percentage: "97%" },
      { ID: 2, name: "Ethan Walker", score: "A-", percentage: "90%" },
      { ID: 3, name: "Lucas Smith", score: "B+", percentage: "88%" },
      { ID: 4, name: "Emma Turner", score: "A", percentage: "93%" },
      { ID: 5, name: "Mia Harris", score: "B", percentage: "85%" },
      { ID: 6, name: "Elijah Foster", score: "A", percentage: "94%" },
      { ID: 7, name: "Aria Turner", score: "B-", percentage: "78%" },
      { ID: 8, name: "Oliver Williams", score: "A+", percentage: "98%" },
      { ID: 9, name: "Harper Jackson", score: "B+", percentage: "88%" },
      { ID: 10, name: "Liam Harris", score: "A-", percentage: "89%" },
    ],
  ];

  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>
          <SearchBox />
        </div>
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((classStudents, classIndex) => (
                <React.Fragment key={classIndex}>
                  {/* Class header row */}
                  <tr className="bg-white/5">
                    <td className="p-5 text-sm md:text-xl" colSpan="4">
                      Class {classIndex + 1}
                    </td>
                  </tr>

                  {/* Students data rows */}
                  {classStudents.map((student, key) => (
                    <StudentRow
                      key={key}
                      ID={student?.ID}
                      name={student?.name}
                      score={student?.score}
                      percentage={student?.percentage}
                    />
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
