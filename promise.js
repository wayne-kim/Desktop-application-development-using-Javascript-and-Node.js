function intervalOneSec() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1);
  })

}

intervalOneSec()
  .then(function () {
    return "welcome ";
  })
  .then(function (value) {
    return value + "to the "
  })
  .then(function (value) {
    console.log(value + "promise")
  })