(() => {
    let date,
        timeItem = document.getElementById('time-item'),
        dateItem = document.getElementById('date-item');
        
    
        let arrayDay = ['Sunday', 'Monday', 'Tuesday','Wednessday','Thursday','Friday','Saturday'],
        arrayMonth = ['January', 'February', 'March','April','May','June','July', 'August', 'September','October','November','December'];    

    let time = () => {
        date = new Date();
        let hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();  
            
         if (hours < 10) 
            hours = `0${hours}`;
            
        if (minutes < 10) 
            minutes = `0${minutes}`;

        if (seconds < 10) 
            seconds = `0${seconds}`;      

        dateItem.textContent = `${arrayDay[date.getDay()]} ${date.getDate()} ${arrayMonth[date.getMonth()]} ${date.getFullYear()}`
        timeItem.textContent = `${hours}:${minutes}:${seconds}`;

  
    }

    time();

    setInterval(time, 10);
    
    

})();