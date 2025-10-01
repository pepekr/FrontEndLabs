class UserDisplay {
  #service;
  constructor(users) {
    this.#service = new UserService(users);
  }

  DisplayUsersByYearAndMonth(month, year) {
    this.#service.getUsersByYearAndMonth(month, year).forEach((user) =>
      console.log(
        `Ім'я: ${user.name}, Прізвище: ${user.lastname}, Мета: ${user.purposeOfFeedback}`
      )
    );
  }

  DisplayUserWithMinAge() {
    const minUser = this.#service.getUserWithMinAge();
    console.log(minUser.age, minUser.education);
  }

  DisplayUsersSorted() {
    console.log("Відсортовані користувачі:");
    this.#service.getUsersSorted().forEach((user) =>
      console.log(
        `Прізвище: ${user.lastname}, Ім'я: ${user.name}, мета: ${user.purposeOfFeedback}`
      )
    );
  }

  DisplayUsersByClasses() {
    const { withEducationInWorkHours, withoutEducationInNonWorkHours, others } =
      this.#service.classifyUsers();

    console.log("З вищою освітою у робочий час:", withEducationInWorkHours.length);
    console.log("Без освіти у неробочий час:", withoutEducationInNonWorkHours.length);
    console.log("Інші:", others.length);
  }
}
