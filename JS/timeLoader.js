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

    let spanTime2 = document.createElement("span");
    spanTime2.textContent = timeString;
    divInfoText.append(spanTime2);

    let spanTime3 = document.createElement("span");
    spanTime3.textContent = timeString;
    divInfoText2.append(spanTime3);

    let spanTime4 = document.createElement("span");
    spanTime4.textContent = timeString;
    divInfoText3.append(spanTime4);

    
}
document.addEventListener("DOMContentLoaded", timeLoaded);