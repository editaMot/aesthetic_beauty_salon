const generateWorkingHours = (start, finish) => {
  let workingHours = [];

  for (let i = start; i <= finish; i++) {
    let time00;
    let time30;

    time00 = `${i}:00`;
    workingHours.push(time00);

    if (i !== finish) {
      time30 = `${i}:30`;
      workingHours.push(time30);
    }
  }

  return workingHours;
};

export default generateWorkingHours;
