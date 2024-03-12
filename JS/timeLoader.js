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
  // Define date for the news
  timeLoaded(new Date("2024-03-11T16:30:00"), "main");
  timeLoaded(new Date("2024-03-11T15:30:00"), "1");
  timeLoaded(new Date("2024-03-11T14:00:00"), "2");
  timeLoaded(new Date("2024-03-11T11:00:00"), "3");
  timeLoaded(new Date("2024-03-11T10:30:00"), "4");
  timeLoaded(new Date("2024-03-11T09:00:00"), "5");
  timeLoaded(new Date("2024-03-11T08:30:00"), "6");
  timeLoaded(new Date("2024-03-11T07:00:00"), "7");
});

