import { User } from "./User.js";
import readline from "readline/promises";
import {UserDisplay} from "./Display.js"
const users = [
  // Робочий час (09:00 - 17:00)
  new User("Олександр", "Іваненко", 25, "Вища", "співпраця", new Date("2025-01-15T10:30:00")),
  new User("Марія", "Петренко", 22, "Середня спеціальна", "скарга на порушення права власності", new Date("2025-02-03T15:20:00")),
  new User("Ігор", "Шевченко", 30, "Вища", "пропозиція", new Date("2025-03-21T11:45:00")),

  // Інший час (поза робочим діапазоном)
  new User("Олена", "Коваленко", 27, "Вища", "наявність помилки", new Date("2025-04-10T18:20:00")),
  new User("Дмитро", "Мельник", 35, "Середня", "співпраця", new Date("2025-05-02T07:50:00")),
  new User("Світлана", "Григоренко", 29, "Вища", "скарга на порушення права власності", new Date("2025-06-12T20:40:00")),
  new User("Андрій", "Сидоренко", 33, "", "пропозиція", new Date("2025-07-19T06:15:00")),
  new User("Катерина", "Лисенко", 26, "Вища", "наявність помилки", new Date("2025-08-05T21:25:00")),
  new User("Володимир", "Ткаченко", 28, "Середня спеціальна", "співпраця", new Date("2025-09-14T05:10:00")),
  new User("Наталія", "Романенко", 24, "Вища", "пропозиція", new Date("2025-10-01T22:45:00")),
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function showMenu() {
  console.log("\n=== МЕНЮ ===");
  console.log("1 — Виведення переліку користувачів в певний рік та місяць");
  console.log("2 — Мінімальний вік користувача і дані про його освіту");
  console.log("3 — Користувачі поділені на класи");
  console.log("4 — Виведення відсортованих користувачів");
  console.log("0 — Вихід");
}




async function mainMenu() {
  const userDisplay = new UserDisplay(users);
  while (true) {
    showMenu()
    const choice = await rl.question("Введіть ваш вибір: ");

    switch (choice.trim()) {
      case "1":
        try {
            const year = Number((await rl.question("Введіть рік звернення: ")).trim());
            const month = Number((await rl.question("Введіть місяць звернення(1-12): ")).trim());
            if(month>12 || month <1) throw new Error("Невірний ввід")
            userDisplay.DisplayUsersByYearAndMonth(month,year)
        } catch (error) {
            console.log(error)
      
        } 
        break
      case "2":
        userDisplay.DisplayUserWithMinAge();
        break;
      case "3":
        userDisplay.DisplayUsersByClasses();
        break;
      case "4":
        userDisplay.DisplayUsersSorted();
        break;
      case "0":
        console.clear();
        console.log("Вихід з програми...");
        rl.close();
        return;
      default:
        console.log("Невірний вибір, спробуйте ще раз.");
    }
  }
}

mainMenu()