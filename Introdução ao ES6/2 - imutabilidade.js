(() => {
  const user = {
    name: "Bruna",
    lastName: "Cristina"
  };

  function getUserWithFullName(user) {
    return {
      ...user,
      fullName: `${user.name} ${user.lastName}`
    };
  }

  const userWithFullName = getUserWithFullName(user);
})();