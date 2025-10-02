

export function sortByKey(key, records) {
  return records.sort((a, b) => {
    const va = a[key];
    const vb = b[key];

    if (va instanceof Date && vb instanceof Date) return va - vb;
    if (typeof va === "number" && typeof vb === "number") return va - vb;
    return String(va).localeCompare(String(vb), "uk");
  });
}
export function AvgInEqualDevelopmentTime(records) {
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
export function maxByKey(key, records) {
  const maxRecord = records.reduce(
    (max, r) => (r[key] > (max[key] ?? -Infinity) ? r : max),
    {}
  );
  console.log(
    `Максимальне значення поля "${key}" = ${maxRecord[key]} — напрям: "${maxRecord.directionName}", відділ: "${maxRecord.departmentName}"`
  );
  return maxRecord;
}

export function addNewRecord(record, records) {
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

export function determineDevelopmentTime(departmentName, records) {
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
