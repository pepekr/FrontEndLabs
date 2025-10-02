export class UserService {
  #usersArray;
  constructor(users) {
    this.#usersArray = users;
  }

  getUsersByYearAndMonth(month, year) {
    return this.#usersArray.filter(
      (user) =>
        user.dateOfFeedback.getMonth() + 1 === month &&
        user.dateOfFeedback.getFullYear() === year
    );
  }

  getUserWithMinAge() {
    return this.#usersArray.reduce((minUser, user) =>
      minUser.age > user.age ? user : minUser
    );
  }

  getUsersSorted() {
    return [...this.#usersArray].sort((a, b) =>
      (a.lastname + a.name).localeCompare(b.lastname+b.name, "uk")
    );
  }

  classifyUsers() {
    const withEducationInWorkHours = [];
    const withoutEducationInNonWorkHours = [];
    const others = [];
    this.#usersArray.forEach((user) => {
      const hour = user.dateOfFeedback.getHours();
      const hasEducation = !!user.education;
      if (hasEducation && hour >= 9 && hour <= 17) {
        withEducationInWorkHours.push(user);
      } else if (!hasEducation && (hour < 9 || hour > 17)) {
        withoutEducationInNonWorkHours.push(user);
      } else {
        others.push(user);
      }
    });
    return { withEducationInWorkHours, withoutEducationInNonWorkHours, others };
  }
}

