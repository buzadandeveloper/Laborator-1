function timeLoaded(){
    let publishDate = new Date("2024-02-18 11:30");
    let currentDate = new Date();
    const timeDiffMinutes = Math.floor((currentDate - publishDate)/(1000 * 60));
    if(timeDiffMinutes >= 60){
        const timeDiffHours = Math.floor(timeDiffMinutes / 60);
        if(timeDiffHours === 1){
            var timeString = `o oră în urmă`;
        }
        else {
            timeString = `${timeDiffHours} ore în urmă`;
        }
    }
    else{
        timeString = `${timeDiffMinutes} minute în urmă`;
    }       
    let spanTime = document.createElement("span");
    spanTime.textContent = timeString;
    divInfoNews.append(spanTime);
}
document.addEventListener("DOMContentLoaded", timeLoaded);