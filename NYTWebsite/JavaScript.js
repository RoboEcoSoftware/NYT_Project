var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send();
};

function queryById(Id) {

        $.ajax({
        url: 'http://localhost:1337/queryById/' + Id,
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, xhr) {
            console.log(data);
            alert('Completed Your query data: ' + JSON.stringify(data));
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
            alert('Error Your query data: ' + JSON.stringify(data));
        }
    });

}