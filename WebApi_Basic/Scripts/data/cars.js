$(document).ready(function () {

    $.get('../../api/CarDetails').done(function (data) {

        $.each(data, function (i, mobj) {
            $("#car-table").append('<tr><td width="50px">' + mobj.CarName +
             '</td><td width="50px">' + mobj.CarModel +
            '</td><td width="50px">' + mobj.CarPrice +
            '</td>' + '</td><td width="50px">'
            + mobj.CarColor + '</td></tr>');
        });

    }).fail(function () {
        alert('Error!Please, try again!');
    });

    $("form").submit(function() {
        var car = {
            CarName: '',
            CarPrice: '',
            CarColor: '',
            CarModel: ''
        };

        car.CarName = $('#name').val();
        car.CarPrice = $('#price').val();
        car.CarColor = $('#color').val();
        car.CarModel = $('#model').val();

        var data = JSON.stringify(car);

        $.ajax({
            type: 'POST',
            data: data,
            url: '../../api/CarDetails',
            dataType: 'json',
            success: function() {
                window.location = '/car';
            },
            contentType: 'application/json',
        });
    });
});