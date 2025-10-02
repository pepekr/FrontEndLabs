import readline from "readline/promises";
import {
  sortByKey,
  AvgInEqualDevelopmentTime,
  addNewRecord,
  determineDevelopmentTime,
  maxByKey,
} from "./firstTask.js";
import { records } from "./Records.js";
// === створюємо інтерфейс ===
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ==== меню ====
function showMenu() {
  console.log("\n=== МЕНЮ ===");
  console.log("1 — Впорядкування напрямів за терміном реалізації та середня кількість користувачів");
  console.log("2 — Знаходження напряму з максимальною кількістю користувачів за добу_1");
  console.log("3 — Додавання нового напряму (приклади)");
  console.log("4 — Обчислення тривалості реалізації напрямів для відділу");
  console.log("5 — Додати новий напрям вручну через JSON");
  console.log("0 — Вихід");
}

// ==== головний цикл ====
async function mainMenu() {
  while (true) {
    showMenu();
    const answer = await rl.question("Ваш вибір: ");

    switch (answer.trim()) {
      case "1":
        console.clear()
        console.log("\n=== 1. Впорядкування та середні значення ===");
        sortByKey("development_time", records);
        console.log("Відсортовані напрями за датою реалізації:");
        records.forEach(r => {
          console.log(`${r.id}. ${r.directionName} — ${r.development_time.toLocaleDateString("uk-UA")}`);
        });
        AvgInEqualDevelopmentTime(records);
        break;

      case "2":
        console.clear()
        console.log("\n=== 2. Максимальна кількість користувачів за добу_1 ===");
        maxByKey("firstDayUsersCount", records);
        break;

      case "3":
        console.clear()
        console.log("\n=== 3. Додавання нового напряму (приклади) ===");
        const newRecordFull = {
          id: 11,
          directionName: "Новий повний напрям",
          departmentName: "Кафедра інформатики",
          govermentInfo: "Міністерство освіти і науки України",
          firstDayUsersCount: 10,
          secondDayUsersCount: 12,
          development_time: new Date("2025-06-11"),
        };
        const newRecordEmpty = {
          id: 12,
          directionName: "Неповний напрям",
          departmentName: "",
          govermentInfo: "",
          firstDayUsersCount: null,
          secondDayUsersCount: null,
          development_time: null,
        };
        addNewRecord(newRecordFull, records);
        addNewRecord(newRecordEmpty, records);
        break;

      case "4":
        console.clear()
        console.log("\n=== 4. Обчислення тривалості реалізації напрямів для відділу ===");
        const dept = await rl.question("Введіть назву відділу: ");
        determineDevelopmentTime(dept.trim(), records);
        break;

      case "5":
        console.clear()
        console.log("\n=== 5. Додати новий напрям вручну ===");
        const input = await rl.question("Введіть об'єкт напряму у форматі JSON: ");
        try {
          const userRecord = JSON.parse(input);
          if (userRecord.development_time) {
            userRecord.development_time = new Date(userRecord.development_time);
          }
          addNewRecord(userRecord,records);
        } catch (err) {
          console.log("Помилка при обробці введених даних:", err.message);
        }
        break;

      case "0":
        console.clear()
        console.log("Вихід з програми...");
        rl.close();
        return;

      default:
        
        console.log("Невірний вибір, спробуйте ще раз.");
    }
  }
}

// ==== запуск ====
mainMenu();
