
const unirest = require('unirest');
const q = require('q');

module.exports = {
    statusCheck: function (data) {
        let d = q.defer();
        unirest.get('https://api.getbarter.co/rave_requery')
            .query({
                flw_ref: data.flw_ref,
                reference: data.reference
            })
            .headers({
                'Content-Type': 'application/json'
            })
            .end(function (response) {
                if (response.body.status === "success") {
                    d.resolve(response.body);
                }
                d.reject(response.body);
            });

        return d.promise;
    }
};