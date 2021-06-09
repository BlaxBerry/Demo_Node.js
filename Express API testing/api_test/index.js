window.addEventListener('load', function () {
    $(function () {


        // GET
        $('#get').on('click', function () {
            const data = {
                name: 'Andy',
                age: 28
            }
            sendAjax('GET', 'http://127.0.0.1:3000/api/get', data)

        })

        // POST
        $('#post').on('click', function () {
            const data = {
                name: 'Tom',
                age: 20
            }
            sendAjax('POST', 'http://127.0.0.1:3000/api/post', data)

        })

        // JSONP
        $('#jsonp').on('click', function () {
            $('span').text('')
            $.ajax({
                type: 'GET',
                url: 'http://127.0.0.1:3000/api/jsonp',
                dataType: 'jsonp',
                success: function (res) {
                    console.log(res)
                    $('.jsonp').text(JSON.stringify(res))
                }
            })
        })



        function sendAjax(method, url, data) {
            $('span').text('')
            $.ajax({
                type: method,
                url: url,
                data: data,
                success: function (res) {
                    console.log(res);
                    $('.' + method.toLowerCase()).text(JSON.stringify(res))
                }
            })
        }


    })
})