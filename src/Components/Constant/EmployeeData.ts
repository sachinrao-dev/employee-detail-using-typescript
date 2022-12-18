interface EmployeeData {
    id: number,
    name: string,
    dateOfBirth: string,
    occupation: string,
    personal: {
        name: string,
        address: string,
        phoneNo: number,
    },
    professional: { experiences: string },
    academic: {
        collegeName: string,
        degree: string,
        passOut: string,
        address: string,
    },
    employment: {
        currentCompany: string,
        employmentHistory: [
            {
                employer: string,
                year: number,
            },
        ],
    },
}

const getDataFromApi = () => {
  const dataPromise = new Promise((resolve) => {
    const employee: EmployeeData[] = [
      {
        id: 1,
        name: "John",
        dateOfBirth: "22/02/2022",
        occupation: "developer",
        personal: {
          name: "john",
          address: "Delhi",
          phoneNo: 1234341,
        },
        professional: { experiences: "3 years" },
        academic: {
          collegeName: "Sms ",
          degree: "B.Tech",
          passOut: "2022-06-22",
          address: "Lucknow",
        },
        employment: {
          currentCompany: "Celestial",
          employmentHistory: [
            {
              employer: "Google",
              year: 2019,
            },
          ],
        },
      },
    ];
    resolve(employee);
  });
  return dataPromise;
};

export default getDataFromApi;
