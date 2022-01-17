//retrieveData
function retrieveData(url, success, error) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.responseText);
            if (success) {
                success(result);
            }
        } else {
            if (error) {
                error();
            }
        }
    }
    xhttp.open('GET', url, true);
    xhttp.send();
}

// Get a value from the querystring
function findGetParameter(parameterName, success) {
    let result = null;
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        let tmp = items[index].split("=");
        if (tmp[0] === parameterName)
            result = decodeURIComponent(tmp[1]);
    }
    if (!!result && !!success)
        success(result);
}

//register online and offline event
function registerOnline(onlineListener, offlineListener) {
    window.addEventListener('online',  onlineListener);
    window.addEventListener('offline', offlineListener);
}