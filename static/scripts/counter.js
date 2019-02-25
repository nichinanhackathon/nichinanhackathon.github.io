function get_entry_num() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response) {
                // 読み込んだ後処理したい内容をかく
                let entry_num = document.getElementById("entry_num");
                entry_num.innerHTML = this.response.entry;
            } else {
                console.log(this.response);
            }
        }
    }

    xmlHttpRequest.open('GET', 'https://script.google.com/macros/s/AKfycbzXClhhpTW_yzyxY9FZRj45sxvN5dFELZPDNS0UuDyCZYZrqQnB/exec', true);
    xmlHttpRequest.responseType = 'json';
    xmlHttpRequest.send(null);
}

function get_inn_entry_num() {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.response) {
                // 読み込んだ後処理したい内容をかく
                let inn_entry_num = document.getElementById("inn_entry_num");
                inn_entry_num.innerHTML = this.response.inn;
            } else {
                console.log(this.response);
            }
        }
    }

    xmlHttpRequest.open('GET', 'https://script.google.com/macros/s/AKfycbzXClhhpTW_yzyxY9FZRj45sxvN5dFELZPDNS0UuDyCZYZrqQnB/exec', true);
    xmlHttpRequest.responseType = 'json';
    xmlHttpRequest.send(null);
}

/*
var xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        if (this.response) {
            // 読み込んだ後処理したい内容をかく
            let entry_num = document.getElementById("entry_num");
            let inn_entry_num = document.getElementById("inn_entry_num");
            entry_num.innerHTML = this.response.entry;
            inn_entry_num.innerHTML = this.response.inn;
        } else {
            console.log(this.response);
        }
    }
}

xmlHttpRequest.open('GET', 'https://script.google.com/macros/s/AKfycbzXClhhpTW_yzyxY9FZRj45sxvN5dFELZPDNS0UuDyCZYZrqQnB/exec', true);
xmlHttpRequest.responseType = 'json';
xmlHttpRequest.send(null);
*/