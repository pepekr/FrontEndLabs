const records = [
  {
    id: 1,
    directionName: "Система штучного інтелекту для освіти",
    departmentName: "Кафедра комп'ютерних наук",
    govermentInfo: "Міністерство освіти і науки України",
    firstDayUsersCount: 25,
    secondDayUsersCount: 32,
    development_time: new Date("2025-06-01"),
  },
  {
    id: 2,
    directionName: "Математична платформа для онлайн-курсів",
    departmentName: "Кафедра математики",
    govermentInfo: "Міністерство освіти і науки України",
    firstDayUsersCount: 18,
    secondDayUsersCount: 24,
    development_time: new Date("2025-06-02"),
  },
  {
    id: 3,
    directionName: "Віртуальна лабораторія з фізики",
    departmentName: "Кафедра фізики",
    govermentInfo: "Міністерство освіти і науки України",
    firstDayUsersCount: 15,
    secondDayUsersCount: 20,
    development_time: new Date("2025-06-03"),
  },
  {
    id: 4,
    directionName: "Онлайн-симулятор хімічних реакцій",
    departmentName: "Кафедра хімії",
    govermentInfo: "Міністерство освіти і науки України",
    firstDayUsersCount: 14,
    secondDayUsersCount: 19,
    development_time: new Date("2025-06-04"),
  },
  {
    id: 5,
    directionName: "Біоінформатична дослідницька система",
    departmentName: "Кафедра біології",
    govermentInfo: "Міністерство освіти і науки України",
    firstDayUsersCount: 17,
    secondDayUsersCount: 23,
    development_time: new Date("2025-06-05"),
  },
  {
    id: 6,
    directionName: "Аналітична система для економічних прогнозів",
    departmentName: "Кафедра економіки",
    govermentInfo: "Міністерство економіки України",
    firstDayUsersCount: 21,
    secondDayUsersCount: 28,
    development_time: new Date("2025-06-06"),
  },
  {
    id: 7,
    directionName: "Платформа електронного правосуддя",
    departmentName: "Кафедра права",
    govermentInfo: "Міністерство юстиції України",
    firstDayUsersCount: 19,
    secondDayUsersCount: 25,
    development_time: new Date("2025-06-07"),
  },
  {
    id: 8,
    directionName: "Система підтримки медичних рішень",
    departmentName: "Кафедра медицини",
    govermentInfo: "Міністерство охорони здоров'я України",
    firstDayUsersCount: 22,
    secondDayUsersCount: 30,
    development_time: new Date("2025-06-08"),
  },
  {
    id: 9,
    directionName: "Цифрова платформа психологічної допомоги",
    departmentName: "Кафедра психології",
    govermentInfo: "Міністерство освіти і науки України",
    firstDayUsersCount: 20,
    secondDayUsersCount: 27,
    development_time: new Date("2025-06-09"),
  },
  {
    id: 10,
    directionName: "Система автоматичного перекладу текстів",
    departmentName: "Кафедра філології",
    govermentInfo: "Міністерство освіти і науки України",
    firstDayUsersCount: 18,
    secondDayUsersCount: 24,
    development_time: new Date("2025-06-10"),
  },
];

function sortByKey(key, records) {
  return records.sort((a, b) => {
    const va = a[key];
    const vb = b[key];

    if (va instanceof Date && vb instanceof Date) return va - vb;
    if (typeof va === "number" && typeof vb === "number") return va - vb;
    return String(va).localeCompare(String(vb), "uk");
  });
}
function AvgInEqualDevelopmentTime() {
  const checked = new Set();

  records.forEach((record) => {
    const key = record.development_time.getTime();
    if (checked.has(key)) return;

    const sameRecords = records.filter(
      (r) => r.development_time.getTime() === key
    );
    const totalUsers = sameRecords.reduce(
      (sum, r) => sum + r.firstDayUsersCount + r.secondDayUsersCount,
      0
    );
    const avgUsers = totalUsers / (sameRecords.length * 2); // середня за день

    console.log(
      `Середня кількість користувачів (${
        sameRecords.length
      } записів) для терміну ${record.development_time.toLocaleDateString(
        "uk-UA"
      )}: ${avgUsers.toFixed(2)}`
    );

    checked.add(key);
  });
}
function maxByKey(key, records) {
  const maxRecord = records.reduce(
    (max, r) => (r[key] > (max[key] ?? -Infinity) ? r : max),
    {}
  );
  console.log(
    `Максимальне значення поля "${key}" = ${maxRecord[key]} — напрям: "${maxRecord.directionName}", відділ: "${maxRecord.departmentName}"`
  );
  return maxRecord;
}

function addNewRecord(record) {
  const hasEmpty = Object.values(record).some(
    (v) =>
      v === null ||
      v === undefined ||
      (typeof v === "string" && v.trim() === "")
  );
  if (hasEmpty) {
    records.push(record);
    console.log("Додано в кінець (неповні дані):", record);
  } else {
    records.unshift(record);
    console.log("Додано на початок (повні дані):", record);
  }
}

function determineDevelopmentTime(departmentName) {
  const directionsArr = records.filter(
    (r) => r.departmentName === departmentName
  );

  if (directionsArr.length === 0) {
    console.log(`Відділ "${departmentName}" не знайдено.`);
    return;
  }

  if (directionsArr.length === 1) {
    console.log(
      "Термін для виконання:",
      directionsArr[0].development_time.toLocaleDateString("uk-UA")
    );
    return;
  }

  directionsArr.forEach((record, i) => {
    const newTime = addYearPercent(record.development_time, i * 10);
    console.log(
      `Напрям "${
        record.directionName
      }" — старий термін: ${record.development_time.toLocaleDateString(
        "uk-UA"
      )}, новий: ${newTime.toLocaleDateString("uk-UA")}`
    );
    record.development_time = newTime;
  });
}

// additonal func to correctly calculate percentage
function addYearPercent(date, percent) {
  if (percent === 0) return date;
  const year = date.getFullYear();

  const startOfYear = new Date(year, 0, 1);
  const startOfNextYear = new Date(year + 1, 0, 1);

  const yearLength = startOfNextYear - startOfYear; // мс у цьому році
  const addMs = yearLength * (percent / 100);

  return new Date(date.getTime() + addMs);
}
