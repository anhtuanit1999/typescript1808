import {show} from './x2';

import * as express from 'express';

const app = express.default();

app.get('/', (req, res) => {
    res.send('Dieeeeeeee');
});

app.listen(3000, () => console.log('started'));

show('123');