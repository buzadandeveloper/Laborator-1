function timeLoaded(publishDate, divId) {
  let currentDate = new Date();
  const timeDiffMinutes = Math.floor((currentDate - publishDate) / (1000 * 60));
  let timeString;

  if (timeDiffMinutes >= 60) {
    const timeDiffHours = Math.floor(timeDiffMinutes / 60);
    const timeDiffDays = Math.floor(timeDiffHours / 24);

    if (timeDiffHours === 1) {
      timeString = `o oră în urmă`;
    } else if (timeDiffDays === 1) {
      timeString = `o zi în urmă`;
    } else if (timeDiffDays > 1) {
      timeString = `${timeDiffDays} zile în urmă`;
    } else {
      timeString = `${timeDiffHours} ore în urmă`;
    }
  } else {
    timeString = `${timeDiffMinutes} minute în urmă`;
  }

  // Append timeString to the specified div
  let spanTime = document.createElement("span");
  spanTime.textContent = timeString;
  document.getElementById(divId).append(spanTime);
}

document.addEventListener("DOMContentLoaded", function () {
  //Define date for the news
  timeLoaded(new Date("2024-02-27 16:30"), "main");
  timeLoaded(new Date("2024-02-27 15:30"), "1");
  timeLoaded(new Date("2024-02-27 14:00"), "2");
  timeLoaded(new Date("2024-02-27 11:00"), "3");
  timeLoaded(new Date("2024-02-27 10:30"), "4");
  timeLoaded(new Date("2024-02-27 9:00"), "5");
  timeLoaded(new Date("2024-02-27 8:30"), "6");
  timeLoaded(new Date("2024-02-27 7:00"), "7");
});
