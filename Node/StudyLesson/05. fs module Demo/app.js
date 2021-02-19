const fs = require('fs');

fs.stat(path, (err, data) => {

    if (err) {
        // console.log('There is no such directory or file');
        mkdir();
        return;

    } else {
        // it`s a file? directory?
        if (data.isDirectory()) {
            console.log('directory is already here');

        } else {
            // console.log('upload is a file');
            fs.unlink(path, (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                // console.log('upload is removed');
            });
            mkdir();
        };

    };


    function mkdir() {
        fs.mkdir(path, (err) => {
            if (err) {
                console.log(err);
                console.log('make direcrtory failed');
                return;
            }
            console.log('make directory succeed');
        })
    };

})