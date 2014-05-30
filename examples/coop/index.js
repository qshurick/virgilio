// Copyright (C) 2014 IceMobile Agency B.V.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Virgilio = require('../../');
var options = {
    //Don't log anything (it's annoying when runnig tests).
    logger: {
        name: 'virgilio',
        streams: []
    },
    passThrough: false
};

var coop1 = new Virgilio(options);

var coop2 = new Virgilio(options)
    .loadModule(require('./coop'));

coop1.mediator$.pipe(coop1.mediator$);
coop1.mediator$.pipe(coop2.mediator$);
coop2.mediator$.pipe(coop1.mediator$);
coop2.mediator$.pipe(coop2.mediator$);

module.exports = coop2;
